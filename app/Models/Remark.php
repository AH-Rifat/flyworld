<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Remark extends Model
{
    protected $fillable = [
        'country_id',
        'remarks',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
