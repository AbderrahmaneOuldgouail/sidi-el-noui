<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => "1",
            'event_name' => fake()->name(),
            'event_descreption' => fake()->name(),
            'event_start_date' => date('yy/m/d'),
            'event_end_date' => date('yy/m/d'),
            'event_price' => rand(100, 10000)

        ];
    }
}
