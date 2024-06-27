<?php

namespace Database\Factories;

use App\Enums\room_status;
use Illuminate\Database\Eloquent\Factories\Factory;
use Nette\Utils\Random;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class RoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'room_number' => fake()->unique()->numberBetween(300,317),
            'type_id' => rand(1,2),
            'room_price' => rand(10, 10500),
            'room_status' => room_status::Free->value,
            'room_descreption' => fake()->name(),
        ];
    }
}
