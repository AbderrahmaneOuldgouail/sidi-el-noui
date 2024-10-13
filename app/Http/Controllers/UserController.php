<?php

namespace App\Http\Controllers;

use App\Enums\Roles;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Validation\Rule;


class UserController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->cannot('viewAny', User::class) && ($request->user()->cannot('create', User::class) || $request->user()->cannot('delete', User::class) || $request->user()->cannot('update', User::class))) {
            return abort(403);
        }

        $itemsPerPage = $request->input('pages', 10);
        $client = Roles::CLIENT->value;
        $company = Roles::COMPANY->value;

        $users = User::with('role')->whereHas('role', function ($query) use ($client, $company) {
            $query->where([['role_name', "<>",  $client], ['role_name', "<>",  $company]]);
        })->paginate($itemsPerPage);

        return Inertia::render('Admin/Employes/Employees', ['users' => $users, 'roles' => Role::whereNotIn('role_name', [Roles::CLIENT->value, Roles::COMPANY->value])->get()]);
    }

    public function create(Request $request)
    {
        if ($request->user()->cannot('create', User::class)) {
            return abort(403);
        }
        $roles = Role::whereNotIn('role_name', [Roles::CLIENT->value, Roles::COMPANY->value])->get();
        return Inertia::render('Admin/Employes/CreateEmployes', ['roles' => $roles]);
    }

    public function store(Request $request)
    {
        if ($request->user()->cannot('create', User::class)) {
            return abort(403);
        }

        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email|unique:users',
            'phone' => ['required', 'string', 'unique:users', 'regex:/^(05|06|07)[0-9]{8}$/'],
            'role' => 'required|string|exists:roles,role_name',
        ]);

        $role_id = Role::where('role_name', $request->role)->first()->role_id;

        DB::beginTransaction();
        try {
            User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'phone' => $request->phone,
                'access' => true,
                'password' => bcrypt('password'),
                'role_id' => $role_id,
            ]);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }

        return redirect()->route('users.index')->with('message', ['status' => 'success', 'message' => 'Employé ajouter avec succès']);
    }

    public function edit(Request $request, string $id)
    {
        if ($request->user()->cannot('update', User::class)) {
            return abort(403);
        }

        $user = User::with('role')->where("id", $id)->first();

        if ($user->role->role_name == Roles::SUPPERADMIN->value) {
            return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Vous pouvez pas modifier ce utilisateur']);
        }

        $roles = Role::whereNotIn('role_name', [Roles::CLIENT->value, Roles::COMPANY->value])->get();
        return Inertia::render('Admin/Employes/EditEmployes', ['roles' => $roles, 'user' => $user]);
    }

    public function update(Request $request)
    {
        if ($request->user()->cannot('update', User::class)) {
            return abort(403);
        }

        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => ['required', 'email', Rule::unique('users')->ignore($request->route('user'))],
            'phone' => ['required', 'string', Rule::unique('users')->ignore($request->route('user')), 'regex:/^(05|06|07)[0-9]{8}$/'],
            'role' => 'required|string|exists:roles,role_name',
        ]);

        DB::beginTransaction();
        $role_id = Role::where('role_name', $request->role)->first()->role_id;
        $user = User::where('id', $request->user)->first();
        $user->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'role_id' => $role_id,
        ]);
        DB::commit();

        return redirect()->route('users.index')->with('message', ['status' => 'success', 'message' => 'Employé modifier avec succès']);
    }

    public function destroy(string $id, Request $request)
    {
        if ($request->user()->cannot('delete', User::class)) {
            return abort(403);
        }
        $user = User::where('id', $id)->first();

        if ($user->role->role_name == Roles::SUPPERADMIN->value) {
            return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Vous pouvez pas supprimer ce utilisateur']);
        }

        $user->delete();
        return redirect()->route('users.index')->with('message', ['status' => 'success', 'message' => 'Utilisateur supptimier avec succès']);
    }
}
