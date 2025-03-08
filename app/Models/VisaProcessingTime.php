<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VisaProcessingTime extends Model
{
    protected $fillable = [
        'country_id',
        'visa_type_id',
        'processing_time',
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
