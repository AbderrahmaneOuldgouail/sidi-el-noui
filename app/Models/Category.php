<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Category extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $primaryKey = 'categorie_id';

    protected $fillable = [
        'categorie_name',
    ];


    public function feature(): HasMany
    {
        return $this->hasMany(Feature::class, 'categorie_id', 'categorie_id');
    }
}
