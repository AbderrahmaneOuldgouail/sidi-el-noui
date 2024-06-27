<?php

namespace App\Enums;

enum booking_status:string
{
    case Waiting = 'waiting';
    case Confirmed = 'confirmed';
    case Refuse = 'refuse';
}
