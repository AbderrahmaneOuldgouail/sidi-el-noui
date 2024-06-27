<?php

namespace App\Enums;

enum permissions_actions:string
{
    case View = 'view';
    case Create = 'create';
    case Edit = 'Edit';
    case Delete = 'delete';
}
