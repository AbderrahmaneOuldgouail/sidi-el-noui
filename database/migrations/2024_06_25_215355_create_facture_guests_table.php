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
        Schema::create('facture_guests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('guest_id')->constrained('guests', 'guest_id')->cascadeOnDelete();
            $table->foreignId('facture_id')->constrained('factures', 'facture_id')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('facture_guests');
    }
};
