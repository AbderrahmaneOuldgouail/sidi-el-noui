<?php

namespace Database\Seeders;

use App\Enums\Permissions;
use App\Enums\permissions_actions;
use App\Enums\Roles;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        foreach (Permissions::cases() as  $permission) {
            foreach (permissions_actions::cases() as  $permissions_actions) {
                Permission::create(['permission_name' => $permission->value . '-' . $permissions_actions->value]);
            }
        }
        foreach (Roles::cases() as $value) {
            $role = Role::create([
                'role_name' => $value->value,
            ]);
            if ($role->role_name == Roles::SUPPERADMIN->value || $role->role_name == Roles::ADMIN->value)
                $role->permissions()->attach(Permission::all());
        }

        User::create([
            'first_name' => 'admin',
            'last_name' => 'admin',
            'email' => 'admin@gmail.com',
            'phone' => '0550403020',
            'access' => true,
            'password' => bcrypt('password'),
            'role_id' => 1,
        ]);
    }
}
