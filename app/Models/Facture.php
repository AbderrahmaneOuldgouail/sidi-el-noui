<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Facture extends Model
{
    use HasFactory;
    protected $primaryKey = 'facture_id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'booking_id',
        'tva',
        'tourist_tax',
        'timbre',
        'payment'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($facture) {
            $currentYear = now()->year;

            $lastFacture = Facture::latest()->first();

            $lastNumber = $lastFacture ? intval(explode('-', $lastFacture->facture_id)[1]) : 0;

            $newNumber = $lastNumber + 1;

            $facture->facture_id = "$currentYear-$newNumber";
        });
    }

    public function booking(): BelongsTo
    {
        return $this->belongsTo(Booking::class, "booking_id");
    }

    public function guests(): BelongsToMany
    {
        return $this->belongsToMany(Guest::class, 'facture_guests', 'facture_id', 'guest_id');
    }
}
