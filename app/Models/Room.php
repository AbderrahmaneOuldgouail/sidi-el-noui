<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;


class Room extends Model
{
    use HasFactory;
    public $timestamps = false;



    protected $fillable = [
        'room_number',
        'type_id',
        'room_descreption',
        'room_price',
        'room_status'
    ];

    public function assets(): MorphMany
    {
        return $this->morphMany(Assets::class, 'imageable');
    }

    public function features(): BelongsToMany
    {
        return $this->belongsToMany(Feature::class, 'room_features', 'room_id', 'feature_id');
    }

    public function type(): BelongsTo
    {
        return $this->belongsTo(Type::class, 'type_id', 'type_id');
    }
}
