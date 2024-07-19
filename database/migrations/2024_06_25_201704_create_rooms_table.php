<?php

use App\Enums\room_status;
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
        Schema::create('chambres', function (Blueprint $table) {
            $table->id();
            $table->string('room_number', 3)->unique();
            $table->foreignId('type_id')->constrained('types', 'type_id')->cascadeOnDelete()->cascadeOnDelete();
            $table->unsignedInteger('room_price');
            $table->enum('room_status', [room_status::Busy->value, room_status::Free->value, room_status::Out_of_service->value,]);
            $table->string('room_descreption', 255);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chambres');
    }
};
