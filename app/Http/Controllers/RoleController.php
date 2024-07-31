<?php

namespace App\Http\Controllers;

use App\Enums\Roles;
use App\Models\Role;
use App\Models\User;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role as ModelsRole;

class RoleController extends Controller
{
    public function index(Request $request)
    {

        $itemsPerPage = $request->input('pages', 10);

        $permissions = Permission::paginate($itemsPerPage);
        $roles = ModelsRole::with('permissions')->paginate($itemsPerPage);

        return Inertia::render('Admin/Users/Roles', ['roles' => $roles, 'permissions' => $permissions]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Users/CreateRole', ['permissions' => Inertia::lazy(fn () => Permission::all())]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:' . ModelsRole::class,
            'permissions' => 'required|array',
            'permissions.*' => 'required|string'
        ]);

        ModelsRole::create([
            'name' => $request->name,
        ])->givePermissionTo($request->permissions);

        return redirect()->route('roles.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $role = ModelsRole::with('permissions')->where('id', $id)->first();
        return Inertia::render('Admin/Users/Role', ['role' => $role]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $role = ModelsRole::where('id', $id)->first();

        if ($role && Roles::exists($role->name)) {
            return redirect()->back()->withErrors(['name' => 'Vous pouvez pas modifier ce role']);
        }
        $role = ModelsRole::with('permissions')->where('id', $id)->first();
        return Inertia::render('Admin/Users/EditRole', ['role' => $role, 'permissions' => Inertia::lazy(fn () => Permission::all())]);
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

        if (ModelsRole::where('name', $request->name)->exists() && $request->name !== $request->prevName) {
            return redirect()->back()->withErrors(['name' => 'Role already exists']);
        }
        $role = ModelsRole::where('id', $id)->first()->syncPermissions([$request->permissions]);
        $role->update([
            'name' => $request->name,
        ]);
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
        $role = ModelsRole::where('id', $id)->first();

        if ($role && Roles::exists($role->name)) {
            return redirect()->back()->withErrors(['name' => 'Vous pouvez pas supprimer ce role']);
        }

        $users = User::role($role->name)->get();
        foreach ($users as $user) {
            $user->assignRole(Roles::ADMIN->value);
        }

        $role->delete();

        return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Role supprimier avec succès']);
    }
}
