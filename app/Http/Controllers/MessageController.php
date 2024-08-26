<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
;

class MessageController extends Controller
{
        public function contactIndex(){

        return Inertia::render('Client/Contact');
    }

}
