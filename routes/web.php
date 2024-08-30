<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\MessageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

Route::get('/lang', function (Request $request) {
    App::setlocale($request->lang);
    return redirect()->back();
})->name('client.switch.lang');

Route::get('/', [WelcomeController::class, 'index'])->name('client.index');

Route::get('/services', [ServiceController::class, 'servicesIndex'])->name('client.service.index');

Route::get('/chambres', [RoomController::class, 'clientIndex'])->name('client.chambre.index');

Route::post('/contact', [MessageController::class, 'store'])->name('client.contact.store');

Route::get("search-for-booking", [BookingController::class, 'searchForBooking'])->name('client.booking.search');
Route::get("/Aviable-rooms", [BookingController::class, 'showSearchResault'])->name('client.show.bookings');
Route::post("/booking/store", [BookingController::class, 'clientStore'])->name('client.store.bookings');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'clientEdit'])->name('client.profile.edit');
    Route::patch('/profile', [ProfileController::class, 'clientUpdate'])->name('client.profile.update');
    Route::delete('/profile', [ProfileController::class, 'deleteUser'])->name('client.profile.destroy');
});


require __DIR__ . '/auth.php';
