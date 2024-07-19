<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Enums\booking_status;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id('booking_id');
            $table->foreignId('user_id')->nullable()->constrained('users', 'id')->nullOnDelete();
            $table->date('check_in');
            $table->date('check_out');
            $table->integer('nb_adult');
            $table->integer('nb_teens');
            $table->enum('booking_status', [booking_status::Waiting->value, booking_status::Refuse->value, booking_status::Confirmed->value,]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
