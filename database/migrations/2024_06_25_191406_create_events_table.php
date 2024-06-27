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
        Schema::create('events', function (Blueprint $table) {
            $table->id('event_id');
            $table->foreignId('user_id')->nullable()->constrained('users', 'id')->nullOnDelete();
            $table->string('event_name', 50);
            $table->string('event_descreption', 255);
            $table->date('event_start_date');
            $table->date('event_end_date');
            $table->integer('event_price');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
