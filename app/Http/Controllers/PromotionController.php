<?php

namespace App\Http\Controllers;

use App\Models\Promotion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Validation\ValidationException;


class PromotionController extends Controller
{

    public function show(Request $request)
    {
        $promotion = Promotion::with("assets")->where('user_id', $request->id)->first();
        return Inertia::render('Client/Promotions/Show', ['promotion' => $promotion]);
    }

    public function index(Request $request)
    {
        if ($request->user()->cannot('viewAny', Promotion::class) && ($request->user()->cannot('create', Promotion::class) || $request->user()->cannot('delete', Promotion::class) || $request->user()->cannot('update', Promotion::class))) {
            return abort(403);
        }
        $promotions = Promotion::with(['assets', 'user'])->get();
        return Inertia::render('Admin/Promotions/Promotions', ['promotions' => $promotions, 'promotion_permission' =>  getModelPermission($request, Promotion::class)]);
    }

    public function create(Request $request)
    {
        if ($request->user()->cannot('create', Promotion::class)) {
            return abort(403);
        }
        return Inertia::render('Admin/Promotions/CreatePromotion');
    }

    public function store(Request $request)
    {
        if ($request->user()->cannot('create', Promotion::class)) {
            return abort(403);
        }
        request()->validate(
            [
                'promo_descreption' => 'required|string',
                'promo_start_date' => 'required|date',
                'promo_end_date' => 'required|date',
                'promo_value' => 'required|numeric',
                'assets' => 'required|array',
                'assets.*' => 'file|mimes:jpg,png,jpeg|max:2048',
            ],
        );

        $conflictingPromotions = Promotion::where(function ($query) use ($request) {
            $query->where('promo_start_date', '<=', $request->promo_end_date)
                ->where('promo_end_date', '>=', $request->promo_start_date);
        })->exists();

        if ($conflictingPromotions) {
            throw ValidationException::withMessages([
                'promo_start_date' => 'Les dates de promotion intersect une promotion existante.',
            ]);
        }

        DB::beginTransaction();
        try {
            $promotion = Promotion::create([
                'user_id' => Auth::user()->id,
                'promo_descreption' => $request->promo_descreption,
                'promo_start_date' => $request->promo_start_date,
                'promo_end_date' => $request->promo_end_date,
                'promo_value' => $request->promo_value,
                'is_active' => true,
            ]);

            foreach ($request->file('assets') as $key => $value) {
                $filename = $value->store('promo', 'public');
                $promotion->assets()->create([
                    'name' => "promo-{$request->promo_value}-img-$key",
                    'url' => $filename,
                ]);
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
        Cache::forget('home-promotions');
        return redirect(route('promotions.index'))->with('message', ['status' => 'success', 'message' => 'Promotions crée avec succès']);
    }

    public function edit(string $id, Request $request)
    {
        if ($request->user()->cannot('update', Promotion::class)) {
            return abort(403);
        }
        $promotion = Promotion::with(['assets'])->where('promotion_id', $id)->first();
        return Inertia::render('Admin/Promotions/EditPromotion', ['promotion' => $promotion]);
    }

    public function update(Request $request)
    {
        if ($request->user()->cannot('update', Promotion::class)) {
            return abort(403);
        }
        request()->validate(
            [
                'promo_descreption' => 'required|string',
                'promo_start_date' => 'required|date',
                'promo_end_date' => 'required|date',
                'promo_value' => 'required|numeric',
                'assets' => 'required|array',
                'assets.*' => 'file|mimes:jpg,png,jpeg|max:2048',
            ]
        );

        DB::beginTransaction();
        try {
            $promo = Promotion::where('promotion_id', $request->promo)->first();

            $promo->update([
                'promo_descreption' => $request->promo_descreption,
                'promo_start_date' => $request->promo_start_date,
                'promo_end_date' => $request->promo_end_date,
                'promo_value' => $request->promo_value,
            ]);
            if ($request->hasFile('assets')) {
                foreach ($request->file('assets') as $key => $value) {
                    $filename = $value->store('promo', 'public');
                    $promo->assets()->create([
                        'name' => "promo-{$request->promo_value}-img-$key",
                        'url' => $filename,
                    ]);
                }
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
        Cache::forget('home-promotions');
        return redirect(route('promotions.index'))->with('message', ['status' => 'success', 'message' => 'Promotion modifier avec succès']);
    }

    public function toggleActivity(Request $request)
    {
        if ($request->user()->cannot('update', Promotion::class)) {
            return abort(403);
        }
        $promo = Promotion::where('promotion_id', $request->promotion_id)->first();
        $promo->update(['is_active' => !$promo->is_active]);
        Cache::forget('home-promotions');
        redirect()->back()->with('message', ['status' => 'success', 'message' => $promo->is_active ? "Promotion activé" : "Promotion désactivé"]);
    }

    public function destroy(string $id, Request $request)
    {
        if ($request->user()->cannot('delete', Promotion::class)) {
            return abort(403);
        }
        Promotion::where('promotion_id', $id)->delete();
        Cache::forget('home-promotions');
        return redirect()->back()->with('message', ['status' => 'success', 'message'
        => 'Promotion supprimé avec succès']);
    }
}
