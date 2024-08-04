<?php

namespace App\Http\Controllers;

use App\Enums\Permissions;
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
        $itemsPerPage = $request->input('pages', 10);

        $permissions = Permission::paginate($itemsPerPage);
        $roles = Role::with('permissions')->paginate($itemsPerPage);

        return Inertia::render('Admin/Roles/Roles', ['roles' => $roles, 'permissions' => $permissions]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $permissions = Permission::all();

        // $permissions = Permission::select('entity', 'action', 'permission_id')
        //     ->get()
        //     ->groupBy('entity')
        //     ->map(function ($group) {
        //         return [
        //             'entity' => $group->first()->entity,
        //             'actions' => $group->map(function ($permission) {
        //                 return [
        //                     'permission_id' => $permission->permission_id,
        //                     'action' => $permission->action,
        //                 ];
        //             })->toArray(),
        //         ];
        //     })->values();

        return Inertia::render('Admin/Roles/CreateRole', ['permissions' => $permissions]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
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
                foreach ($request->permissions as $permission) {
                    foreach ($permission['actions'] as $id) {
                        $role->permissions()->attach($id);
                    }
                }
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }

        return redirect()->route('roles.index')->with('message', ['status' => 'success', 'message' => 'Rôle ajouter avec succès']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $role = Role::with('permissions')->where('id', $id)->first();
        return Inertia::render('Admin/Roles/Role', ['role' => $role]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $role = Role::where('role_id', $id)->first();

        if ($role && Roles::exists($role->role_name)) {
            return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Vous pouvez pas modifier ce role']);
        }
        $role = Role::with('permissions')->where('role_id', $id)->first();
        $permissions = Permission::select('entity', 'action', 'permission_id')
            ->get()
            ->groupBy('entity')
            ->map(function ($group) {
                return [
                    'entity' => $group->first()->entity,
                    'actions' => $group->map(function ($permission) {
                        return [
                            'permission_id' => $permission->permission_id,
                            'action' => $permission->action,
                        ];
                    })->toArray(),
                ];
            })->values();
        return Inertia::render('Admin/Roles/EditRole', ['role' => $role, 'permissions' =>  $permissions]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string',
            'prevName' => 'string',
            'permissions' => 'required|array',
            'permissions.*' => 'required|string'
        ]);

        if (Role::where('role_name', $request->role_name)->exists() && $request->role_name !== $request->prevName) {
            return redirect()->back()->withErrors(['role_name' => 'Role already exists']);
        }
        // $role = ModelsRole::where('id', $id)->first()->syncPermissions([$request->permissions]);

        DB::beginTransaction();
        try {
            $$role = Role::where('role_id', $id)->first();
            $role->update([
                'role_name' => $request->role_name,
            ]);

            if ($request->has('permissions')) {
                $role->permissions()->detach();
                foreach ($request->permissions as $permission) {
                    $role->permissions()->attach($permission['permission_id']);
                }
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }

        return redirect()->route('roles.index');
    }

    public function assingPermissions(Request $request, string $id)
    {
        $request->validate([
            'permissions' => 'required|array',
            'permissions.*' => 'required|string'
        ]);

        ModelsRole::where('id', $id)->first()->syncPermissions([$request->permissions]);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $role = Role::where('role_id', $id)->first();
        $role_name = $role->role_name;

        if ($role && Roles::exists($role->role_name)) {
            return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Vous pouvez pas supprimer ce role']);
        }


        $users = User::whereHas('role', function ($query) use ($role_name) {
            $query->where('role_name', $role_name);
        })->get();
        // $users = User::role($role->role_name)->get();
        foreach ($users as $user) {
            // $user->assignRole(Roles::ADMIN->value);
            $user->update([
                'role_id' => Role::where("role_name", Roles::ADMIN->value)->first()->role_id,
            ]);
        }

        $role->permissions()->detach();
        $role->delete();

        return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Role supprimier avec succès']);
    }
}
