<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    function index()
    {
        return Inertia::render('Admin/Dashboard');
    }
}
