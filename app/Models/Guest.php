<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guest extends Model
{
    use HasFactory;
    protected $table = 'invites';
    public $timestamps = false;
    protected $primaryKey = 'guest_id';


}
