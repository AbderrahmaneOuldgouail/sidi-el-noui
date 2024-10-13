<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Promotion extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $primaryKey = 'promotion_id';

    protected $fillable = [
        'user_id',
        'promo_descreption',
        'promo_start_date',
        'promo_end_date',
        'promo_value',
        'is_active',
    ];

    public function resolveRouteBinding($value, $field = null)
    {
        return $this->with(['assets'])->where('promotion_id', $value)->first();
    }

    public function assets(): MorphMany
    {
        return $this->morphMany(Assets::class, 'imageable');
    }
    
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
