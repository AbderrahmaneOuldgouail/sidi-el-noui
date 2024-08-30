<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Promotion;
use App\Models\Service;
use App\Models\Type;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        $rooms = Type::withCount('rooms')->with(['rooms' => function ($query) {
            $query->orderBy('id')->take(1);
        }, 'rooms.assets', 'rooms.features'])->get()->map(function ($type) {
            return $type->rooms->map(function ($room) use ($type) {
                $room->type_designation = $type->type_designation;
                $room->rooms_count = $type->rooms_count;

                return $room;
            });
        })->flatten();

        $services = Service::with('assets')->get();

        $promotions = Promotion::with('assets')->where('is_active', true)->get();
        $events = Event::with('assets')->get();
        return Inertia::render('Client/Home', ['promotions' => $promotions, 'events' => $events, 'rooms' => $rooms, 'services' => $services]);
    }

    public function view()
    {
        $promotions = Promotion::with('assets')->where('active', true)->get();
        $events = Event::all();
        return Inertia::render('Client/Home', ['promtions' => $promotions, 'events' => $events]);
    }
}
