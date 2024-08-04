<?php

namespace App\Enums;

enum Permissions: string
{
        // case RoomView = 'chambre@view';
        // case RoomCreate = 'chambre@create';
        // case RoomEdit = 'chambre@edit';
        // case RoomDelete = 'chambre@delete';

        // case ServiceView = 'service@view';
        // case ServiceCreate = 'service@create';
        // case ServiceEdit = 'service@edit';
        // case ServiceDelete = 'service@delete';

    case Room = ['create', 'edit', 'view', 'delete'];
    case Service = ['create', 'edit', 'view', 'delete'];
    // case Service = permissions_actions::cases();
}
