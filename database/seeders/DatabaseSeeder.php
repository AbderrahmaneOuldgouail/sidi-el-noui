<?php

namespace Database\Seeders;

use App\Enums\Permissions;
use App\Enums\permissions_actions;
use App\Enums\Roles;
use App\Models\Assets;
use App\Models\Caracteristique;
use App\Models\Categorie;
use App\Models\Category;
use App\Models\Chambre;
use App\Models\Event;
use App\Models\Feature;
use App\Models\Message;
use App\Models\Permission;
use App\Models\Promotion;
use App\Models\Role;
use App\Models\Room;
use App\Models\RoomFeature;
use App\Models\Service;
use App\Models\Type;
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
            $role->permissions()->attach(Permission::all());
        }

        // Message::create([
        //     'client_email' => 'client@gmail.com',
        //     'subject' => 'Réservations',
        //     'message' => 'Message content '
        // ]);
        // Message::create([
        //     'client_email' => 'client2@gmail.com',
        //     'subject' => 'Occupation',
        //     'message' => 'Message content '
        // ]);
        // Message::create([
        //     'client_email' => 'client3@gmail.com',
        //     'subject' => 'Services',
        //     'message' => 'Message content '
        // ]);
        // Message::create([
        //     'client_email' => 'client4@gmail.com',
        //     'subject' => 'Evenement',
        //     'message' => 'Message content '
        // ]);

        Type::create([
            'type_designation' => 'double'
        ]);
        Type::create([
            'type_designation' => 'suite'
        ]);
        Type::create([
            'type_designation' => 'single'
        ]);
        Type::create([
            'type_designation' => 'triple'
        ]);
        User::create([
            'first_name' => 'abdou',
            'last_name' => 'ould',
            'email' => 'admin@gmail.com',
            'phone' => '0540100588',
            'access' => true,
            'password' => bcrypt('password'),
            'role_id' => 1,
        ]);
        Room::factory(60)->create();
        Service::factory(2)->create();
        Event::factory(1)->create();
        Promotion::factory(1)->create();
        Category::create([
            'categorie_name' => 'Connection internet'
        ]);
        Category::create([
            'categorie_name' => 'Général'
        ]);
        Category::create([
            'categorie_name' => 'Cuisine'
        ]);
        Category::create([
            'categorie_name' => 'autre'
        ]);
        Feature::factory(20)->create();
        // RoomFeature::factory(100)->create();
    }
}
