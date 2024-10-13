<?php

namespace App\Http\Controllers;

use App\Models\Facture;
use App\Models\Guest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PhpParser\Node\Stmt\Foreach_;

class GuestController extends Controller
{
    public function show(string $id)
    {
        $guests = Facture::with('guests')->where('facture_id', $id)->first()->guests;
        if ($guests->isNotEmpty()) {
            return Inertia::render('Admin/Factures/GuestList', ['guests' => $guests]);
        }
        return redirect(route('guests.create', $id));
    }

    public function create(string $id)
    {
        return Inertia::render('Admin/Factures/CreateGuests', ['facture_id' => $id]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'facture_id' => 'required',
            'guests_list' => 'required',
            'guests_list.*.guest_first_name' => 'required|string',
            'guests_list.*.guest_last_name' => 'required|string',
        ]);

        $facture = Facture::where('facture_id', $request->facture_id)->first();
        $facture->guests()->createMany($request->guests_list);

        return redirect(route('guests.show', ['id' => $request->facture_id]))->with('message', ['status' => 'success', 'message' => 'Invités ajouter avec succé']);
    }
}
