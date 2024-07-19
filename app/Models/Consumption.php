<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Consumption extends Model
{
    use HasFactory;
    protected $table = 'consommations';
    public $timestamps = false;
    protected $primaryKey = 'consumption_id';



    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class, "service_id");
    }
}
