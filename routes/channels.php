<?php

use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('user.{userId}', function ($user, $userId) {
    return $user->id === $userId;
});

Broadcast::channel('booking-channel', function ($user) {
    // return $user->access == true;
    return true;
});


Broadcast::channel('test', function (User $user) {
    return false;
});
