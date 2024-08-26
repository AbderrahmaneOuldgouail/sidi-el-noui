<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Facture extends Model
{
    use HasFactory;
    protected $primaryKey = 'facture_id';

    protected $fillable = [
        'booking_id',
        'data',
        'tva',
        'tourist_tax',
        'timbre'
    ];

    protected $casts = [
        'data' => 'json',
    ];

    public function booking(): BelongsTo
    {
        return $this->belongsTo(Booking::class, "booking_id");
    }
}
