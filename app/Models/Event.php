<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Event extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $primaryKey = 'event_id';

    public function images(): MorphMany
    {
        return $this->morphMany(Assets::class, 'imageable');
    }
}
