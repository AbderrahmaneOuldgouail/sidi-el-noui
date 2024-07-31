<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('avoir_consommations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('booking_id')->constrained('reservations', 'booking_id')->cascadeOnDelete();
            $table->foreignId('consumption_id')->constrained('consommations', 'consumption_id')->cascadeOnDelete();
            $table->string('quantity');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('avoir_consommations');
    }
};
