<?php

namespace App\Http\Controllers;

use App\Models\Consumption;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ConsumptionController extends Controller
{
    public function index()
    {
        $consumptions = Consumption::with('service')->get();
        $services = Service::all();
        return Inertia::render('Admin/Services/Consumptions', ['consumptions' => $consumptions, 'services' => $services]);
    }

    public function store(Request $request)
    {
        request()->validate(
            [
                'consumption_name' => 'required|string',
                'service_id' => 'required',
                'consumption_price' => 'required|numeric'
            ]
        );
        Consumption::create([
            'service_id' => $request->service_id,
            'consumption_name' => $request->consumption_name,
            'consumption_price' => $request->consumption_price,
        ]);
        return redirect(route('consumptions.index'))->with('message', ['status' => 'success', 'message' => 'Consommation ajouter avec succès']);
    }

    public function update(Request $request)
    {
        request()->validate(
            [
                'consumption_name' => 'required|string',
                'service_id' => 'required',
                'consumption_price' => 'required|numeric'
                ]
            );

        $consumption = Consumption::where('consumption_id', $request->consumption)->first();
        $consumption->update([
            'service_id' => $request->service_id,
            'consumption_name' => $request->consumption_name,
            'consumption_price' => $request->consumption_price,
        ]);

        return redirect(route('consumptions.index'))->with('message', ['status' => 'success', 'message' => 'Consommation modifier avec succès']);
    }

    public function destroy(string $id)
    {
        Consumption::where('consumption_id', $id)->delete();
        return redirect()->back()->with('message', ['status' => 'success', 'message'
        => 'Consommation supprimé avec succès']);
    }
}
