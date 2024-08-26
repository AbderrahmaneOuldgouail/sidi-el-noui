<?php

namespace App\Policies;

use App\Models\User;

class EmploysPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->role->permissions->contains('permission_name', 'Employ-consulter');
    }


    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->role->permissions->contains('permission_name', 'Employ-cree');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user): bool
    {
        return $user->role->permissions->contains('permission_name', 'Employ-modifier');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user): bool
    {
        return $user->role->permissions->contains('permission_name', 'Employ-supprimer');
    }
}
