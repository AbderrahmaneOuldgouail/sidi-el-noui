<?php

namespace App\Http\Controllers;

use App\Enums\booking_status;
use App\Enums\Roles;
use App\Events\NewBooking;
use App\Models\Booking;
use App\Models\Role;
use App\Models\Room;
use App\Models\Service;
use App\Models\User;
use App\Notifications\NewBookingNotif;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->cannot('viewAny', Booking::class)) {
            return Inertia::render('Error/Error_403');
        }

        $bookings = Booking::with('user')->where('check_in', '>=', now())->paginate(10);
        return Inertia::render('Admin/Bookings/Bookings', ['bookings' => $bookings]);
    }

    public function historique(Request $request)
    {
        if ($request->user()->cannot('viewAny', Booking::class)) {
            return Inertia::render('Error/Error_403');
        }

        $bookings = Booking::with('user')->where('check_in', '<', now())->paginate(10);
        return Inertia::render('Admin/Bookings/Historique', ['bookings' => $bookings]);
    }

    public function calendar(Request $request)
    {
        if ($request->user()->cannot('viewAny', Booking::class)) {
            return Inertia::render('Error/Error_403');
        }

        $rooms = Room::with(['bookings', 'assets', 'type'])->whereHas('bookings', function ($query) {
            $query->where('check_in', '>=', now());
        })->get();
        return Inertia::render('Admin/Bookings/Calendar', ['rooms' => $rooms]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function searchAviableRoom(Request $request)
    {
        if ($request->user()->cannot('create', Booking::class)) {
            return Inertia::render('Error/Error_403');
        }

        $request->validate([
            'check_in' => 'required',
            'check_out' => 'required',
            'guest_number' => 'required|numeric',
            'room_number' => 'nullable|numeric',
        ]);

        $date_check_in = $request->check_in;
        $date_check_out = $request->check_out;

        $rooms = Room::with(['features', 'assets', 'type'])->whereDoesntHave('bookings', function ($query) use ($date_check_in, $date_check_out) {
            $query->where(function ($query) use ($date_check_in, $date_check_out) {
                $query->where('check_in', '<', $date_check_out)
                    ->where('check_out', '>', $date_check_in);
            });
        })->get();

        if ($rooms->isNotEmpty()) {
            $booking_data = [
                'check_in' => $date_check_in,
                'check_out' => $date_check_out,
                'guest_number' => $request->guest_number,
                'room_number' => $request->room_number,
            ];
            $cacheKey = 'available_rooms_' . uniqid();

            Cache::put($cacheKey, ['rooms' => $rooms, 'bookingData' => $booking_data], now()->addMinutes(10));

            return redirect()->route('bookings.showAviableRooms', ['cacheKey' => $cacheKey]);
        } else {
            return redirect()->back()->with('message', ['status' => 'error', 'message' => 'No rooms aviable']);
        }
    }

    public function showAviableRooms(Request $request)
    {
        if ($request->user()->cannot('create', Booking::class)) {
            return Inertia::render('Error/Error_403');
        }
        $cacheKey = $request->cacheKey;
        $data = Cache::get($cacheKey);

        if (!$data) {
            return redirect()->route('bookings.index')->with('message', ['status' => 'error', 'message' => 'No data available']);
        }

        $services = Service::with('consomation')->where('availability', true)->get();

        return Inertia::render('Admin/Bookings/AviableRooms', [
            'rooms' => $data['rooms'],
            'bookingData' => $data['bookingData'],
            'services' => $services,
        ]);
    }

    public function changeStatus(Request $request)
    {

        if ($request->user()->cannot('update', Booking::class)) {
            return Inertia::render('Error/Error_403');
        }

        $booking = Booking::where('booking_id', $request->id)->first();
        $booking->update([
            'booking_status' => $request->booking_status
        ]);
        return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Status changé']);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->user()->cannot('create', Booking::class)) {
            return Inertia::render('Error/Error_403');
        }


        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'email',
            'phone' => 'required',
            'rooms' => 'required|array',
            'consomation' => 'array',
            'consomation.*.consumption_id' => 'required|integer',
            'consomation.*.quantity' => 'required|integer',
            'check_in' => 'required|date',
            'check_out' => 'required|date',
            'guest_number' => 'required|numeric',
        ]);

        DB::beginTransaction();
        try {
            $user = User::firstOrCreate(
                [
                    'phone' => $request->phone,
                    'email' => $request->email,

                ],
                [
                    'first_name' => $request->first_name,
                    'last_name' => $request->last_name,
                    'access' => false,
                    'role_id' => Role::where('role_name', Roles::CLIENT->value)->first()->role_id,
                    'password' => bcrypt('password'),
                ]
            );

            $booking = Booking::create([
                'user_id' => $user->id,
                'check_in' => $request->check_in,
                'check_out' => $request->check_out,
                'guest_number' => $request->guest_number,
                "booking_status" => booking_status::Waiting->value,
                'created_at' => now(),
            ]);
            foreach ($request->rooms as $room) {
                $booking->rooms()->attach($room);
            }
            if ($request->consomation) {
                foreach ($request->consomation as $consomation) {
                    $booking->consomation()->attach($consomation['consumption_id'], ['quantity' => $consomation['quantity']]);
                }
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }

        $booking = Booking::with('user')->where('booking_id', $booking->booking_id)->first();

        event(new NewBooking($booking));
        $users = User::where("role_id", 1)->get();
        foreach ($users as $user) {
            $user->notify(new NewBookingNotif($booking));
        }



        return redirect(route('bookings.index'))->with('message', ['status' => 'success', 'message' => 'Réservation effectué avec succé']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id, Request $request)
    {
        if ($request->user()->cannot('viewAny', Booking::class)) {
            return Inertia::render('Error/Error_403');
        }
        $booking = Booking::with(['user', 'consomation', 'rooms'])->where('booking_id', $id)->first();
        return Inertia::render('Admin/Bookings/Booking', ['booking' => $booking]);
    }
}
