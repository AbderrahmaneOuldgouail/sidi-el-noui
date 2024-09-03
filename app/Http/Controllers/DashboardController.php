<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Enums\Permissions;
use App\Enums\permissions_actions;
use App\Events\BookingPlaced;
use App\Events\MyEvent;
use App\Events\NewBooking;
use App\Events\TestEvent;
use App\Models\Booking;
use App\Models\Room;
use App\Models\User;
use App\Notifications\NewBookingNotif;
use App\Notifications\RoomBookingNotification;
use Illuminate\Support\Facades\Notification;

class DashboardController extends Controller
{
    function index()
    {
        $check_ins = Booking::where('check_in', now())->count();
        $check_outs = Booking::where('check_out', now())->count();
        $day_bookings = Booking::where('created_at', now())->count();
        $last_day_bookings = Booking::where('created_at', now()->subDay())->count();
        $month_bookings = Booking::where('created_at', '>=', now()->subMonth())->count();
        $last_month_bookings = Booking::where([
            ['created_at', '<=', now()->subMonths(1)],
            ['created_at', '>=', now()->subMonths(2)]
        ])->count();

        $rooms = Room::with('type')->whereHas('bookings', function ($query) {
            $query->where(function ($query) {
                $query->where('created_at', '>', now()->subMonths(1));
            });
        })
            ->get()
            ->groupBy([
                function ($room) {
                    return $room->type->type_designation;
                }
            ]);

        return Inertia::render('Admin/Dashboard', ['check_ins' => $check_ins, 'check_outs' => $check_outs, 'day_bookings' => $day_bookings, 'month_bookings' => $month_bookings, 'last_day_bookings' => $last_day_bookings, 'last_month_bookings' => $last_month_bookings, 'rooms' => $rooms]);
    }
}
