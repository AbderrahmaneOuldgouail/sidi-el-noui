<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Feature;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeatureController extends Controller
{
    public function index()
    {
        $features = Feature::with('category')->get();
        return Inertia::render('Admin/Rooms/Features', ['features' => fn () => $features, 'categorys' => Inertia::lazy(fn () => Category::all())]);
    }

    public function store(Request $request)
    {
        request()->validate(
            [
                'features_name' => 'required|string',
                'categorie_id' => 'required|integer',
                'need_value' => 'boolean'
            ]
        );
        Feature::create([
            'features_name' => $request->features_name,
            'categorie_id' => $request->categorie_id,
            'need_value' => $request->need_value
        ]);
        return redirect(route('features.index'))->with('message', ['status' => 'success', 'message' => 'Caractéristique ajouter avec succès']);
    }

    public function update(Request $request)
    {
        request()->validate(
            [
                'features_name' => 'required|string',
                'need_value' => 'nullable|boolean'
            ]
        );

        $feature = Feature::where('feature_id', $request->feature)->first();
        $feature->update([
            'features_name' => $request->features_name,
            'need_value' => $request->need_value
        ]);

        return redirect(route('features.index'))->with('message', ['status' => 'success', 'message' => 'Caractéristique modifier avec succès']);
    }

    public function destroy(string $id)
    {
        Feature::where('feature_id', $id)->delete();
        return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Caractéristique supprimier avec succès']);
    }
}
