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
        Schema::create('booking_consumptions', function (Blueprint $table) {
            $table->foreignId('booking_id')->constrained('bookings', 'booking_id')->cascadeOnDelete();
            $table->foreignId('consumption_id')->constrained('consumptions', 'consumption_id')->cascadeOnDelete();
            $table->primary(['booking_id', 'consumption_id']);
            $table->string('quantity');
            $table->unsignedSmallInteger('current_consumption_price');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking_consumptions');
    }
};
