<?php

namespace App\Http\Controllers;

use App\Enums\Permissions;
use App\Enums\permissions_actions;
use App\Enums\Roles;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
// use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role as ModelsRole;

class RoleController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->cannot('viewAny', Role::class) && ($request->user()->cannot('create', Role::class) || $request->user()->cannot('delete', Role::class) || $request->user()->cannot('update', Role::class))) {
            return Inertia::render('Error/Error_403');
        }
        $itemsPerPage = $request->input('pages', 10);

        $roles = Role::with('permissions')->paginate($itemsPerPage);

        return Inertia::render('Admin/Roles/Roles', ['roles' => $roles]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        if ($request->user()->cannot('create', Role::class)) {
            return Inertia::render('Error/Error_403');
        }
        $permissions = Permission::all();
        $permissions_actions = permissions_actions::cases();

        return Inertia::render('Admin/Roles/CreateRole', ['permissions' => $permissions, 'permissions_actions' => $permissions_actions]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->user()->cannot('create', Role::class)) {
            return Inertia::render('Error/Error_403');
        }
        $request->validate([
            'role_name' => 'required|unique:roles,role_name',
            'permissions' => 'required|array',
            'permissions.*' => 'required'
        ]);
        DB::beginTransaction();
        try {
            $role = Role::create([
                'role_name' => $request->role_name,
            ]);
            if ($request->permissions) {
                $role->permissions()->attach($request->permissions);
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }

        return redirect()->route('roles.index')->with('message', ['status' => 'success', 'message' => 'Rôle ajouter avec succès']);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id, Request $request)
    {
        if ($request->user()->cannot('update', Role::class)) {
            return Inertia::render('Error/Error_403');
        }
        $role = Role::where('role_id', $id)->first();

        if ($role && Roles::exists($role->role_name)) {
            return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Vous pouvez pas modifier ce role']);
        }
        $role = Role::with('permissions')->where('role_id', $id)->first();
        $permissions = Permission::all();
        $permissions_actions = permissions_actions::cases();
        return Inertia::render('Admin/Roles/EditRole', ['role' => $role, 'permissions' => $permissions, 'permissions_actions' => $permissions_actions]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        if ($request->user()->cannot('update', Role::class)) {
            return Inertia::render('Error/Error_403');
        }
        $request->validate([
            'role_name' => 'required|string',
            'prevName' => 'string',
            'permissions' => 'required|array',
            'permissions.*' => 'required'
        ]);

        if (Role::where('role_name', $request->role_name)->exists() && $request->role_name !== $request->prevName) {
            return redirect()->back()->withErrors(['role_name' => 'Role already exists']);
        }

        DB::beginTransaction();
        try {
            $$role = Role::where('role_id', $id)->first();
            $role->update([
                'role_name' => $request->role_name,
            ]);

            if ($request->has('permissions')) {
                $role->permissions()->detach();
                $role->permissions()->attach($request->permissions);
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }

        return redirect()->route('roles.index')->with('message', ['status' => 'success', 'message' => 'Rôle modifier avec succès']);
    }

    public function assingPermissions(Request $request, string $id)
    {
        $request->validate([
            'permissions' => 'required|array',
            'permissions.*' => 'required|string'
        ]);

        // ModelsRole::where('id', $id)->first()->syncPermissions([$request->permissions]);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id, Request $request)
    {
        if ($request->user()->cannot('delete', Role::class)) {
            return Inertia::render('Error/Error_403');
        }
        $role = Role::where('role_id', $id)->first();
        $role_name = $role->role_name;

        if ($role && Roles::exists($role->role_name)) {
            return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Vous pouvez pas supprimer ce role']);
        }


        $users = User::whereHas('role', function ($query) use ($role_name) {
            $query->where('role_name', $role_name);
        })->get();
        foreach ($users as $user) {
            $user->update([
                'role_id' => Role::where("role_name", Roles::ADMIN->value)->first()->role_id,
            ]);
        }

        $role->permissions()->detach();
        $role->delete();

        return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Role supprimier avec succès']);
    }
}
