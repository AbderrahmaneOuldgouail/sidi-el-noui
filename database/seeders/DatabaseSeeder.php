<?php

namespace Database\Seeders;

use App\Models\Assets;
use App\Models\Caracteristique;
use App\Models\Categorie;
use App\Models\Category;
use App\Models\Chambre;
use App\Models\Event;
use App\Models\Feature;
use App\Models\Promotion;
use App\Models\Role;
use App\Models\Room;
use App\Models\Service;
use App\Models\Type;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Role::create([
            'role_name' => 'admin',
        ]);
        Role::create([
            'role_name' => 'client',
        ]);
        // Type::create([
        //     'type_designation' => 'double'
        // ]);
        // Type::create([
        //     'type_designation' => 'suite'
        // ]);
        User::create([
            'first_name' => 'abdou',
            'last_name' => 'ould',
            'email' => 'admin@gmail.com',
            'phone' => '0540145588',
            'access' => true,
            'password' => bcrypt('password'),
            'role_id' => 1,
        ]);
        User::create([
            'first_name' => 'abdou',
            'last_name' => 'ould',
            'email' => 'user@gmail.com',
            'phone' => '0540145577',
            'access' => false,
            'password' => bcrypt('password'),
            'role_id' => 2,
        ]);
        // User::factory(10)->create();
        // Room::factory(10)->create();
        // Service::factory(2)->create();
        // Event::factory(1)->create();
        // Promotion::factory(1)->create();
        Category::create([
            'categorie_name' => 'categorie 1'
        ]);
        Category::create([
            'categorie_name' => 'categorie 2'
        ]);
        // Category::create([
        //     'categorie_name' => 'categorie 3'
        // ]);
        // Category::create([
        //     'categorie_name' => 'categorie 4'
        // ]);
        Feature::factory(15)->create();
        // Assets::create([
        //     'name' => 'assets 1',
        //     'url' => 'assets/1.jpg',
        //     'model_id' => 1,
        //     'model_type' => "Chambre"
        // ]);
    }
}
