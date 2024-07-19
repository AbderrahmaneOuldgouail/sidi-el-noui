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
        Schema::create('caracteristiques', function (Blueprint $table) {
            $table->id('feature_id');
            $table->foreignId('categorie_id')->constrained('categories', 'categorie_id')->cascadeOnDelete();
            $table->string('features_name')->nullable();
            $table->boolean('need_value');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('caracteristiques');
    }
};
