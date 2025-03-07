<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ImportantContactAndLink extends Model
{
    protected $fillable = [
        'country_id',
        'visa_type_id',
        'title',
        'address',
        'email',
        'phone',
        'office_hours',
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
