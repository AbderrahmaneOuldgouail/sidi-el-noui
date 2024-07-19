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
        Schema::create('avoir_caracteristique', function (Blueprint $table) {
            $table->id();
            $table->foreignId('room_id')->constrained('chambres', 'id')->cascadeOnDelete();
            $table->foreignId('feature_id')->constrained('caracteristiques', 'feature_id')->cascadeOnDelete();
            $table->string('valeur')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('avoir_caracteristique');
    }
};
