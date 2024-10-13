<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Promotion;
use App\Models\Service;
use App\Models\Type;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {


        $rooms = Cache::remember('home-rooms', now()->addHours(6), function () {
            return Type::withCount('rooms')->with([
                'rooms' => function ($query) {
                    $query->orderBy('id')->take(1);
                },
                'rooms.assets' => function ($query) {
                    $query->limit(1);
                },
                'rooms.features' => function ($query) {
                    $query->limit(8);
                }
            ])->get()->map(function ($type) {
                return $type->rooms->map(function ($room) use ($type) {
                    $room->type_designation = $type->type_designation;
                    $room->rooms_count = $type->rooms_count;
                    return $room;
                });
            })->flatten();
        });
        $services = Cache::remember('home-services', now()->addHours(6), function () {
            return Service::with(['assets' => function ($query) {
                $query->limit(1);
            }])->get();
        });
        $events = Cache::remember('home-events', now()->addHours(6), function () {
            return Event::with(['assets' => function ($query) {
                $query->limit(1);
            }])->where('event_end_date', '>=', now())
                ->orderBy('event_start_date', 'asc')
                ->limit(1)
                ->first();
        });
        $promotions = Cache::remember('home-promotions', now()->addHours(6), function () {
            return Promotion::with(['assets' => function ($query) {
                $query->limit(1);
            }])->where('is_active', true)->get();
        });
        return Inertia::render('Client/Home', ['promotions' => $promotions, 'events' => $events, 'rooms' => $rooms, 'services' => $services]);
    }
}
