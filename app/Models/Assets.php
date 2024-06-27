<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Assets extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'url',
        'imageable_id',
        'imageable_type',
    ];

    public $timestamps = false;

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($asset) {
            $asset->url = url('storage/' . $asset->url);
        });
    }


    public function imageable(): MorphTo
    {
        return $this->morphTo();
    }
}
