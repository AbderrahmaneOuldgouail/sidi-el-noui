<?php

namespace App\Http\Controllers;

use App\Mail\FactureEmail;
use App\Models\Booking;
use App\Models\Facture;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Browsershot\Browsershot;
use Illuminate\Support\Facades\Mail;

use function Spatie\LaravelPdf\Support\pdf;

class FactureController extends Controller
{
    public function index(Request $request)
    {
        $itemsPerPage = $request->input('pages', 10);

        $factures = Facture::orderBy('created_at')->paginate($itemsPerPage);
        // dd($factures);

        return Inertia::render('Admin/Factures/Factures', ['factures' => $factures]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Factures/CreateFacture');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'booking_id' => 'required|integer',
        ]);


        $booking = Booking::with(['user', 'consomation', 'rooms'])->where('booking_id', $request->booking_id)->first();


        $facture = Facture::firstOrCreate(
            [
                'booking_id' => $request->booking_id,
            ],
            [
                'data' => $booking,
                'tourist_tax' => 200.00,
                'tva' => 0.9,
                'timbre' => 74.26,
                'created_at' => now(),
            ]
        );
        return redirect()->route('factures.show', $facture->facture_id)->with('message', ['status' => 'success', 'message' => 'Facture géniré avec succé']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $facture = Facture::where("facture_id", $id)->first();

        return Inertia::render('Admin/Factures/Facture', ['facture' => $facture]);
    }

    public function print(string $id)
    {
        $facture = Facture::where("facture_id", $id)->first();

        $pdf = PDF::loadView('facture', compact('facture'));
        return $pdf->stream('facture-' . $facture->facture_id . '.pdf');

        // return Inertia::render('Admin/Factures/Facture', ['facture' => $facture]);
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
