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
            $table->foreignId('guest_id')->constrained('guests', 'guest_id')->cascadeOnDelete();
            $table->string('facture_id');
            $table->foreign('facture_id')->references('facture_id')->on('factures')->cascadeOnDelete();
            $table->primary(['guest_id', 'facture_id']);
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
