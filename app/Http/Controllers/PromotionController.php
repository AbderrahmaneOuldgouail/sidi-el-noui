<?php

namespace App\Http\Controllers;

use App\Models\Promotion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PromotionController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if ($request->user()->cannot('viewAny', Promotion::class) && ($request->user()->cannot('create', Promotion::class) || $request->user()->cannot('delete', Promotion::class) || $request->user()->cannot('update', Promotion::class))) {
            return abort(403);
        }
        $promotions = Promotion::with('assets')->get();
        return Inertia::render('Admin/Promotions/Promotions', ['promotions' => $promotions]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        if ($request->user()->cannot('create', Promotion::class)) {
            return abort(403);
        }
        return Inertia::render('Admin/Promotions/CreatePromotion');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->user()->cannot('create', Promotion::class)) {
            return abort(403);
        }
        request()->validate(
            [
                'promo_descreption' => 'required|string|max:255',
                'promo_start_date' => 'required|date',
                'promo_end_date' => 'required|date',
                'promo_value' => 'required|numeric',
                'assets' => 'required|array',
                'assets.*' => 'file|mimes:jpg,png,jpeg|max:2048',
            ]
        );

        // dd($request->promo_descreption);
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
        return redirect(route('promotions.index'))->with('message', ['status' => 'success', 'message' => 'Promotions crée avec succès']);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id, Request $request)
    {
        if ($request->user()->cannot('update', Promotion::class)) {
            return abort(403);
        }
        $promotion = Promotion::with(['assets'])->where('promotion_id', $id)->first();
        return Inertia::render('Admin/Promotions/EditPromotion', ['promotion' => $promotion]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        if ($request->user()->cannot('update', Promotion::class)) {
            return abort(403);
        }
        request()->validate(
            [
                'promo_descreption' => 'required|string|max:255',
                'promo_start_date' => 'required|date',
                'promo_end_date' => 'required|date',
                'promo_value' => 'required|numeric',
                'assets' => 'array',
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
        return redirect(route('promotions.index'))->with('message', ['status' => 'success', 'message' => 'Promotion modifier avec succès']);
    }

    public function toggleActivity(Request $request)
    {
        if ($request->user()->cannot('update', Promotion::class)) {
            return abort(403);
        }
        $promo = Promotion::where('promotion_id', $request->promotion_id)->first();
        $promo->update(['is_active' => !$promo->is_active]);
        redirect()->back()->with('message', ['status' => 'success', 'message' => $promo->is_active ? "Promotion activé" : "Promotion désactivé"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id, Request $request)
    {
        if ($request->user()->cannot('delete', Promotion::class)) {
            return abort(403);
        }
        Promotion::where('promotion_id', $id)->delete();
        return redirect()->back()->with('message', ['status' => 'success', 'message'
        => 'Promotion supprimé avec succès']);
    }
}
