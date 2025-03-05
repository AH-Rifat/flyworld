<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeeAndServiceCharges extends Model
{
    protected $fillable = [
        'country_id',
        'fee_and_service_charges'
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
