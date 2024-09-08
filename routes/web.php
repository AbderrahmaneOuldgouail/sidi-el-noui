<?php

use App\Enums\Roles;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PromotionController;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;


Route::name('client.')->group(function () {
    Route::get('/lang', function (Request $request) {
        App::setlocale($request->lang);
        return redirect()->back();
    })->name('switch.lang');

    Route::get('/', [WelcomeController::class, 'index'])->name('index');
    Route::get('/service-show/{id}', [ServiceController::class, 'show'])->name('service.show');
    Route::get('/event-show/{id}', [EventController::class, 'show'])->name('event.show');
    Route::get('/promotion-show/{id}', [PromotionController::class, 'show'])->name('promotion.show');
    Route::post('/contact', [MessageController::class, 'store'])->name('contact.store');

    Route::get("search-for-booking", [BookingController::class, 'searchForBooking'])->name('booking.search');
    Route::get("/Aviable-rooms", [BookingController::class, 'showSearchResault'])->name('show.bookings');
    Route::post("/booking/store", [BookingController::class, 'clientStore'])->name('store.bookings');

    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'clientEdit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'clientUpdate'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'deleteUser'])->name('profile.destroy');
        Route::get('/bookings', [BookingController::class, 'myBookings'])->name('bookings.index');
        Route::get('/bookings/{id}', [BookingController::class, 'myBookingshow'])->name('bookings.show');
        Route::post('/bookings/{id}', [BookingController::class, 'cancleBooking'])->name('bookings.cancel');
    });
});

require __DIR__ . '/auth.php';
