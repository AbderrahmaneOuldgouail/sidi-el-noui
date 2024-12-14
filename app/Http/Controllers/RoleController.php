<?php

namespace App\Http\Controllers;

use App\Enums\permissions_actions;
use App\Enums\Roles;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class RoleController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->cannot('viewAny', Role::class) && ($request->user()->cannot('create', Role::class) || $request->user()->cannot('delete', Role::class) || $request->user()->cannot('update', Role::class))) {
            return abort(403);
        }

        $itemsPerPage = $request->input('pages', 10);
        $roles = Role::with('permissions')->paginate($itemsPerPage);

        return Inertia::render('Admin/Roles/Roles', ['roles' => $roles, 'role_permission' =>  getModelPermission($request, Role::class)]);
    }

    public function create(Request $request)
    {
        if ($request->user()->cannot('create', Role::class)) {
            return abort(403);
        }

        $permissions = Permission::all();
        $permissions_actions = permissions_actions::cases();

        return Inertia::render('Admin/Roles/RoleForm', ['permissions' => $permissions, 'permissions_actions' => $permissions_actions]);
    }

    public function store(Request $request)
    {
        if ($request->user()->cannot('create', Role::class)) {
            return abort(403);
        }

        $request->validate([
            'role_name' => 'required|unique:roles,role_name',
            'permissions' => 'required|array',
            'permissions.*' => 'required'
        ]);

        DB::beginTransaction();
        $role = Role::create([
            'role_name' => $request->role_name,
        ]);
        if ($request->permissions) {
            $role->permissions()->attach($request->permissions);
        }
        DB::commit();

        return redirect(route('roles.index'))->with('message', ['status' => 'success', 'message' => 'Rôle ajouter avec succès']);
    }

    public function edit(string $id, Request $request)
    {
        if ($request->user()->cannot('update', Role::class)) {
            return abort(403);
        }

        $role = Role::where('role_id', $id)->first();

        if ($role && Roles::exists($role->role_name)) {
            return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Vous pouvez pas modifier ce role']);
        }

        $permissions = Permission::all();
        $permissions_actions = permissions_actions::cases();
        $role = Role::with('permissions')->where('role_id', $id)->first();

        return Inertia::render('Admin/Roles/RoleForm', ['role' => $role, 'permissions' => $permissions, 'permissions_actions' => $permissions_actions]);
    }

    public function update(Request $request, string $id)
    {
        if ($request->user()->cannot('update', Role::class)) {
            return abort(403);
        }
        $request->validate([
            'role_name' => 'required|string',
            'prevName' => 'string',
            'permissions' => 'required|array',
            'permissions.*' => 'required'
        ]);

        if (Role::where('role_name', $request->role_name)->exists() && $request->role_name != $request->prevName) {
            return redirect()->back()->withErrors(['role_name' => 'Ce rôle est éxisté déjà']);
        }

        DB::beginTransaction();
        $role = Role::where('role_id', $id)->first();
        $role->update([
            'role_name' => $request->role_name,
        ]);

        if ($request->has('permissions')) {
            $role->permissions()->detach();
            $role->permissions()->attach($request->permissions);
        }
        DB::commit();

        return redirect()->route('roles.index')->with('message', ['status' => 'success', 'message' => 'Rôle modifier avec succès']);
    }

    public function destroy(string $id, Request $request)
    {
        if ($request->user()->cannot('delete', Role::class)) {
            return abort(403);
        }

        $role = Role::where('role_id', $id)->first();
        $role_name = $role->role_name;

        if ($role && Roles::exists($role->role_name)) {
            return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Vous pouvez pas supprimer ce role']);
        }

        DB::beginTransaction();
        $users = User::whereHas('role', function ($query) use ($role_name) {
            $query->where('role_name', $role_name);
        })->get();
        $role_id = Role::where("role_name", Roles::ADMIN->value)->first()->role_id;
        foreach ($users as $user) {
            $user->update([
                'role_id' => $role_id,
            ]);
        }

        $role->permissions()->detach();
        $role->delete();
        DB::commit();

        return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Role supprimier avec succès']);
    }
}
