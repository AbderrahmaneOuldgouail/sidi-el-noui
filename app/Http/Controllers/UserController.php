<?php

namespace App\Http\Controllers;

use App\Enums\Roles;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

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

        return Inertia::render('Admin/Employes/Employees', ['users' => $users, 'employ_permission' =>  getModelPermission($request, User::class)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        if ($request->user()->cannot('create', User::class)) {
            return abort(403);
        }
        $roles = Role::whereNotIn('role_name', [Roles::CLIENT->value, Roles::COMPANY->value])->get();
        return Inertia::render('Admin/Employes/CreateEmployes', ['roles' => $roles]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->user()->cannot('create', User::class)) {
            return abort(403);
        }
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email|unique:users',
            'phone' => 'required|string|unique:users',
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


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id, Request $request)
    {
        if ($request->user()->cannot('delete', User::class)) {
            return abort(403);
        }
        $user = User::where('id', $id)->first();
        $role = Role::where('role_id', $user->role->role_id)->first();

        if ($role && Roles::exists($role->role_name)) {
            return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Vous pouvez pas supprimer ce utilisateur']);
        }

        $user->delete();
        return redirect()->route('users.index')->with('message', ['status' => 'success', 'message' => 'Utilisateur supptimier avec succès']);
    }
}
