<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Promotion;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
<<<<<<< HEAD
    public function index() {
        $promotions = Promotion::all();
        $events = Event::with('assets')->get();
        return Inertia::render('Client/Home', ['promotions' => $promotions,'events' => $events,]);
=======
    public function view()
    {
        $promotions = Promotion::all()->where('active', true);
        $events = Event::all();
        return Inertia::render('Client/Home', ['promtions' => $promotions, 'events' => $events]);
>>>>>>> 66b34ba96f44b8b56890a52d4c08669be71e3d91
    }
}
