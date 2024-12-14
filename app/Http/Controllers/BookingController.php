<?php

namespace App\Http\Controllers;

use App\Enums\booking_status;
use App\Enums\Roles;
use App\Enums\room_status;
use App\Events\NewBooking;
use App\Mail\BookingStatus;
use App\Models\Booking;
use App\Models\Promotion;
use App\Models\Role;
use App\Models\Room;
use App\Models\Service;
use App\Models\User;
use App\Notifications\NewBookingNotif;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->cannot('viewAny', Booking::class)) {
            return abort(403);
        }

        $bookings = Booking::with('user')->where('check_out', '>=', now())->orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('Admin/Bookings/Bookings', ['bookings' => $bookings, 'booking_permission' => getModelPermission($request, Booking::class)]);
    }

    public function historique(Request $request)
    {
        if ($request->user()->cannot('viewAny', Booking::class)) {
            return abort(403);
        }

        $bookings = Booking::with('user')->where('check_out', '<', now())->paginate(10);
        return Inertia::render('Admin/Bookings/Historique', ['bookings' => $bookings]);
    }

    public function calendar(Request $request)
    {
        if ($request->user()->cannot('viewAny', Booking::class)) {
            return abort(403);
        }

        $rooms = Room::with(['bookings', 'assets', 'type'])->whereHas('bookings', function ($query) {
            $query->where('check_in', '>=', now());
        })->get();
        return Inertia::render('Admin/Bookings/Calendar', ['rooms' => $rooms]);
    }

    public function searchAviableRoom(Request $request)
    {
        if ($request->user()->cannot('create', Booking::class)) {
            return abort(403);
        }
        $request->validate([
            'check_in' => 'required',
            'check_out' => 'required',
            'guest_number' => 'required|numeric',
        ]);

        $date_check_in = $request->check_in;
        $date_check_out = $request->check_out;

        $rooms = Room::with(['features',  'type'])->whereDoesntHave('bookings', function ($query) use ($date_check_in, $date_check_out) {
            $query->where(function ($query) use ($date_check_in, $date_check_out) {
                $query->where('check_in', '<', $date_check_out)
                    ->where('check_out', '>', $date_check_in);
            });
        })->where('room_status', '<>', room_status::Out_of_service->value)->get();

        if ($rooms->isNotEmpty()) {
            $booking_data = [
                'check_in' => $date_check_in,
                'check_out' => $date_check_out,
                'guest_number' => $request->guest_number,
                'is_company' => $request->is_company
            ];

            $services = Service::with('consomation')->where('availability', true)->get();

            return Inertia::render('Admin/Bookings/AviableRooms', [
                'rooms' => $rooms,
                'bookingData' => $booking_data,
                'services' => $services,
            ]);
        } else {
            return redirect()->back()->with('message', ['status' => 'error', 'message' => 'No rooms aviable']);
        }
    }

    public function changeStatus(Request $request)
    {
        if ($request->user()->cannot('update', Booking::class)) {
            return abort(403);
        }

        $booking = Booking::with('user')->where('booking_id', $request->id)->first();
        Mail::to($booking->user->email)->queue(new BookingStatus($request->booking_status, $booking));

        $booking->update([
            'booking_status' => $request->booking_status
        ]);
        return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Status changé']);
    }

    public function store(Request $request)
    {
        if ($request->user()->cannot('create', Booking::class)) {
            return abort(403);
        }

        // dd($request->is_company ? Roles::COMPANY->value : Roles::CLIENT->value);

        $request->validate([
            'first_name' => 'required|string|max:30',
            'last_name' => 'nullable|string|max:30',
            'email' => 'email|max:50',
            'phone' => ['required', 'string', 'regex:/^(05|06|07|02)[0-9]{8}$/'],
            'rooms' => 'required|array',
            'consomation' => 'array',
            'consomation.*.consumption_id' => 'required|integer',
            'consomation.*.quantity' => 'required|integer',
            'consomation.*.current_consumption_price' => 'required|integer',
            'check_in' => 'required|date',
            'check_out' => 'required|date',
            'guest_number' => 'required|numeric',
            'adresse' => 'nullable|string|max:50',
            'nif' => 'nullable|numeric|max_digits:15',
            'nis' => 'nullable|numeric|max_digits:14',
            'nrc' => 'nullable|alpha_num|max_digits:11',
            'n_article' => 'nullable|numeric|max_digits:12',
        ]);

        DB::beginTransaction();
        $user = User::where('email', $request->email,)->orWhere('phone', $request->phone)->first();
        if (!$user) {
            $user = User::create(
                [
                    'email' => $request->email,
                    'phone' => $request->phone,
                    'first_name' => $request->first_name,
                    'last_name' => $request->last_name,
                    'access' => false,
                    'adresse' => $request->adresse,
                    'nif' => $request->nif,
                    'nis' => $request->nis,
                    'nrc' => $request->nrc,
                    'n_article' => $request->n_article,
                    'role_id' => Role::where('role_name', $request->is_company ? Roles::COMPANY->value : Roles::CLIENT->value)->first()->role_id,
                    'password' => bcrypt('password'),
                ]
            );
        }


        $booking = Booking::create([
            'user_id' => $user->id,
            'check_in' => $request->check_in,
            'check_out' => $request->check_out,
            'guest_number' => $request->guest_number,
            'kids_number' => 0,
            "booking_status" => booking_status::Confirmed->value,
            'created_at' => now(),
        ]);
        foreach ($request->rooms as $room) {
            $booking->rooms()->attach($room['id'], ['room_price' => $room['room_price']]);
        }
        if ($request->consomation) {
            foreach ($request->consomation as $consomation) {
                $booking->consomation()->attach($consomation['consumption_id'], ['quantity' => $consomation['quantity'], 'current_consumption_price' => $consomation['current_consumption_price']]);
            }
        }
        DB::commit();

        // $booking = Booking::with('user')->where('booking_id', $booking->booking_id)->first();
        // event(new NewBooking($booking));
        // $users = User::where("role_id", 1)->get();
        // foreach ($users as $user) {
        //     $user->notify(new NewBookingNotif($booking));
        // }

        Cache::forget('check_ins');
        Cache::forget('check_outs');
        Cache::forget('day_bookings');
        Cache::forget('last_day_bookings');
        Cache::forget('month_bookings');
        Cache::forget('last_month_bookings');
        Cache::forget('dashboard_statistic_rooms');

        return redirect(route('bookings.index'))->with('message', ['status' => 'success', 'message' => 'Réservation effectué avec succé']);
    }

    public function show(string $id, Request $request)
    {
        if ($request->user()->cannot('viewAny', Booking::class)) {
            return abort(403);
        }
        $booking = Booking::with(['user', 'rooms', 'consomation', 'rooms.type', 'rooms.features', 'rooms.assets'])->where('booking_id', $id)->first();
        return Inertia::render('Admin/Bookings/Booking', ['booking' => $booking]);
    }

    public function searchForBooking(Request $request)
    {
        $request->validate([
            'check_in' => 'required',
            'check_out' => 'required',
            'guest_number' => 'required|numeric',
            'kids_number' => 'nullable|numeric'
        ]);
        $date_check_in = $request->check_in;
        $date_check_out = $request->check_out;

        $rooms = Room::with(['features', 'assets', 'type'])->whereDoesntHave('bookings', function ($query) use ($date_check_in, $date_check_out) {
            $query->where(function ($query) use ($date_check_in, $date_check_out) {
                $query->where('check_in', '<', $date_check_out)
                    ->where('check_out', '>', $date_check_in)
                    ->where('booking_status', booking_status::Cancled->value)
                    ->where('booking_status', booking_status::Refuse->value);
            });
        })
            ->where('room_status', '<>', room_status::Out_of_service->value)
            ->where('beeds_number', '<=', $request->guest_number)
            ->get()
            ->groupBy([
                function ($room) {
                    return $room->type->type_designation;
                },
                'beeds_number',
                'room_price',
            ]);

        if ($rooms->isNotEmpty()) {
            $booking_data = [
                'check_in' => $request->check_in,
                'check_out' => $request->check_out,
                'guest_number' => $request->guest_number,
                'kids_number' => $request->kids_number ?? 0
            ];
            $services = Service::with('consomation')->where('availability', true)->get();
            if ($request->user()) {
                $promotion =  Promotion::where('is_active', true)
                    ->where('promo_end_date', '>=', now())
                    ->where('promo_start_date', '<=', now())
                    ->where('promo_end_date', '>=', $request->check_in)
                    ->where('promo_start_date', '<=', $request->check_in)
                    ->orderBy('promo_start_date', 'asc')
                    ->limit(1)
                    ->first();
            } else {
                $promotion = null;
            }
            return Inertia::render('Client/AviableRooms', ['rooms' => $rooms, 'booking_data' => $booking_data, 'services' => $services, 'promotion' => $promotion]);
        }
        return redirect()->back()->with('message', ['status' => 'error', 'message' => 'Accun chambre disponible!']);
    }

    public function clientStore(Request $request)
    {

        $request->validate([
            'first_name' => 'required|string|max:30',
            'last_name' => 'required|string|max:30',
            'email' => 'email|max:50',
            'phone' => ['required', 'string', 'regex:/^(05|06|07)[0-9]{8}$/'],
            'rooms' => 'required|array',
            'consomation' => 'array',
            'consomation.*.consumption_id' => 'required|integer',
            'consomation.*.quantity' => 'required|integer',
            'consomation.*.current_consumption_price' => 'required|integer',
            'check_in' => 'required|date',
            'check_out' => 'required|date',
            'guest_number' => 'required|numeric',
            'kids_number' => 'nullable|numeric',
            'promo_value' => 'nullable'
        ]);

        DB::beginTransaction();

        $user = User::where('email', $request->email,)->orWhere('phone', $request->phone)->first();
        if (!$user) {
            $user = User::create(
                [
                    'email' => $request->email,
                    'phone' => $request->phone,
                    'first_name' => $request->first_name,
                    'last_name' => $request->last_name,
                    'access' => false,
                    'role_id' => Role::where('role_name', Roles::CLIENT->value)->first()->role_id,
                    'password' => bcrypt('password'),
                ]
            );
        }

        $booking = Booking::create([
            'user_id' => $user->id,
            'check_in' => $request->check_in,
            'check_out' => $request->check_out,
            'guest_number' => $request->guest_number,
            'kids_number' => $request->kids_number,
            "booking_status" => booking_status::Waiting->value,
            'created_at' => now(),
        ]);
        if ($request->user()) {
            if ($request->promo_value) {
                foreach ($request->rooms as $room) {
                    $booking->rooms()->attach($room['id'], ['room_price' => $room['room_price'] - $request->promo_value]);
                }
            }
        } else {
            foreach ($request->rooms as $room) {
                $booking->rooms()->attach($room['id'], ['room_price' => $room['room_price']]);
            }
        }
        if ($request->consomation) {
            foreach ($request->consomation as $consomation) {
                $booking->consomation()->attach($consomation['consumption_id'], ['quantity' => $consomation['quantity'], 'current_consumption_price' => $consomation['current_consumption_price']]);
            }
        }
        DB::commit();


        $booking = Booking::with('user')->where('booking_id', $booking->booking_id)->first();

        event(new NewBooking($booking));
        $users = User::where("access", true)->get();
        foreach ($users as $user) {
            $user->notify(new NewBookingNotif($booking));
        }

        Cache::forget('check_ins');
        Cache::forget('check_outs');
        Cache::forget('day_bookings');
        Cache::forget('last_day_bookings');
        Cache::forget('month_bookings');
        Cache::forget('last_month_bookings');
        Cache::forget('dashboard_statistic_rooms');

        return redirect(route('client.index'))->with('message', ['status' => 'success', 'message' => 'Réservation effectué avec succé']);
    }

    public function myBookings(Request $request)
    {
        $bookings = Booking::with(['rooms', 'rooms.type'])->where('user_id', $request->user()->id)->paginate(10);
        return Inertia::render('Client/Bookings/MyBookings', ['bookings' => $bookings]);
    }

    public function myBookingshow(string $id)
    {
        $booking = Booking::with(['user', 'rooms', 'consomation', 'rooms.type', 'rooms.features', 'rooms.assets'])->where('booking_id', $id)->first();
        return Inertia::render('Client/Bookings/Booking', ['booking' => $booking]);
    }

    public function cancleBooking(string $id)
    {
        $booking = Booking::where('booking_id', $id)->first();

        $booking->update([
            'booking_status' => booking_status::Cancled->value,
        ]);

        return redirect()->back()->with('message',  ['status' => 'success', 'message' => 'Réservation annuler']);
    }
}
