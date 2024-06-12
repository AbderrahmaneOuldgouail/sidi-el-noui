<?php 
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/login', function () {
dump('admin login');
})->name('admin.login');

Route::get('/', function () {
    return Inertia::render('Admin/Dashboard');
})->name('admin.dashboard');

Route::get('{catchall}', function () {
  dump('subdomain not dound');
})->where('catchall', '(.*)');
  
