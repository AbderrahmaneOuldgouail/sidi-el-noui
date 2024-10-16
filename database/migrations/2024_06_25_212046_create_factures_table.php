<?php

use App\Enums\FacturePayment;
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
            $table->string('facture_id')->primary(); 
            $table->foreignId('booking_id')->constrained('bookings', 'booking_id');
            $table->decimal('tva', 4, 2);
            $table->decimal('tourist_tax', 8, 2);
            $table->decimal('timbre', 6, 2);
            $table->enum('payment', [FacturePayment::Cheque->value, FacturePayment::Espece->value]);
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
