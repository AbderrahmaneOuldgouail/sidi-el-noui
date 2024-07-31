<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class EventController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::with('assets')->get();
        return Inertia::render('Admin/Events/Events', ['events' => $events]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        request()->validate(
            [
                'event_name' => 'required|string',
                'event_descreption' => 'required|string|max:255',
                'event_start_date' => 'required|date',
                'event_end_date' => 'required|date',
                'event_price' => 'required|numeric',
                'assets' => 'required|array',
                'assets.*' => 'file|mimes:jpg,png,jpeg|max:2048',
            ]
        );


        DB::beginTransaction();
        try {
            $service = Event::create([
                'user_id' => Auth::user()->id,
                'event_name' => $request->event_name,
                'event_descreption' => $request->event_descreption,
                'event_start_date' => $request->event_start_date,
                'event_end_date' => $request->event_end_date,
                'event_price' => $request->event_price,
            ]);

            foreach ($request->file('assets') as $key => $value) {
                $filename = $value->store('event', 'public');
                $service->assets()->create([
                    'name' => "event-{$request->event_name}-img-$key",
                    'url' => $filename,
                ]);
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
        return redirect(route('events.index'))->with('message', ['status' => 'success', 'message' => 'Evènement crée avec succès']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        return Inertia::render('Admin/Events/Event', ['event' => $event]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        dd('kaynaa');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        request()->validate(
            [
                'event_name' => 'required|string',
                'event_descreption' => 'required|string|max:255',
                'event_start_date' => 'required|date',
                'event_end_date' => 'required|date',
                'event_price' => 'required|numeric',
                'assets' => 'array',
                'assets.*' => 'file|mimes:jpg,png,jpeg|max:2048',
            ]
        );


        DB::beginTransaction();
        try {
            $event = Event::where('event_id', $request->event)->first();

            $event->update([
                'event_name' => $request->event_name,
                'event_descreption' => $request->event_descreption,
                'event_start_date' => $request->event_start_date,
                'event_end_date' => $request->event_end_date,
                'event_price' => $request->event_price,
            ]);
            if ($request->hasFile('assets')) {
                foreach ($request->file('assets') as $key => $value) {
                    $filename = $value->store('event', 'public');
                    $event->assets()->create([
                        'name' => "event-{$request->event_name}-img-$key",
                        'url' => $filename,
                    ]);
                }
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
        return redirect(route('events.index'))->with('message', ['status' => 'success', 'message' => 'Evènement modifier avec succès']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Event::where('event_id', $id)->delete();
        return redirect()->back()->with('message', ['status' => 'success', 'message'
        => 'Evènement supprimé avec succès']);
    }
}
