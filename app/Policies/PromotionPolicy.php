<?php

namespace App\Policies;

use App\Models\Promotion;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PromotionPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->role->permissions->contains('permission_name', 'Promotion-consulter');
    }


    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->role->permissions->contains('permission_name', 'Promotion-cree');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user): bool
    {
        return $user->role->permissions->contains('permission_name', 'Promotion-modifier');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user): bool
    {
        return $user->role->permissions->contains('permission_name', 'Promotion-supprimer');
    }
}
