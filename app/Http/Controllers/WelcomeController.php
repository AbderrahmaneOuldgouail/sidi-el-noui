<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Promotion;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index() {
        $promotions = Promotion::all();
        $events = Event::with('assets')->get();
        return Inertia::render('Client/Home', ['promotions' => $promotions,'events' => $events,]);
    }
}
