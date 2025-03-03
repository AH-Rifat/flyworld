<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VisaType extends Model
{
    protected $fillable = [
        'country_id',
        'visa_type',
        'visa_description'
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
