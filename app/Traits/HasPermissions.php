<?php

namespace App\Traits;

trait HasPermissions
{
    /**
     * @param string $permission
     * @return bool
     */
    public function hasPermission(string $permission): bool
    {
        $permissions = $this->role->permissions->pluck('permission_name')->toArray();

        return in_array($permission, $permissions);
    }
}
