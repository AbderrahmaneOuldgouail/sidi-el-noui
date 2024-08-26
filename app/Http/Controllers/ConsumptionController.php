<?php

namespace App\Http\Controllers;

use App\Models\Consumption;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ConsumptionController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->cannot('viewAny', Consumption::class) && ($request->user()->cannot('create', Consumption::class) || $request->user()->cannot('delete', Consumption::class) || $request->user()->cannot('update', Consumption::class))) {
            return abort(403);
        }
        $consumptions = Consumption::with('service')->get();
        $services = Service::all();
        return Inertia::render('Admin/Services/Consumptions', ['consumptions' => $consumptions, 'services' => $services]);
    }

    public function store(Request $request)
    {
        if ($request->user()->cannot('create', Consumption::class)) {
            return abort(403);
        }
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
        if ($request->user()->cannot('update', Consumption::class)) {
            return abort(403);
        }
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

    public function destroy(string $id, Request $request)
    {
        if ($request->user()->cannot('delete', Consumption::class)) {
            return abort(403);
        }
        Consumption::where('consumption_id', $id)->delete();
        return redirect()->back()->with('message', ['status' => 'success', 'message'
        => 'Consommation supprimé avec succès']);
    }
}
