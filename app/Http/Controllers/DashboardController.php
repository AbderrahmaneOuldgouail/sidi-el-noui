<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Enums\Permissions;
use App\Enums\permissions_actions;

class DashboardController extends Controller
{
    function index(Request $request)
    {
        // $user = Auth::user();
        // dd($user->role->permissions->contains('permission_name', 'Chambre-consulter'));

        // foreach (Permissions::cases() as  $permission) {
        //     foreach (permissions_actions::cases() as  $permissions_actions) {
        //         dump($permission->value . '-' . $permissions_actions->value);
        //     }
        // }

        return Inertia::render('Admin/Dashboard');
    }
}
