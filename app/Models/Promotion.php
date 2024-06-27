<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Promotion extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $primaryKey = 'promotion_id';

    public function assets(): MorphMany
    {
        return $this->morphMany(Assets::class, 'imageable');
    }
}
