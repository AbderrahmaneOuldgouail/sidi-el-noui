<?php

namespace App\Enums;

enum room_status:string
{
    case Busy = 'occupé';
    case Free = 'libre';
    case Out_of_service = 'hors service';
}
