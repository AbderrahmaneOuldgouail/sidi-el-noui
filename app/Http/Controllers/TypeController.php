<?php

namespace App\Http\Controllers;

use App\Models\Type;
use Illuminate\Http\Request;

class TypeController extends Controller
{


    public function store(Request $request)
    {
        request()->validate(
            [
                'type_designation' => 'required|max:20',
            ]
        );
        Type::create([
            'type_designation' => $request->type_designation,
        ]);
        return redirect()->back();
    }
}
