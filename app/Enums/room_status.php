<?php

namespace App\Enums;

enum room_status:string
{
    case Busy = 'busy';
    case Free = 'free';
    case Out_of_service = 'out of service';
}
