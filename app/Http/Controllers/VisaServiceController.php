<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VisaServiceController extends Controller
{
    public function visaTypeCountryList()
    {
        $countries = Country::latest()->select('id', 'country_name')->paginate(10);
        return Inertia::render('Dashboard/VisaService/CreateVisaTypeCountryNamePage', compact('countries'));
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
        $country = Country::find($id);
        $country->update($request->all());
        return redirect()->back();
    }

    public function deleteCountry($id)
    {
        Country::find($id)->delete();
        return redirect()->back();
    }
}
