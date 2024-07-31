<?php

namespace App\Http\Middleware;

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

        $locale = Cache::get('user_locale_' . $request->ip(), config('app.locale'));
        App::setLocale($locale);
        $direction = $locale == 'ar' ? 'rtl' : 'ltr';

        $file = lang_path("trans.json");

        $request->user()?->roles->pluck('name');
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ],
            'direction' => $direction,
            'locale' => $locale,
            'translations' => File::exists($file) ? File::json($file) : []
        ];
    }
}
