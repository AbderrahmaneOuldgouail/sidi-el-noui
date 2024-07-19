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
    protected $table = 'chambres';
    public $timestamps = false;

    protected $fillable = [
        'room_number',
        'type_id',
        'room_descreption',
        'room_price',
        'room_status'
    ];

    public function resolveRouteBinding($value, $field = null)
    {
        return Cache::remember("room-$value", now()->addHour(), fn () => $this->with(['features', 'assets', 'type'])->where('room_number', $value)->first());
    }



    public function assets(): MorphMany
    {
        return $this->morphMany(Assets::class, 'imageable');
    }

    public function features(): BelongsToMany
    {
        return $this->belongsToMany(Feature::class, 'avoir_caracteristique', 'room_id', 'feature_id')->withPivot('valeur');
    }

    public function type(): BelongsTo
    {
        return $this->belongsTo(Type::class, 'type_id', 'type_id');
    }
}
