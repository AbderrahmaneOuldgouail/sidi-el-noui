<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function store(Request $request)
    {
        request()->validate(
            [
                'categorie_name' => 'required|string',
            ]
        );
        Category::create([
            'categorie_name' => $request->categorie_name,
        ]);
        return redirect(route('features.index'))->with('message', ['status' => 'success', 'message' => 'Categorie ajouter avec succès']);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        request()->validate(
            [
                'categorie_name' => 'required|string',
            ]
        );
        $category = Category::where('categorie_id', $request->category)->first();
        $category->update([
            'categorie_name' => $request->categorie_name,
        ]);

        return redirect(route('features.index'))->with('message', ['status' => 'success', 'message' => 'Categorie modifier avec succès']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Category::where('categorie_id', $id)->delete();
        return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Categorie supprimier avec succès']);
    }
}
