<?php

use App\Events\NewBooking;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\WelcomeController;
<<<<<<< HEAD
use App\Http\Controllers\MessageController;
=======
use App\Models\Booking;
>>>>>>> 66b34ba96f44b8b56890a52d4c08669be71e3d91
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [WelcomeController::class, 'index'])->name('client.index');

Route::get('/services', [ServiceController::class, 'servicesIndex'])->name('client.service.index');

Route::get('/chambres', [RoomController::class, 'clientIndex'])->name('client.chambre.index');

Route::get('/Contact', [MessageController::class, 'contactIndex'])->name('client.contact.index');

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
Route::get('/RoomDetail', function () {
    // $room = Rooms::find($id);
    return Inertia::render('RoomDetail.jsx'
    );
});

require __DIR__ . '/auth.php';
