<?php

namespace App\Http\Controllers;

use App\Models\Assets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AssetsController extends Controller
{

    // public function store(Request $request)
    // {
    //     foreach ($request->all() as $key => $value) {
    //         $filename[] = $value->store('rooms', 'public');
    //     }
    //     dd($filename);
    //     return redirect()->back();
    // }

    public function destroy(Request $request)
    {
        $asset = Assets::find($request->id);
        Storage::disk('public')->delete($asset->getOriginalUrlAttribute());
        $asset->delete();
    }
}
