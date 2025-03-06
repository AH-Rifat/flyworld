<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SampleDocumentsAndPhotos extends Model
{
    protected $fillable = [
        'country_id',
        'visa_type_id',
        'title',
        'image',
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
