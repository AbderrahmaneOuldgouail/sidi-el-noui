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
use App\Models\Type;
use App\Models\User;
use App\Notifications\NewBookingNotif;
use App\Notifications\RoomBookingNotification;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Notification;

class DashboardController extends Controller
{
    function index()
    {
        $check_ins = Cache::remember('check_ins', now()->addHour(), function () {
            return Booking::whereDate('check_in', now())->count();
        });
        $check_outs = Cache::remember('check_outs', now()->addHour(), function () {
            return Booking::whereDate('check_out', now())->count();
        });
        $day_bookings = Cache::remember('day_bookings', now()->addHour(), function () {
            return Booking::whereDate('created_at', now())->count();
        });
        $last_day_bookings = Cache::remember('last_day_bookings', now()->addHour(), function () {
            return Booking::whereDate('created_at', now()->subDay())->count();
        });
        $month_bookings = Cache::remember('month_bookings', now()->addHour(), function () {
            return
                Booking::whereDate('created_at', '>=', now()->subMonth())->count();
        });
        $last_month_bookings = Cache::remember('last_month_bookings', now()->addHour(), function () {
            return
                Booking::where([
                    ['created_at', '<=', now()->subMonths(1)],
                    ['created_at', '>=', now()->subMonths(2)]
                ])->count();
        });
        $bookingCounts = Cache::remember('dashboard_statistic_rooms', now()->addHour(), function () {
            return
                Type::withCount(['rooms as booking_count' => function ($query) {
                    $query->join('room_bookings', 'rooms.id', '=', 'room_bookings.room_id')
                        ->join('bookings', 'room_bookings.booking_id', '=', 'bookings.booking_id')
                        ->where('bookings.created_at', '>', now()->subMonth());
                }])->get();
        });


        return Inertia::render('Admin/Dashboard', ['check_ins' => $check_ins, 'check_outs' => $check_outs, 'day_bookings' => $day_bookings, 'month_bookings' => $month_bookings, 'last_day_bookings' => $last_day_bookings, 'last_month_bookings' => $last_month_bookings, 'bookingCounts' => $bookingCounts]);
    }
}
