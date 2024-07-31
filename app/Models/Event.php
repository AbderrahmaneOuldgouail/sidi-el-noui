<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Event extends Model
{
    use HasFactory;
    protected $table = 'evenement';

    public $timestamps = false;
    protected $primaryKey = 'event_id';

    protected $fillable = [
        'user_id',
        'event_name',
        'event_descreption',
        'event_start_date',
        'event_end_date',
        'event_price',
    ];

    public function resolveRouteBinding($value, $field = null)
    {
        return $this->with(['assets'])->where('event_id', $value)->first();
    }

    public function assets(): MorphMany
    {
        return $this->morphMany(Assets::class, 'imageable');
    }
}
