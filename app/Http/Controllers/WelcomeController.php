<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Promotion;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function view()
    {
        $promotions = Promotion::all()->where('active', true);
        $events = Event::all();
        return Inertia::render('Client/Home', ['promtions' => $promotions, 'events' => $events]);
    }
}
