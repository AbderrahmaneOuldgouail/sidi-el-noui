<?php

namespace App\Enums;

enum Roles: string
{
    case SUPPERADMIN = 'supper-admin';
    case ADMIN = 'admin';
    case CLIENT = 'client';
    case COMPANY = 'sositée';

    public static function exists(string $value): bool
    {
        return in_array($value, array_column(self::cases(), 'value'));
    }

    
}
