<?php

use App\Http\Controllers\AssetsController;
use App\Http\Controllers\Auth\AuthenticatedAdminSessionController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\PromotionController;
use App\Http\Controllers\ConsumptionController;
use App\Http\Controllers\FactureController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\Admin;
use App\Http\Middleware\AdminGuest;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
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


    Route::get('switch-lang', function (Request $request) {

      App::setlocale($request->lang);
      Cache::put('user_locale_' . $request->ip(), $request->lang, 60 * 24 * 30);

      return redirect()->back();
    })->name('switch.lang');


    Route::get('/', [DashboardController::class, 'index'])->name('admin.dashboard');

    Route::post('/toggle-status', [RoomController::class, 'toggleStatus'])->name('rooms.toggle.status');
    Route::post('/edit/{room}', [RoomController::class, 'update'])->name('rooms.update');
    Route::resource('rooms', RoomController::class)->names("rooms")->except(['destroy', 'update']);

    Route::resource('types', TypeController::class)->names("types")->except(['destroy']);

    Route::resource('features', FeatureController::class)->names("features")->except(['create', 'edit', 'show']);

    Route::resource('categorys', CategoryController::class)->names("categorys")->except(['create', 'edit', 'show']);

    Route::post('/toggle-availability', [ServiceController::class, 'toggleAvailability'])->name('services.toggle.availability');
    Route::post('/services/{service}', [ServiceController::class, 'update'])->name('services.update');
    Route::resource('services', ServiceController::class)->names("services")->except(['update']);

    Route::resource('consumptions', ConsumptionController::class)->names("consumptions")->except(['create', 'edit']);

    Route::post('/searsh-aviable-rooms', [BookingController::class, 'searchAviableRoom'])->name('bookings.searchAviableRoom');
    Route::get('/show-aviable-rooms', [BookingController::class, 'showAviableRooms'])->name('bookings.showAviableRooms');
    Route::resource('bookings', BookingController::class)->names("bookings")->except('destroy');

    Route::post('/events/{event}', [EventController::class, 'update'])->name('events.update');
    Route::resource('events', EventController::class)->names("events")->except('update');

    Route::post('/promotions/{promo}', [PromotionController::class, 'update'])->name('promotions.update');
    Route::resource('promotions', PromotionController::class)->names("promotions");

    Route::resource('factures', FactureController::class)->names("factures");

    Route::resource('roles', RoleController::class)->names("roles");

    Route::resource('users', UserController::class)->names("users");

    Route::prefix('assets')->controller(AssetsController::class)->as('assets.')->group(function () {
      Route::post('/create', 'store')->name('store');
      Route::get('/delete/{id}', 'destroy')->name('delete');
    });

    //   Route::get('/roles', [RoleController::class, 'index'])->name('roles.index');
  }
);


Route::get('{catchall}', function () {
  dump('subdomain not dound');
})->where('catchall', '(.*)');
