<?php

namespace App\Http\Middleware;

use App\Models\Booking;
use App\Models\Consumption;
use App\Models\Event;
use App\Models\Facture;
use App\Models\Message;
use App\Models\Promotion;
use App\Models\Role;
use App\Models\Room;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Inertia\Middleware;
use Illuminate\Support\Facades\Route;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }


    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $sharedData = [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],

            'flash' => [
                'message' => fn() => $request->session()->get('message')
            ],
        ];

        if ($request->user()?->access == true) {
            $sharedData['booking_permission'] = [
                'create' => $request->user()->can('create', Booking::class),
            ];
            $sharedData['message_permission'] = [
                'viewAny' => $request->user()?->can('viewAny', Message::class),
                'create' => $request->user()?->can('create', Message::class),
                'update' => $request->user()?->can('update', Message::class),
                'delete' => $request->user()?->can('delete', Message::class),
            ];
            $sharedData['hasUnreadMessages'] = [
                'hasUnreadMessages' => Message::whereNull('read_at')->exists()
            ];
            $sharedData['notifs'] = $request->user()?->unreadNotifications;
            $sharedData["auth"]['permissions'] =
                [
                    'room' => [
                        'viewAny' => $request->user()?->can('viewAny', Room::class),
                        'create' => $request->user()?->can('create', Room::class),
                        'update' => $request->user()?->can('update', Room::class),
                    ],
                    'service' => [
                        'viewAny' => $request->user()?->can('viewAny', Service::class),
                        'create' => $request->user()?->can('create', Service::class),
                        'update' => $request->user()?->can('update', Service::class),
                        'delete' => $request->user()?->can('delete', Service::class),
                    ],
                    'message' => [
                        'viewAny' => $request->user()?->can('viewAny', Message::class),
                        'create' => $request->user()?->can('create', Message::class),
                        'update' => $request->user()?->can('update', Message::class),
                        'delete' => $request->user()?->can('delete', Message::class),
                    ],
                    'role' => [
                        'viewAny' => $request->user()?->can('viewAny', Role::class),
                        'create' => $request->user()?->can('create', Role::class),
                        'update' => $request->user()?->can('update', Role::class),
                        'delete' => $request->user()?->can('delete', Role::class),
                    ],
                    'promotion' => [
                        'viewAny' => $request->user()?->can('viewAny', Promotion::class),
                        'create' => $request->user()?->can('create', Promotion::class),
                        'update' => $request->user()?->can('update', Promotion::class),
                        'delete' => $request->user()?->can('delete', Promotion::class),
                    ],
                    'facture' => [
                        'viewAny' => $request->user()?->can('viewAny', Facture::class),
                        'create' => $request->user()?->can('create', Facture::class),
                        'update' => $request->user()?->can('update', Facture::class),
                        'delete' => $request->user()?->can('delete', Facture::class),
                    ],
                    'event' => [
                        'viewAny' => $request->user()?->can('viewAny', Event::class),
                        'create' => $request->user()?->can('create', Event::class),
                        'update' => $request->user()?->can('update', Event::class),
                        'delete' => $request->user()?->can('delete', Event::class),
                    ],
                    'employ' => [
                        'viewAny' => $request->user()?->can('viewAny', User::class),
                        'create' => $request->user()?->can('create', User::class),
                        'update' => $request->user()?->can('update', User::class),
                        'delete' => $request->user()?->can('delete', User::class),
                    ],
                    'booking' => [
                        'viewAny' => $request->user()?->can('viewAny', Booking::class),
                        'create' => $request->user()?->can('create', Booking::class),
                        'update' => $request->user()?->can('update', Booking::class),
                    ],
                ];
        }


        return $sharedData;
    }
}
