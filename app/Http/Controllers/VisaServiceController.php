<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\Eligibility;
use App\Models\Remark;
use App\Models\VisaType;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Throwable;

class VisaServiceController extends Controller
{
    public function visaTypeCountryList()
    {
        $countries = Country::latest()->select('id', 'country_name')->paginate(10);
        $visaTypes = VisaType::with('country')->latest()->select('id', 'country_id', 'visa_type', 'visa_description')->paginate(10);
        $remarks = Remark::with('country')->latest()->select('id', 'country_id', 'remarks')->paginate(10);
        $eligibilitys = Eligibility::with('country')->latest()->select('id', 'country_id', 'eligibility_content')->paginate(10);
        return Inertia::render('Dashboard/VisaService/CreateVisaTypeCountryNamePage', compact('countries', 'visaTypes', 'remarks', 'eligibilitys'));
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
        try {
            Country::find($id)->delete();
        } catch (Throwable $th) {
            if ($th->getCode() == 23000) {
                return redirect()->back()->withErrors([
                    'error' => 'This country has been used in another table'
                ]);
            }
        }
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

    // visa remarks sections

    public function createRemarks(Request $request)
    {
        $validation = $request->validate([
            'country_id' => ['required'],
            'remarks' => ['required'],
        ]);
        Remark::create($validation);
        return redirect()->back();
    }

    public function editRemarks(Request $request, $id)
    {
        $validation = $request->validate([
            'country_id' => ['required'],
            'remarks' => ['required'],
        ]);
        $remark = Remark::find($id);
        $remark->update($validation);
        return redirect()->back();
    }

    public function deleteRemarks($id)
    {
        Remark::find($id)->delete();
        return redirect()->back();
    }

    //  Eligibility to Apply for Visa sections

    public function createEligibility(Request $request)
    {
        $validation = $request->validate([
            'country_id' => ['required'],
            'eligibility_content' => ['required'],
        ]);
        Eligibility::create($validation);
        return redirect()->back();
    }

    public function editEligibility(Request $request, $id)
    {
        $validation = $request->validate([
            'country_id' => ['required'],
            'eligibility_content' => ['required'],
        ]);
        $eligibility = Eligibility::find($id);
        $eligibility->update($validation);
        return redirect()->back();
    }

    public function deleteEligibility($id)
    {
        Eligibility::find($id)->delete();
        return redirect()->back();
    }
}
