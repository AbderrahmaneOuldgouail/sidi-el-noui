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

        Message::create([
            'client_email' => 'ademamin@gmail.com',
            'subject' => 'Réservations',
            'message' => 'Comment je peux faire une réservation a travert le site web '
        ]);
        Message::create([
            'client_email' => 'islamaei@gmail.com',
            'subject' => 'Services',
            'message' => 'Quel sont les services disponible dans un suite'
        ]);
        Message::create([
            'client_email' => 'farid_mazi@gmail.com',
            'subject' => 'Evenement',
            'message' => "Comment je peux réserver pour l'évènement prochainre"
        ]);

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
        // Category::create([
        //     'categorie_name' => 'Connection internet'
        // ]);
        // Category::create([
        //     'categorie_name' => 'Général'
        // ]);
        // Category::create([
        //     'categorie_name' => 'Cuisine'
        // ]);
        // Category::create([
        //     'categorie_name' => 'Sale de bain'
        // ]);
        // Feature::factory(20)->create();
        // RoomFeature::factory(100)->create();
    }
}
