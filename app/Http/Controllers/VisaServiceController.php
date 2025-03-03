<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\VisaType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VisaServiceController extends Controller
{
    public function visaTypeCountryList()
    {
        $countries = Country::latest()->select('id', 'country_name')->paginate(10);
        $visaTypes = VisaType::with('country')->latest()->select('id', 'country_id', 'visa_type', 'visa_description')->paginate(10);
        return Inertia::render('Dashboard/VisaService/CreateVisaTypeCountryNamePage', compact('countries', 'visaTypes'));
    }

    public function createCountry(Request $request)
    {
        $validation = $request->validate([
            'country_name' => ['required', 'string', 'max:255'],
        ]);
        Country::create($validation);
        return redirect()->back();
    }

    public function editCountry(Request $request, $id)
    {
        $validation = $request->validate([
            'country_name' => ['required', 'string', 'max:255'],
        ]);
        $country = Country::find($id);
        $country->update($validation);
        return redirect()->back();
    }

    public function deleteCountry($id)
    {
        Country::find($id)->delete();
        return redirect()->back();
    }

    public function getAllCountryData()
    {
        $countries = Country::latest()->select('id', 'country_name')->get();
        return Inertia::render('components/SelectCountryList', [
            'countries' => $countries
        ]);
    }

    // visa types sections

    public function createVisaType(Request $request)
    {
        $validation = $request->validate([
            'country_id' => ['required'],
            'visa_type' => ['required'],
            'visa_description' => ['required'],
        ]);

        VisaType::create($validation);
        return redirect()->back();
    }

    public function editVisaType(Request $request, $id)
    {
        $validation = $request->validate([
            'country_id' => ['required'],
            'visa_type' => ['required'],
            'visa_description' => ['required'],
        ]);
        $visaType = VisaType::find($id);
        $visaType->update($validation);
        return redirect()->back();
    }

    public function deleteVisaType($id)
    {
        VisaType::find($id)->delete();
        return redirect()->back();
    }
}
