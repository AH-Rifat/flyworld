<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Eligibility extends Model
{
    protected $fillable = [
        'country_id',
        'eligibility_content',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
