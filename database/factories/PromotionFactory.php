<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Promotion>
 */
class PromotionFactory extends Factory
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
            'promo_start_date' => date('yy/m/d'),
            'promo_end_date' => date('yy/m/d'),
            'promo_value' => rand(100, 2000),
            'promo_descreption' => fake()->name(),
            'is_active' => true
        ];
    }
}
