<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index () {
        return Inertia::render('Admin/Services');
    }
    public function view () {
        $services = Service::all();
        return Inertia::render('Client/Services');
    }
}
