<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Feature extends Model
{
    use HasFactory;

    protected $table = 'caracteristiques';
    public $timestamps = false;
    protected $primaryKey = 'feature_id';



    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'categorie_id', 'categorie_id');
    }

    public function rooms(): BelongsToMany
    {
        return $this->belongsToMany(Room::class, 'avoir_caracteristique', 'feature_id', 'room_id')->withPivot('valeur');
    }
}
