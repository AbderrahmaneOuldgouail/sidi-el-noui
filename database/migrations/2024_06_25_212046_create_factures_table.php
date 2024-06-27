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
        Schema::create('factures', function (Blueprint $table) {
            $table->id('facture_id');
            $table->foreignId('booking_id')->constrained('bookings','booking_id');
            $table->unsignedSmallInteger('tva');
            $table->decimal('tourist_tax',4,2);
            $table->decimal('timbre',3,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('factures');
    }
};
