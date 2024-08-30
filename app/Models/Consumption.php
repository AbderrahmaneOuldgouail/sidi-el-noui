<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Consumption extends Model
{
    use HasFactory;
    // protected $table = 'consommations';
    public $timestamps = false;
    protected $primaryKey = 'consumption_id';

    protected $fillable = [
        'consumption_name',
        'consumption_price',
        'service_id',
    ];


    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class, "service_id");
    }

    public function bookings(): BelongsToMany
    {
        return $this->belongsToMany(Consumption::class, 'booking_consumptions', 'consumption_id', 'booking_id')->withPivot('quantity');
    }
}
