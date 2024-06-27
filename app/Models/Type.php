<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Type extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $primarykey = 'type_id';

    protected $fillable = [
        'type_designation',
    ];

    public function rooms(): HasMany
    {
        return $this->hasMany(Room::class, 'type_id', 'type_id');
    }
}
