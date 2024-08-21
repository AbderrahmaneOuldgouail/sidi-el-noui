<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        $notifications = $request->user()->notifications;

        return Inertia::render("Admin/Notifications/Notifications", ["notifications" => $notifications]);
    }

    public function read(Request $request)
    {
        foreach ($request->user()->unreadNotifications as $notification) {
            if ($notification->id == $request->id) {
                $notification->markAsRead();
            }
        }
        return redirect()->back();
    }

    public function readAll(Request $request)
    {
        $request->user()->unreadNotifications()->update(['read_at' => now()]);
        return redirect()->back();
    }

    public function deleteAll(Request $request)
    {
        $request->user()->notifications()->delete();
        return redirect()->back();
    }
}
