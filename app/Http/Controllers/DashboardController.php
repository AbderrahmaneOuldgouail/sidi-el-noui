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
use App\Models\User;
use App\Notifications\NewBookingNotif;
use App\Notifications\RoomBookingNotification;
use Illuminate\Support\Facades\Notification;

class DashboardController extends Controller
{
    function index(Request $request)
    {
        return Inertia::render('Admin/Dashboard');
    }

    function dispach()
    {
        $booking = Booking::with('user')->where('booking_id', 1)->first();
        event(new NewBooking($booking));
        $users = User::where("access", true)->get();
        Notification::send($users, new NewBookingNotif($booking));
    }
}
