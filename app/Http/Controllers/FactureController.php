<?php

namespace App\Http\Controllers;

use App\Enums\FacturePayment;
use App\Mail\FactureEmail;
use App\Models\Facture;
use App\Models\Type;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;


class FactureController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->cannot('viewAny', Facture::class) && ($request->user()->cannot('create', Facture::class) || $request->user()->cannot('delete', Facture::class) || $request->user()->cannot('update', Facture::class))) {
            return abort(403);
        }
        $itemsPerPage = $request->input('pages', 10);
        $factures = Facture::with(['booking.user.role' => function ($query) {
            $query->select('role_id', 'role_name');
        }, 'booking.user' => function ($query) {
            $query->select('id', 'first_name', 'last_name', 'email', 'role_id');
        }])->orderBy('created_at')->paginate($itemsPerPage);

        $bill_settings = Cache::get('bill-settings');
        return Inertia::render('Admin/Factures/Factures', ['factures' => $factures, 'bill_settings' => $bill_settings]);
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

        $facture = Facture::firstOrCreate(
            [
                'booking_id' => $request->booking_id,
            ],
            [
                'payment' => $request->payment,
                'tourist_tax' => $bill_settings['tourist_tax'],
                'tva' => $bill_settings['tva'],
                'timbre' => $bill_settings['timbre'],
                'created_at' => now(),
            ]
        );

        if ($facture) {
            $facture->update([
                'payment' => $request->payment,
                'tourist_tax' => $bill_settings['tourist_tax'],
                'tva' => $bill_settings['tva'],
                'timbre' => $bill_settings['timbre'],
                'updated_at' => now(),
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
        $facture = Facture::with('booking', 'booking.user', 'booking.rooms', 'booking.consomation')->where("facture_id", $id)->first();
        if (!$facture) {
            abort(404);
        }


        $mail = config('mail.bookingmail');

        $bill_settings = Cache::get('bill-settings', false);
        if (!$bill_settings) {
            return redirect()->back()->with('message', ['status' => 'error', 'message' => 'Voulez sétez les paramètres de facturation avant générer les factures', 'action' => "factures.index"]);
        }
        $days = Carbon::parse($facture->booking->check_in)->diffInDays($facture->booking->check_out, true);
        $rooms = [];
        $rooms_total = 0;
        $consomations = [];
        $consomations_total = 0;

        foreach ($facture->booking->rooms as $room) {
            if ($facture->payment == FacturePayment::Espece->value) {
                $prix_th = (($room->pivot->room_price / (1 + $bill_settings['timbre'] / 100)) - $bill_settings['tourist_tax'] * $facture->booking->guest_number) / (1 + $bill_settings['tva'] / 100) * $days;
            } else {
                $prix_th = ($room->pivot->room_price - $bill_settings['tourist_tax'] * $facture->booking->guest_number) / (1 + $bill_settings['tva'] / 100) * $days;
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
        foreach ($facture->booking->consomation as $consomation) {
            if ($facture->payment == FacturePayment::Espece->value) {
                $prix_th = ($consomation->pivot->current_consumption_price / (1 + $bill_settings['timbre'] / 100)) / (1 + $bill_settings['tva'] / 100); //espece

            } else {
                $prix_th = $consomation->pivot->current_consumption_price  / (1 + $bill_settings['tva'] / 100);
            }
            $consomations[] = ['consumption_name' => $consomation->consumption_name, 'quantity' => $consomation->pivot->quantity, 'unitare_price' => round($prix_th, 2)];
            $consomations_total += round($prix_th, 2) * $consomation->pivot->quantity;
        }

        $total_ht = round($rooms_total, 2) + round($consomations_total, 2);
        $total_tva = round($total_ht * ($bill_settings['tva'] / 100), 2);
        $sous_total = round($total_ht + ($total_tva), 2);
        $taxe_de_sejour = $bill_settings['tourist_tax'] * $facture->booking->guest_number * $days;
        $droit_de_timbre = $facture->payment == FacturePayment::Espece->value ? round((($sous_total) + ($taxe_de_sejour)) * ($bill_settings['timbre'] / 100), 2) : 0;
        $total_ttc = round($droit_de_timbre + $taxe_de_sejour + $sous_total, 2);
        $data = [
            'rooms' => $rooms,
            'consomations' => $consomations,
            'total_ht' => $total_ht,
            'total_tva' => $total_tva,
            'sous_total' => $sous_total,
            'taxe_de_sejour' => $taxe_de_sejour,
            'droit_de_timbre' => $facture->payment == FacturePayment::Espece->value ? $droit_de_timbre : 0,
            'total_ttc' => $total_ttc,
        ];

        $total_ttc_words = numberToWords($total_ttc);

        return Inertia::render('Admin/Factures/Facture', ['facture' => $facture, 'data' => $data, 'mail' => $mail, 'total_ttc_words' => $total_ttc_words]);
    }

    public function print(string $id)
    {
        $facture = Facture::with('booking', 'booking.user', 'booking.rooms', 'booking.consomation')->where("facture_id", $id)->first();
        if (!$facture) {
            abort(404);
        }

        $bill_settings = Cache::get('bill-settings', false);
        if (!$bill_settings) {
            return redirect()->back()->with('message', ['status' => 'error', 'message' => 'Voulez sétez les paramètres de facturation avant générer les factures', 'action' => "factures.index"]);
        }
        $days = Carbon::parse($facture->booking->check_in)->diffInDays($facture->booking->check_out, true);
        $rooms = [];
        $rooms_total = 0;
        $consomations = [];
        $consomations_total = 0;

        foreach ($facture->booking->rooms as $room) {
            if ($facture->payment == 'espece') {
                $prix_th = (($room->pivot->room_price / (1 + $bill_settings['timbre'] / 100)) - $bill_settings['tourist_tax'] * $facture->booking->guest_number) / (1 + $bill_settings['tva'] / 100) * $days;
            } else {
                $prix_th = ($room->pivot->room_price - $bill_settings['tourist_tax'] * $facture->booking->guest_number) / (1 + $bill_settings['tva'] / 100) * $days;
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
        foreach ($facture->booking->consomation as $consomation) {
            if ($facture->payment == 'espece') {
                $prix_th = ($consomation->pivot->current_consumption_price / (1 + $bill_settings['timbre'] / 100)) / (1 + $bill_settings['tva'] / 100); //espece

            } else {
                $prix_th = $consomation->pivot->current_consumption_price  / (1 + $bill_settings['tva'] / 100);
            }
            $consomations[] = ['consumption_name' => $consomation->consumption_name, 'quantity' => $consomation->pivot->quantity, 'unitare_price' => round($prix_th, 2)];
            $consomations_total += round($prix_th, 2) * $consomation->pivot->quantity;
        }

        $total_ht = round($rooms_total, 2) + round($consomations_total, 2);
        $total_tva = round($total_ht * ($bill_settings['tva'] / 100), 2);
        $sous_total = round($total_ht + ($total_tva), 2);
        $taxe_de_sejour = $bill_settings['tourist_tax'] * $facture->booking->guest_number * $days;
        $droit_de_timbre = round((($sous_total) + ($taxe_de_sejour)) * ($bill_settings['timbre'] / 100), 2);
        $total_ttc = round($droit_de_timbre + $taxe_de_sejour + $sous_total, 2);


        $data = [
            'rooms' => $rooms,
            'consomations' => $consomations,
            'total_ht' => $total_ht,
            'total_tva' => $total_tva,
            'sous_total' => $sous_total,
            'taxe_de_sejour' => $taxe_de_sejour,
            'droit_de_timbre' => $facture->payment == FacturePayment::Espece->value ? $droit_de_timbre : 0,
            'total_ttc' => $total_ttc,
        ];


        $pdf = PDF::loadView('facture', compact(['facture', 'data']));
        return $pdf->stream('facture-' . $facture->facture_id . '.pdf');
    }

    public function send(string $id)
    {
        $facture = Facture::with('booking', 'booking.user', 'booking.rooms', 'booking.consomation')->where("facture_id", $id)->first();
        if (!$facture) {
            abort(404);
        }

        $bill_settings = Cache::get('bill-settings', false);
        if (!$bill_settings) {
            return redirect()->back()->with('message', ['status' => 'error', 'message' => 'Voulez sétez les paramètres de facturation avant générer les factures', 'action' => "factures.index"]);
        }
        $days = Carbon::parse($facture->booking->check_in)->diffInDays($facture->booking->check_out, true);
        $rooms = [];
        $rooms_total = 0;
        $consomations = [];
        $consomations_total = 0;

        foreach ($facture->booking->rooms as $room) {
            if ($facture->payment == 'espece') {
                $prix_th = (($room->pivot->room_price / (1 + $bill_settings['timbre'] / 100)) - $bill_settings['tourist_tax'] * $facture->booking->guest_number) / (1 + $bill_settings['tva'] / 100) * $days;
            } else {
                $prix_th = ($room->pivot->room_price - $bill_settings['tourist_tax'] * $facture->booking->guest_number) / (1 + $bill_settings['tva'] / 100) * $days;
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
        foreach ($facture->booking->consomation as $consomation) {
            if ($facture->payment == 'espece') {
                $prix_th = ($consomation->pivot->current_consumption_price / (1 + $bill_settings['timbre'] / 100)) / (1 + $bill_settings['tva'] / 100); //espece

            } else {
                $prix_th = $consomation->pivot->current_consumption_price  / (1 + $bill_settings['tva'] / 100);
            }
            $consomations[] = ['consumption_name' => $consomation->consumption_name, 'quantity' => $consomation->pivot->quantity, 'unitare_price' => round($prix_th, 2)];
            $consomations_total += round($prix_th, 2) * $consomation->pivot->quantity;
        }

        $total_ht = round($rooms_total, 2) + round($consomations_total, 2);
        $total_tva = round($total_ht * ($bill_settings['tva'] / 100), 2);
        $sous_total = round($total_ht + ($total_tva), 2);
        $taxe_de_sejour = $bill_settings['tourist_tax'] * $facture->booking->guest_number * $days;
        $droit_de_timbre = round((($sous_total) + ($taxe_de_sejour)) * ($bill_settings['timbre'] / 100), 2);
        $total_ttc = round($droit_de_timbre + $taxe_de_sejour + $sous_total, 2);


        $data = [
            'rooms' => $rooms,
            'consomations' => $consomations,
            'total_ht' => $total_ht,
            'total_tva' => $total_tva,
            'sous_total' => $sous_total,
            'taxe_de_sejour' => $taxe_de_sejour,
            'droit_de_timbre' => $facture->payment == FacturePayment::Espece->value ? $droit_de_timbre : 0,
            'total_ttc' => $total_ttc,
        ];


        $pdf = PDF::loadView('facture', compact(['facture', 'data']));
        $pdf->stream('facture-' . $facture->facture_id . '.pdf');

        Mail::to($facture->booking->user->email)->send(new FactureEmail($pdf, 'facture-' . $facture->facture_id . '.pdf'));

        return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Facture envoyé avec succé']);
    }

    public function download(string $id)
    {
        $facture = Facture::with('booking', 'booking.user', 'booking.rooms', 'booking.consomation')->where("facture_id", $id)->first();
        if (!$facture) {
            abort(404);
        }

        $bill_settings = Cache::get('bill-settings', false);
        if (!$bill_settings) {
            return redirect()->back()->with('message', ['status' => 'error', 'message' => 'Voulez sétez les paramètres de facturation avant générer les factures', 'action' => "factures.index"]);
        }
        $days = Carbon::parse($facture->booking->check_in)->diffInDays($facture->booking->check_out, true);
        $rooms = [];
        $rooms_total = 0;
        $consomations = [];
        $consomations_total = 0;

        foreach ($facture->booking->rooms as $room) {
            if ($facture->payment == 'espece') {
                $prix_th = (($room->pivot->room_price / (1 + $bill_settings['timbre'] / 100)) - $bill_settings['tourist_tax'] * $facture->booking->guest_number) / (1 + $bill_settings['tva'] / 100) * $days;
            } else {
                $prix_th = ($room->pivot->room_price - $bill_settings['tourist_tax'] * $facture->booking->guest_number) / (1 + $bill_settings['tva'] / 100) * $days;
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
        foreach ($facture->booking->consomation as $consomation) {
            if ($facture->payment == 'espece') {
                $prix_th = ($consomation->pivot->current_consumption_price / (1 + $bill_settings['timbre'] / 100)) / (1 + $bill_settings['tva'] / 100); //espece

            } else {
                $prix_th = $consomation->pivot->current_consumption_price  / (1 + $bill_settings['tva'] / 100);
            }
            $consomations[] = ['consumption_name' => $consomation->consumption_name, 'quantity' => $consomation->pivot->quantity, 'unitare_price' => round($prix_th, 2)];
            $consomations_total += round($prix_th, 2) * $consomation->pivot->quantity;
        }

        $total_ht = round($rooms_total, 2) + round($consomations_total, 2);
        $total_tva = round($total_ht * ($bill_settings['tva'] / 100), 2);
        $sous_total = round($total_ht + ($total_tva), 2);
        $taxe_de_sejour = $bill_settings['tourist_tax'] * $facture->booking->guest_number * $days;
        $droit_de_timbre = round((($sous_total) + ($taxe_de_sejour)) * ($bill_settings['timbre'] / 100), 2);
        $total_ttc = round($droit_de_timbre + $taxe_de_sejour + $sous_total, 2);


        $data = [
            'rooms' => $rooms,
            'consomations' => $consomations,
            'total_ht' => $total_ht,
            'total_tva' => $total_tva,
            'sous_total' => $sous_total,
            'taxe_de_sejour' => $taxe_de_sejour,
            'droit_de_timbre' => $facture->payment == FacturePayment::Espece->value ? $droit_de_timbre : 0,
            'total_ttc' => $total_ttc,
        ];


        $pdf = PDF::loadView('facture', compact(['facture', 'data']));
        return $pdf->download('facture-' . $facture->facture_id . '.pdf');
    }
}
