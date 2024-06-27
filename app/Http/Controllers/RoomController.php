<?php

namespace App\Http\Controllers;

use App\Enums\AssetsModelsTypes;
use App\Enums\room_status;
use App\Models\Assets;
use App\Models\Categorie;
use App\Models\Category;
use App\Models\Room;
use App\Models\RoomFeature;
use App\Models\Type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class RoomController extends Controller
{
    public function index(Request $request)
    {
        $itemsPerPage = $request->input('pages', 10);

        $rooms = Room::with('type')->paginate($itemsPerPage);


        return Inertia::render('Admin/Rooms', ['rooms' => $rooms]);
    }


    public function show(Request $request)
    {
        $room = Room::with(['features', 'assets', 'type'])->where('room_number', $request->id)->get();
        return Inertia::render('Admin/Room', ['room' => $room]);
    }

    public function create()
    {
        $types = Type::all();
        $categorys = Category::with('feature')->get();

        return Inertia::render('Admin/RoomCreate', ['types' => $types, 'categorys' => $categorys]);
    }

    public function store(Request $request)
    {
        request()->validate(
            [
                'room_number' => 'required',
                'type_id' => 'required',
                'room_descreption' => 'required|string|max:255',
                'room_price' => 'required',
                'features' => 'array',
                'assets' => 'required|array',
                'assets.*' => 'file|mimes:jpg,png,jpeg,gif,svg|max:2048',
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
            $room->features()->attach($request->features);

            // foreach ($request->features as $value) {
            //     RoomFeature::insert([
            //         'room_id' => $room->id,
            //         'feature_id' => $value
            //     ]);
            // }

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

    public function edit(Request $request)
    {
        $room = Room::with(['features', 'assets', 'type'])->where('room_number', $request->id)->get();
        return Inertia::render('Admin/RoomEdit', ['room' => $room]);
    }

    public function update()
    {
        return 'h';
    }



}
