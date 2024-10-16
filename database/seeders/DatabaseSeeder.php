<?php

namespace Database\Seeders;

use App\Enums\Permissions;
use App\Enums\permissions_actions;
use App\Enums\Roles;
use App\Enums\room_status;
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
            if ($role->role_name == Roles::SUPPERADMIN->value || $role->role_name == Roles::ADMIN->value)
                $role->permissions()->attach(Permission::all());
        }

        // Message::create([
        //     'client_email' => 'ademamin@gmail.com',
        //     'subject' => 'Réservations',
        //     'message' => 'Comment je peux faire une réservation a travert le site web '
        // ]);
        // Message::create([
        //     'client_email' => 'islamaei@gmail.com',
        //     'subject' => 'Services',
        //     'message' => 'Quel sont les services disponible dans un suite'
        // ]);
        // Message::create([
        //     'client_email' => 'farid_mazi@gmail.com',
        //     'subject' => 'Evenement',
        //     'message' => "Comment je peux réserver pour l'évènement prochainre"
        // ]);

        Type::create([
            'type_designation' => 'Single'
        ]);
        Type::create([
            'type_designation' => 'Double'
        ]);
        Type::create([
            'type_designation' => 'Triple'
        ]);
        Type::create([
            'type_designation' => 'Suite'
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
        // Room::factory(60)->create();
        // Service::factory(2)->create();
        // Event::factory(1)->create();
        // Promotion::factory(1)->create();
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
            'categorie_name' => 'Sale de bain'
        ]);
        Room::create([
            'room_number' => 100,
            'type_id' => 2,
            'room_price' => 5500,
            'beeds_number' => 2,
            'room_status' => room_status::Free->value,
            'room_descreption' => fake()->name(),
        ]);
        Room::create([
            'room_number' => 101,
            'type_id' => 3,
            'room_price' => 9500,
            'beeds_number' => 3,
            'room_status' => room_status::Free->value,
            'room_descreption' => fake()->name(),
        ]);
        Service::create([
            'service_name' => 'Réstaurant',
            'service_descreption' => "descreption",
            'availability' => true,
        ]);
    }
}
