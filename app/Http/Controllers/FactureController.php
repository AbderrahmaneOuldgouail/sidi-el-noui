<?php

namespace App\Http\Controllers;

use App\Enums\Roles;
use App\Mail\FactureEmail;
use App\Models\Booking;
use App\Models\Facture;
use App\Models\Role;
use App\Models\Type;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Date;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;

use function Spatie\LaravelPdf\Support\pdf;

class FactureController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->cannot('viewAny', Facture::class) && ($request->user()->cannot('create', Facture::class) || $request->user()->cannot('delete', Facture::class) || $request->user()->cannot('update', Facture::class))) {
            return abort(403);
        }
        $itemsPerPage = $request->input('pages', 10);
        $factures = Facture::orderBy('created_at')->paginate($itemsPerPage);

        $bill_settings = Cache::get('bill-settings');
        return Inertia::render('Admin/Factures/Factures', ['factures' => $factures, 'bill_settings' => $bill_settings, 'create_permission' => $request->user()->can('create', Facture::class)]);
    }

    public function create()
    {
        return Inertia::render('Admin/Factures/CreateFacture');
    }

    public function store(Request $request)
    {
        if ($request->user()->cannot('create', Facture::class)) {
            return abort(403);
        }

        $request->validate([
            'booking_id' => 'required|integer',
            'payment' => 'required'
        ]);
        $bill_settings = Cache::get('bill-settings', false);

        if (!$bill_settings) {
            return redirect()->back()->with('message', ['status' => 'error', 'message' => 'Voulez sétez les paramètres de facturation avant générer les factures', 'action' => "factures.index"]);
        }
        $booking = Booking::with(['user', 'consomation', 'rooms', 'user.role'])->where('booking_id', $request->booking_id)->first();
        $days = Carbon::parse($booking->check_in)->diffInDays($booking->check_out, true);
        $is_company = $booking->user->role->role_name == Roles::COMPANY->value;

        $rooms = [];
        $rooms_total = 0;
        $consomations = [];
        $consomations_total = 0;
        foreach ($booking->rooms as $room) {
            if ($request->payment == 'espece') {
                $prix_th = (($room->room_price / (1 + $bill_settings['timbre'] / 100)) - $bill_settings['tourist_tax'] * $booking->guest_number) / (1 + $bill_settings['tva'] / 100) * $days;
            } else {
                $prix_th = ($room->room_price - $bill_settings['tourist_tax'] * $booking->guest_number) / (1 + $bill_settings['tva'] / 100) * $days;
            }
            $type = Type::where("type_id", $room->type_id)->first()->type_designation;
            $existingKey = null;
            foreach ($rooms as $key => $value) {
                if (is_array($value) && $value['room'] == $type) {
                    $existingKey = $key;
                    break;
                }
            }
            if ($existingKey !== null) {
                $rooms[$existingKey]['quantity'] += 1;
            } else {
                $rooms[] = ['room' => $type, 'quantity' => 1, 'unitare_price' => round($prix_th, 2)];
            }
            $rooms_total += round($prix_th, 2);
        }
        foreach ($booking->consomation as $consomation) {
            if ($request->payment == 'espece') {
                $prix_th = ($consomation->consumption_price / (1 + $bill_settings['timbre'] / 100)) / (1 + $bill_settings['tva'] / 100); //espece

            } else {
                $prix_th = $consomation->consumption_price  / (1 + $bill_settings['tva'] / 100);
            }
            $consomations[] = ['consumption_name' => $consomation->consumption_name, 'quantity' => $consomation->pivot->quantity, 'unitare_price' => round($prix_th, 2)];
            $consomations_total += round($prix_th, 2) * $consomation->pivot->quantity;
        }

        $total_ht = round($rooms_total, 2) + round($consomations_total, 2);
        $total_tva = round($total_ht * ($bill_settings['tva'] / 100), 2);
        $sous_total = round($total_ht + ($total_tva), 2);
        $taxe_de_sejour = $bill_settings['tourist_tax'] * $booking->guest_number * $days;
        $droit_de_timbre = round((($sous_total) + ($taxe_de_sejour)) * ($bill_settings['timbre'] / 100), 2);
        $total_ttc = round($droit_de_timbre + $taxe_de_sejour + $sous_total, 2);

        $data = [
            'rooms' => $rooms,
            'consomations' => $consomations,
            'user' => [
                'first_name' => $booking->user->first_name,
                'last_name' => $booking->user->last_name,
                'email' => $booking->user->email,
                'adresse' => $is_company ? $booking->user->adresse : "",
                'nif' => $is_company ? $booking->user->nis : "",
                'nis' => $is_company ? $booking->user->nis : "",
                'nrc' => $is_company ? $booking->user->nrc : "",
                'n_article' => $is_company ? $booking->user->n_article : "",
                'is_company' => $is_company,
            ],
            'booking' => [
                'check_in' => $booking->check_in,
                'check_out' => $booking->check_out,
                'created_at' => $booking->created_at,
                'guest_number' => $booking->guest_number,
            ],
            'total_ht' => $total_ht,
            'total_tva' => $total_tva,
            'sous_total' => $sous_total,
            'taxe_de_sejour' => $taxe_de_sejour,
            'droit_de_timbre' => $request->payment == 'espece' ? $droit_de_timbre : 0,
            'total_ttc' => $total_ttc,
        ];


        $facture = Facture::firstOrCreate(
            [
                'booking_id' => $request->booking_id,
            ],
            [
                'data' => $data,
                'tourist_tax' => $bill_settings['tourist_tax'],
                'tva' => $bill_settings['tva'],
                'timbre' => $bill_settings['timbre'],
                'created_at' => now(),
            ]
        );

        if ($booking->check_out >= now()) {
            $facture->update([
                'data' => $data,
                'tourist_tax' => $bill_settings['tourist_tax'],
                'tva' => $bill_settings['tva'],
                'timbre' => $bill_settings['timbre'],
            ]);
        }
        return redirect()->route('factures.show', $facture->facture_id)->with('message', ['status' => 'success', 'message' => 'Facture géniré avec succé']);
    }

    public function billSettings(Request $request)
    {
        $request->validate([
            'tva' => 'required|numeric',
            'timbre' => 'required|numeric',
            'tourist_tax' => 'required|numeric'
        ]);
        Cache::put('bill-settings', ['tva' => $request->tva, 'timbre' => $request->timbre, 'tourist_tax' => $request->tourist_tax]);
        return redirect(route('factures.index'))->with('message', ['status' => 'success', 'message' => 'Paramètre modifier !']);
    }

    public function show(string $id, Request $request)
    {
        $facture = Facture::where("facture_id", $id)->first();
        $mail = config('mail.bookingmail');
        $total_ttc = numberToWords($facture->data['total_ttc']);
        return Inertia::render('Admin/Factures/Facture', ['facture' => $facture, 'mail' => $mail, 'total_ttc' => $total_ttc]);
    }

    public function print(string $id)
    {
        $facture = Facture::where("facture_id", $id)->first();

        $pdf = PDF::loadView('facture', compact('facture'));
        return $pdf->stream('facture-' . $facture->facture_id . '.pdf');
    }

    public function send(string $id)
    {
        $facture = Facture::where("facture_id", $id)->first();

        $pdf = PDF::loadView('facture', compact('facture'));
        $pdf->stream('facture-' . $facture->facture_id . '.pdf');

        Mail::to($facture->data['user']['email'])->send(new FactureEmail($pdf, 'facture-' . $facture->facture_id . '.pdf'));

        return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Facture envoyé avec succé']);
    }

    public function download(string $id)
    {
        $facture = Facture::where("facture_id", $id)->first();

        $pdf = PDF::loadView('facture', compact('facture'));
        return $pdf->download('facture-' . $facture->facture_id . '.pdf');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
