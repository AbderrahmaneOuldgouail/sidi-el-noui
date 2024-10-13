<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function show(string $id, Request $request)
    {
        $service = Service::with('assets', 'consomation')->where('service_id', $id)->first();
        return Inertia::render('Client/Services/Show', ['service' => $service]);
    }

    public function index(Request  $request)
    {
        if ($request->user()->cannot('viewAny', Service::class) && ($request->user()->cannot('create', Service::class) || $request->user()->cannot('delete', Service::class) || $request->user()->cannot('update', Service::class))) {
            return abort(403);
        }

        $services = Service::with('assets')->get();

        return Inertia::render('Admin/Services/Services', ['services' => $services, 'service_permission' =>  getModelPermission($request, Service::class)]);
    }

    public function create(Request $request)
    {
        if ($request->user()->cannot('create', Service::class)) {
            return abort(403);
        }
        return Inertia::render('Admin/Services/CreateService');
    }

    public function store(Request $request)
    {
        if ($request->user()->cannot('create', Service::class)) {
            return abort(403);
        }

        request()->validate(
            [
                'service_name' => 'required|string',
                'service_descreption' => 'required|string',
                'assets' => 'required|array',
                'assets.*' => 'file|mimes:jpg,png,jpeg|max:2048',
            ]
        );

        DB::beginTransaction();
        try {
            $service = Service::create([
                'service_name' => $request->service_name,
                'service_descreption' => $request->service_descreption,
                'availability' => true,
            ]);

            foreach ($request->file('assets') as $key => $value) {
                $filename = $value->store('service', 'public');

                $service->assets()->create([
                    'name' => "Service-{$request->service_name}-img-$key",
                    'url' => $filename,
                ]);
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
        Cache::forget('home-services');
        return redirect(route('services.index'))->with('message', ['status' => 'success', 'message' => 'Service crée avec succès']);
    }

    public function edit(Service $service, Request $request)
    {
        if ($request->user()->cannot('update', Service::class)) {
            return abort(403);
        }
        return Inertia::render('Admin/Services/EditService', ['service' => $service]);
    }

    public function update(Request $request)
    {
        if ($request->user()->cannot('update', Service::class)) {
            return abort(403);
        }
        request()->validate(
            [
                'service_name' => 'required|string',
                'service_descreption' => 'required|string',
                'assets' => 'required|array',
                'assets.*' => 'file|mimes:jpg,png,jpeg|max:2048',
            ]
        );
        DB::beginTransaction();
        try {
            $service = Service::where('service_id', $request->service)->first();

            $service->update([
                'service_name' => $request->service_name,
                'service_descreption' => $request->service_descreption,
            ]);
            if ($request->hasFile('assets')) {
                foreach ($request->file('assets') as $key => $file) {
                    $filename = $file->store('services', 'public');

                    $service->assets()->create([
                        'name' => "service-{$request->service_name}-img-{$key}",
                        'url' => $filename,
                    ]);
                }
            }
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
        Cache::forget('home-services');
        return redirect(route("services.index"))->with('message', ['status' => 'success', 'message' => 'Service modifier avec succès']);
    }

    public function toggleAvailability(Request $request)
    {
        if ($request->user()->cannot('update', Service::class)) {
            return abort(403);
        }
        $service = Service::where('service_id', $request->service_id)->first();
        $service->update([
            'availability' => !$service->availability
        ]);
        Cache::forget('home-services');
        redirect()->back()->with('message', ['status' => 'success', 'message' => $service->availability ? "Le service '$service->service_name' est disponible" : "Le service '$service->service_name' est indisponible"]);
    }

    public function destroy(string $id, Request $request)
    {
        if ($request->user()->cannot('delete', Service::class)) {
            return abort(403);
        }
        Service::where('service_id', $id)->delete();
        Cache::forget('home-services');

        return redirect()->back()->with('message', ['status' => 'success', 'message'
        => 'Service supprimé avec succès']);
    }
}
