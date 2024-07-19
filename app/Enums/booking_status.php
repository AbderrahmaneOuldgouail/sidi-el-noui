<?php

namespace App\Enums;

enum booking_status:string
{
    case Waiting = 'en attente';
    case Confirmed = 'confirmer';
    case Refuse = 'refusé';
}
