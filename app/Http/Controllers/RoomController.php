<?php

namespace App\Http\Controllers;

use App\Enums\room_status;
use App\Models\Category;
use App\Models\Room;
use App\Models\Type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class RoomController extends Controller
{
    public function index(Request $request)
    {
        $itemsPerPage = $request->input('pages', 10);

        $rooms = Room::with('type')->paginate($itemsPerPage);

        return Inertia::render('Admin/Rooms/Rooms', ['rooms' => $rooms]);
    }

    public function show(Room $room)
    {
        // Cache::remember("room-$request->id", now()->addHour(), fn() =>  Room::with(['features', 'assets', 'type'])->where('room_number', $request->id)->first());

        // $room = Room::with(['features', 'assets', 'type'])->where('room_number', $request->id)->first();
        return Inertia::render('Admin/Rooms/Room', ['room' => $room]);
    }

    public function create()
    {
        $types = Type::all();
        $categorys = Category::with('feature')->get();

        return Inertia::render('Admin/Rooms/RoomCreate', ['types' => $types, 'categorys' => $categorys]);
    }

    public function store(Request $request)
    {
        request()->validate(
            [
                'room_number' => 'required|unique:' . Room::class,
                'type_id' => 'required',
                'room_descreption' => 'required|string|max:255',
                'room_price' => 'required',
                'features' => 'array',
                'assets' => 'required|array',
                'assets.*' => 'file|mimes:jpg,png,jpeg|max:2048',
            ]
        );

        DB::beginTransaction();
        try {
            $room = Room::create([
                'room_number' => $request->room_number,
                'type_id' => $request->type_id,
                'room_descreption' => $request->room_descreption,
                'room_price' => $request->room_price,
                'room_status' => room_status::Free->value,
            ]);
            foreach ($request->features as $feature) {
                $room->features()->attach($feature['id'], ['valeur' => $feature['value']]);
            }

            foreach ($request->file('assets') as $key => $value) {
                $filename = $value->store('rooms', 'public');

                $room->assets()->create([
                    'name' => "Room-{$request->room_number}-img-$key",
                    'url' => $filename,
                ]);
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
        return redirect(route('rooms.index'));
    }

    public function edit(Request $request,)
    {
        $types = Type::all();
        $categorys = Category::with('feature')->get();
        $room = Room::with(['features', 'assets', 'type'])->where('room_number', $request->room)->get();
        return Inertia::render('Admin/Rooms/RoomEdit', ['room' => $room, 'types' => $types, 'categorys' => $categorys]);
    }

    public function update(Request $request)
    {
        // dd($request->all());
        request()->validate(
            [
                'room_number' => 'required',
                'type_id' => 'required',
                'room_descreption' => 'required|string|max:255',
                'room_price' => 'required',
                'features' => 'array',
                'features.*.feature_id' => 'required|integer',
                'features.*.features_name' => 'required|string',
                'features.*.need_value' => 'required|boolean',
                'features.*.value' => 'nullable|string',
                'assets' => 'array',
                'assets.*' => 'file|mimes:jpg,png,jpeg,gif,svg|max:2048',
            ]
        );
        DB::beginTransaction();
        try {
            $room = Room::where('room_number', $request->room_number)->first();

            $room->update([
                'type_id' => $request->type_id,
                'room_descreption' => $request->room_descreption,
                'room_price' => $request->room_price,
            ]);
            if ($request->has('features')) {
                $room->features()->detach();
                // $room->features()->attach($request->features);
                foreach ($request->features as $feature) {
                    $room->features()->attach($feature['feature_id'], ['valeur' => $feature['value']]);
                }
            }
            if ($request->hasFile('assets')) {

                foreach ($request->file('assets') as $key => $file) {
                    $filename = $file->store('rooms', 'public');

                    $room->assets()->create([
                        'name' => "Room-{$request->room_number}-img-{$key}",
                        'url' => $filename,
                    ]);
                }
            }
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
        return redirect(route("rooms.index"));
    }

    public function toggleStatus(Request $request)
    {
        $room = Room::where('room_number', $request->room_number)->first();
        $room->update([
            'room_status' => $request->room_status
        ]);
        return redirect(route("rooms.index"));
    }
}
