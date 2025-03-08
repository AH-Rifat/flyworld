<?php

namespace App\Http\Controllers;

use App\Models\BeforeDepartureRequirements;
use App\Models\Country;
use App\Models\Eligibility;
use App\Models\FeeAndServiceCharges;
use App\Models\ImportantContactAndLink;
use App\Models\Remark;
use App\Models\SampleDocumentsAndPhotos;
use App\Models\VisaProcessingTime;
use App\Models\VisaType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Throwable;

class VisaServiceController extends Controller
{
    public function visaTypeCountryList()
    {
        $allCountries = Country::latest()->select('id', 'country_name')->get();
        $countries = Country::latest()->select('id', 'country_name')->paginate(10);
        $visaTypes = VisaType::latest()->select('id', 'visa_type', 'visa_description')->paginate(10);
        $remarks = Remark::with('country')->latest()->select('id', 'country_id', 'remarks')->paginate(10);
        $eligibilitys = Eligibility::with('country')->latest()->select('id', 'country_id', 'eligibility_content')->paginate(10);
        $visaProcessingTimes = VisaProcessingTime::with('country')->latest()->select('id', 'country_id', 'processing_time')->paginate(10);
        $beforeDepartureRequirements = BeforeDepartureRequirements::with('country')->latest()->select('id', 'country_id', 'before_departure_requirements')->paginate(10);
        $feeAndServiceCharges = FeeAndServiceCharges::with('country')->latest()->select('id', 'country_id', 'fee_and_service_charges')->paginate(10);

        return Inertia::render('Dashboard/VisaService/CreateVisaTypeCountryNamePage', compact('countries', 'allCountries', 'visaTypes', 'remarks', 'eligibilitys', 'visaProcessingTimes', 'beforeDepartureRequirements', 'feeAndServiceCharges'));
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
            'visa_type' => ['required', 'unique:visa_types,visa_type'],
            'visa_description' => ['required'],
        ]);

        VisaType::create($validation);
        return redirect()->back();
    }

    public function editVisaType(Request $request, $id)
    {
        $validation = $request->validate([
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

    // visa processing time sections

    public function createVisaProcessingTime(Request $request)
    {
        $validation = $request->validate([
            'country_id' => ['required'],
            'processing_time' => ['required'],
        ]);
        VisaProcessingTime::create($validation);
        return redirect()->back();
    }

    public function editVisaProcessingTime(Request $request, $id)
    {
        $validation = $request->validate([
            'country_id' => ['required'],
            'processing_time' => ['required'],
        ]);
        $visaProcessingTime = VisaProcessingTime::find($id);
        $visaProcessingTime->update($validation);
        return redirect()->back();
    }

    public function deleteVisaProcessingTime($id)
    {
        VisaProcessingTime::find($id)->delete();
        return redirect()->back();
    }

    // before departure requirements sections

    public function createBeforeDepartureRequirements(Request $request)
    {
        $validation = $request->validate([
            'country_id' => ['required'],
            'before_departure_requirements' => ['required'],
        ]);
        BeforeDepartureRequirements::create($validation);
        return redirect()->back();
    }

    public function editBeforeDepartureRequirements(Request $request, $id)
    {
        $validation = $request->validate([
            'country_id' => ['required'],
            'before_departure_requirements' => ['required'],
        ]);
        $beforeDepartureRequirements = BeforeDepartureRequirements::find($id);
        $beforeDepartureRequirements->update($validation);
        return redirect()->back();
    }

    public function deleteBeforeDepartureRequirements($id)
    {
        BeforeDepartureRequirements::find($id)->delete();
        return redirect()->back();
    }

    // visa fees and service charges sections

    public function createFeeAndServiceCharges(Request $request)
    {
        $validation = $request->validate([
            'country_id' => ['required'],
            'fee_and_service_charges' => ['required'],
        ]);
        FeeAndServiceCharges::create($validation);
        return redirect()->back();
    }

    public function editFeeAndServiceCharges(Request $request, $id)
    {
        $validation = $request->validate([
            'country_id' => ['required'],
            'fee_and_service_charges' => ['required'],
        ]);
        $feeAndServiceCharges = FeeAndServiceCharges::find($id);
        $feeAndServiceCharges->update($validation);
        return redirect()->back();
    }

    public function deleteFeeAndServiceCharges($id)
    {
        FeeAndServiceCharges::find($id)->delete();
        return redirect()->back();
    }

    // sample documents and photo sections

    public function getSampleDocumentsAndPhotos()
    {
        $allCountries = Country::latest()->select('id', 'country_name')->get();
        $allVisaTypes = VisaType::latest()->select('id', 'visa_type', 'visa_description')->get();
        $sampleDocumentsAndPhotos = SampleDocumentsAndPhotos::with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'title', 'image')->paginate(10);
        return Inertia::render('Dashboard/VisaService/SampleDocuments/SampleDocumentsSection', compact('sampleDocumentsAndPhotos', 'allCountries', 'allVisaTypes'));
    }

    public function createSampleDocumentsAndPhotos(Request $request)
    {
        $validated = $request->validate([
            'country_id' => 'required|exists:countries,id',
            'visa_type_id' => 'required|exists:visa_types,id',
            'title' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048', // 2MB max
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('uploads/sample-documents', 'public');
            $validated['image'] = $imagePath;
        }

        SampleDocumentsAndPhotos::create($validated);

        return redirect()->back();
    }

    public function editSampleDocumentsAndPhotos(Request $request, $id)
    {
        $validated = $request->validate([
            'country_id' => 'required|exists:countries,id',
            'visa_type_id' => 'required|exists:visa_types,id',
            'title' => 'required|string|max:255',
            'image' => 'nullable||max:2048', // 2MB max
        ]);

        $sampleDocumentsAndPhotos = SampleDocumentsAndPhotos::find($id);

        if ($request->hasFile('image')) {
            if (Storage::disk('public')->exists($sampleDocumentsAndPhotos['image'])) {
                Storage::disk('public')->delete($sampleDocumentsAndPhotos['image']);
            }

            $imagePath = $request->file('image')->store('uploads/sample-documents', 'public');
            $validated['image'] = $imagePath;
        }

        $sampleDocumentsAndPhotos->update($validated);

        return redirect()->back();
    }

    public function deleteSampleDocumentsAndPhotos($id)
    {
        $document = SampleDocumentsAndPhotos::findOrFail($id);

        if (Storage::disk('public')->exists($document->image)) {
            Storage::disk('public')->delete($document->image);
        }

        $document->delete();
        return redirect()->back();
    }

    // Important contact and links sections

    public function getImportantContactAndLinks()
    {
        $allCountries = Country::latest()->select('id', 'country_name')->get();
        $allVisaTypes = VisaType::latest()->select('id', 'visa_type', 'visa_description')->get();
        $importantContactAndLinks = ImportantContactAndLink::with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'title', 'address', 'email', 'phone', 'office_hours')->paginate(10);
        return Inertia::render('Dashboard/VisaService/ImportantContactAndLinks/ImportantContactSection', compact('importantContactAndLinks', 'allCountries', 'allVisaTypes'));
    }

    public function createImportantContactAndLinks(Request $request)
    {
        $validated = $request->validate([
            'country_id' => 'required|exists:countries,id',
            'visa_type_id' => 'required|exists:visa_types,id',
            'title' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => ['required', 'numeric', 'digits:11'],
            'office_hours' => 'nullable|string|max:255',
        ]);

        ImportantContactAndLink::create($validated);

        return redirect()->back();
    }

    public function editImportantContactAndLinks(Request $request, $id)
    {
        $validated = $request->validate([
            'country_id' => 'required|exists:countries,id',
            'visa_type_id' => 'required|exists:visa_types,id',
            'title' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => ['required', 'numeric', 'digits:11'],
            'office_hours' => 'nullable|string|max:255',
        ]);

        $importantContactAndLink = ImportantContactAndLink::find($id);
        $importantContactAndLink->update($validated);

        return redirect()->back();
    }

    public function deleteImportantContactAndLinks($id)
    {
        ImportantContactAndLink::find($id)->delete();
        return redirect()->back();
    }
}
