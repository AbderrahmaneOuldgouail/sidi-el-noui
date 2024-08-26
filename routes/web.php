<?php

use App\Events\NewBooking;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\WelcomeController;
use App\Models\Booking;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [WelcomeController::class, 'view'])->name('acceuil');

Route::get('/services', [ServiceController::class, 'view'])->name('service.view');

Route::get('/chambres', [RoomController::class, 'show'])->name('chambre.show');

Route::get('/dispach', function () {
    $booking = Booking::with('user')->where('booking_id', 1)->first();
    NewBooking::dispatch($booking);
})->name("dispach");


Route::get(
    '/dashboard',
    function () {
        return Inertia::render('Dashboard');
    }
)->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
