<?php

namespace App\Http\Controllers;

use App\Enums\Roles;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $itemsPerPage = $request->input('pages', 10);

        $users = User::with('roles')->withoutRole([Roles::CLIENT->value, Roles::COMPANY->value])->paginate($itemsPerPage);
        return Inertia::render('Admin/Employes/Employees', ['users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roles = Role::whereNotIn('name', [Roles::CLIENT->value, Roles::COMPANY->value])->get();
        return Inertia::render('Admin/Employes/CreateEmployes', ['roles' => $roles]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email|unique:users',
            'phone' => 'required|string|unique:users',
            'role' => 'required|string|exists:roles,name',
        ]);

        User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'access' => true,
            'password' => bcrypt('password'),
        ])->assignRole($request->role);

        return redirect()->route('users.index')->with('message', ['status' => 'success', 'message' => 'Employé ajouter avec succès']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::where('id', $id)->first();
        return Inertia::render('Admin/Employes/EditEmployesr', ['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        User::where('id', $id)->first()->syncRoles($request->role);
        return redirect()->route('users.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        User::where('id', $id)->delete();
        return redirect()->route('users.index');
    }
}
