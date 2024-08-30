<?php

namespace App\Models;

use App\Events\BookingPlaced;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Booking extends Model
{
    use HasFactory;
    // protected $table = 'reservations';

    protected $primaryKey = 'booking_id';
    protected $fillable = [
        'user_id',
        'check_in',
        'check_out',
        'guest_number',
        'booking_status'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function rooms(): BelongsToMany
    {
        return $this->belongsToMany(Room::class, 'room_bookings', 'booking_id', 'room_id');
    }

    public function consomation(): BelongsToMany
    {
        return $this->belongsToMany(Consumption::class, 'booking_consumptions', 'booking_id', 'consumption_id')->withPivot('quantity');
    }

    public function factures(): HasMany
    {
        return $this->hasMany(Facture::class, 'booking_id', 'booking_id');
    }
}
