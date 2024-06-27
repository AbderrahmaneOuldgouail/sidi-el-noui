<?php

use App\Http\Controllers\Auth\AuthenticatedAdminSessionController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\PromotionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TypeController;
use App\Http\Middleware\Admin;
use App\Http\Middleware\AdminGuest;
use Illuminate\Support\Facades\Route;

Route::middleware(AdminGuest::class)->group(
  function () {
    Route::get('login', [AuthenticatedAdminSessionController::class, 'create'])
      ->name('admin.login');

    Route::post('login', [AuthenticatedAdminSessionController::class, 'adminstore'])
      ->name('admin.store');
  }
);
Route::post('logout', [AuthenticatedAdminSessionController::class, 'destroy'])
  ->name('admin.logout');

Route::middleware(['auth', Admin::class])->group(
  function () {
    Route::get('/', [DashboardController::class, 'index'])->name('admin.dashboard');

    Route::prefix('rooms')->controller(RoomController::class)->as('rooms.')->group(function () {
      Route::get('/', 'index')->name('index');
      Route::get('/show/{id}', 'show')->name('show');
      Route::get('/create', 'create')->name('create');
      Route::post('/create', 'store')->name('store');
      Route::get('/edit/{id}', 'edit')->name('edit');
      Route::post('/edit', 'update')->name('update');
    });

    Route::prefix('services')->controller(ServiceController::class)->as('services.')->group(function () {
      Route::get('/', 'index')->name('index');
      Route::get('/create', 'create')->name('create');
      Route::post('/create', 'store')->name('store');
      Route::get('/edit/{id}', 'edit')->name('edit');
      Route::post('/edit', 'update')->name('update');
    });

    Route::prefix('booking')->controller(BookingController::class)->as('booking.')->group(function () {
      Route::get('/', 'index')->name('index');
      Route::get('/create', 'create')->name('create');
      Route::post('/create', 'store')->name('store');
      Route::get('/edit/{id}', 'edit')->name('edit');
      Route::post('/edit', 'update')->name('update');
    });

    Route::prefix('promotions')->controller(PromotionController::class)->as('promotions.')->group(function () {
      Route::get('/', 'index')->name('index');
      Route::get('/create', 'create')->name('create');
      Route::post('/create', 'store')->name('store');
      Route::get('/edit/{id}', 'edit')->name('edit');
      Route::post('/edit', 'update')->name('update');
    });

    Route::prefix('events')->controller(EventController::class)->as('events.')->group(function () {
      Route::get('/', 'index')->name('index');
      Route::get('/create', 'create')->name('create');
      Route::post('/create', 'store')->name('store');
      Route::get('/edit/{id}', 'edit')->name('edit');
      Route::post('/edit', 'update')->name('update');
    });
    Route::prefix('types')->controller(TypeController::class)->as('types.')->group(function () {
      Route::get('/', 'index')->name('index');
      Route::get('/create', 'create')->name('create');
      Route::post('/create', 'store')->name('store');
      Route::get('/edit/{id}', 'edit')->name('edit');
      Route::post('/edit', 'update')->name('update');
    });

    Route::get('/roles', [RoleController::class, 'index'])->name('roles.index');
  }
);


Route::get('{catchall}', function () {
  dump('subdomain not dound');
})->where('catchall', '(.*)');
