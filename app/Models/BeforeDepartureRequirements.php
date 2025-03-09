<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BeforeDepartureRequirements extends Model
{
    protected $fillable = [
        'country_id',
        'visa_type_id',
        'before_departure_requirements',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function visaType()
    {
        return $this->belongsTo(VisaType::class);
    }
}
