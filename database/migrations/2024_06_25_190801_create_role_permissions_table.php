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
        Schema::create('role_posed_permissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('role_id')->constrained('roles', 'role_id');
            $table->foreignId('permission_id')->constrained('permissions', 'permission_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('role_posed_permissions');
    }
};
