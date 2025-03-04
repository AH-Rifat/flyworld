<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VisaProcessingTime extends Model
{
    protected $fillable = [
        'country_id',
        'processing_time',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
