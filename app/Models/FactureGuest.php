<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FactureGuest extends Model
{
    use HasFactory;
    protected $table = 'facture_invites';

    public $timestamps = false;
}
