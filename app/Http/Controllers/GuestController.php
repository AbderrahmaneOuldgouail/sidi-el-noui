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
        $guests_list = Facture::with('guests')->where('facture_id', $id)->first();
        if ($guests_list->guests->isNotEmpty()) {
            return Inertia::render('Admin/Factures/GuestList');
        }
        return Inertia::render('Admin/Factures/CreateGuests', ['facture_id' => $id]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'facture_id' => 'required',
            'guests_list' => 'required',
            'guests_list.*.first_name' => 'required|string',
            'guests_list.*.last_name' => 'required|string',
        ]);

        Guest::insert($request->guests_list);

        $facture = Facture::where('facture_id', $request->facture_id)->first();

        foreach ($request->guests_list as $guest) {
            $facture->guests()->attach($guest);
        }

        return redirect(route('guests.show', ['guest' => $request->facture_id]))->with('message', ['status' => 'success', 'message' => 'Invités ajouter avec succé']);
    }
}
