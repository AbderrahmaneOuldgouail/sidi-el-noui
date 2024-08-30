<?php

namespace App\Models;

use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Room extends Model
{
    use HasFactory;
    // protected $table = 'chambres';
    public $timestamps = false;

    protected $fillable = [
        'room_number',
        'type_id',
        'room_descreption',
        'room_price',
        'room_status',
        'beeds_number'
    ];


    public function assets(): MorphMany
    {
        return $this->morphMany(Assets::class, 'imageable');
    }

    public function features(): BelongsToMany
    {
        return $this->belongsToMany(Feature::class, 'room_features', 'room_id', 'feature_id')->withPivot('valeur');
    }

    public function type(): BelongsTo
    {
        return $this->belongsTo(Type::class, 'type_id', 'type_id');
    }

    public function bookings(): BelongsToMany
    {
        return $this->belongsToMany(Booking::class, 'room_bookings', 'room_id', 'booking_id');
    }
}
