<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Guest extends Model
{
    use HasFactory;
    // protected $table = 'invites';
    public $timestamps = false;
    protected $primaryKey = 'guest_id';


    public function factures(): BelongsToMany
    {
        return $this->belongsToMany(Facture::class, 'facture_guests', 'guest_id', 'facture_id');
    }
}
