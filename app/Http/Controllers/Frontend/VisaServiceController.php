<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Country;
use App\Models\VisaType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VisaServiceController extends Controller
{
    public function visaServicePage() {
        $allCountries = Country::latest()->select('id', 'country_name')->get();
        $allVisaTypes = VisaType::latest()->select('id', 'visa_type')->get();

        return Inertia::render('VisaService/VisaService',compact('allCountries','allVisaTypes'));
    }
}
