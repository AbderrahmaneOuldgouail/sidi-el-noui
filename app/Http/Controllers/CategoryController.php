<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Room;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function store(Request $request)
    {
        if ($request->user()->cannot('viewAny', Room::class) && ($request->user()->cannot('update', Room::class) || $request->user()->cannot('create', Room::class))) {
            return abort(403);
        }
        request()->validate(
            [
                'categorie_name' => 'required|string',
            ]
        );

        Category::create([
            'categorie_name' => $request->categorie_name,
        ]);

        return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Categorie ajouter avec succès']);
    }

    public function update(Request $request)
    {
        if ($request->user()->cannot('viewAny', Room::class) && ($request->user()->cannot('update', Room::class) || $request->user()->cannot('create', Room::class))) {
            return abort(403);
        }
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

    public function destroy(string $id, Request $request)
    {
        if ($request->user()->cannot('viewAny', Room::class) && ($request->user()->cannot('update', Room::class) || $request->user()->cannot('create', Room::class))) {
            return abort(403);
        }
        Category::where('categorie_id', $id)->delete();
        return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Categorie supprimier avec succès']);
    }
}
