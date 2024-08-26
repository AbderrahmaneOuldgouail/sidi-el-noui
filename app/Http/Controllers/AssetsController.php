<?php

namespace App\Http\Controllers;

use App\Models\Assets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AssetsController extends Controller
{
    public function destroy(Request $request)
    {
        $asset = Assets::find($request->id);
        Storage::disk('public')->delete($asset->getOriginalUrlAttribute());
        $asset->delete();
    }
}
