<?php

namespace App\Enums;

enum permissions_actions:string
{
    case View = 'consulter';
    case Create = 'cree';
    case Edit = 'modifier';
    case Delete = 'supprimer';
}
