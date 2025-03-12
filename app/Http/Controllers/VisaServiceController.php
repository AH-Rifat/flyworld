<?php

namespace App\Http\Controllers;

use App\Models\BeforeDepartureRequirements;
use App\Models\Country;
use App\Models\Eligibility;
use App\Models\FeeAndServiceCharges;
use App\Models\ImportantContactAndLink;
use App\Models\ImportantDocumentInfo;
use App\Models\Remark;
use App\Models\SampleDocumentsAndPhotos;
use App\Models\VisaDocumentsRequirements;
use App\Models\VisaProcessingTime;
use App\Models\VisaType;
use App\Models\VisaTypeDescription;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Throwable;

class VisaServiceController extends Controller
{
    public function visaTypeCountryList()
    {
        $allCountries = Country::select('id', 'country_name')->orderBy('country_name', 'asc')->get();
        $allVisaTypes = VisaType::latest()->select('id', 'visa_type')->get();
        $countries = Country::select('id', 'country_name')->orderBy('country_name', 'asc')->paginate(10);
        $visaTypes = VisaType::latest()->select('id', 'visa_type')->paginate(10);
        $visaTypeDescriptions = VisaTypeDescription::with('country', 'visaType')->latest()->select('id', 'country_id', 'visa_type_id', 'description')->paginate(10);
        $remarks = Remark::with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'remarks')->paginate(10);
        $eligibilitys = Eligibility::with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'eligibility_content')->paginate(10);
        $visaProcessingTimes = VisaProcessingTime::with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'processing_time')->paginate(10);
        $beforeDepartureRequirements = BeforeDepartureRequirements::with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'before_departure_requirements')->paginate(10);
        $feeAndServiceCharges = FeeAndServiceCharges::with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'fee_and_service_charges')->paginate(10);
        $importantDocumentInfo = ImportantDocumentInfo::with(['country', 'visaType'])->select('id', 'country_id', 'visa_type_id', 'description', 'remarks')->paginate(10);

        return Inertia::render('Dashboard/VisaService/CreateVisaTypeCountryNamePage', compact('countries', 'allCountries', 'allVisaTypes', 'visaTypes', 'visaTypeDescriptions', 'remarks', 'eligibilitys', 'visaProcessingTimes', 'beforeDepartureRequirements', 'feeAndServiceCharges', 'importantDocumentInfo'));
    }

    public function createCountry(Request $request)
    {
        $validation = $request->validate([
            'country_name' => ['required', 'string', 'unique:countries,country_name', 'max:255'],
        ]);

        Country::create($validation);
        return redirect()->back();
    }

    public function editCountry(Request $request, $id)
    {
        $validation = $request->validate([
            'country_name' => ['required', 'string', 'unique:countries,country_name', 'max:255'],
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
        $countries = Country::select('id', 'country_name')->orderBy('country_name', 'asc')->get();
        return Inertia::render('components/SelectCountryList', [
            'countries' => $countries
        ]);
    }

    // visa types sections

    public function createVisaType(Request $request)
    {
        $validation = $request->validate([
            'visa_type' => ['required', 'unique:visa_types,visa_type'],
        ]);

        VisaType::create($validation);
        return redirect()->back();
    }

    public function editVisaType(Request $request, $id)
    {
        $validation = $request->validate([
            'visa_type' => ['required'],
        ]);
        $visaType = VisaType::find($id);
        $visaType->update($validation);
        return redirect()->back();
    }

    public function deleteVisaType($id)
    {
        try {
            VisaType::find($id)->delete();
        } catch (Throwable $th) {
            if ($th->getCode() == 23000) {
                return redirect()->back()->withErrors([
                    'error' => 'This visa type has been used in another table'
                ]);
            }
        }
        return redirect()->back();
    }

    // visa types discription sections

    public function createVisaTypeDescription(Request $request)
    {
        $validation = $request->validate([
            'country_id' => ['required'],
            'visa_type_id' => ['required'],
            'description' => ['required'],
        ]);
        VisaTypeDescription::create($validation);
        return redirect()->back();
    }

    public function editVisaTypeDescription(Request $request, $id)
    {
        $validation = $request->validate([
            'country_id' => ['required'],
            'visa_type_id' => ['required'],
            'description' => ['required'],
        ]);
        $visaTypeDescription = VisaTypeDescription::find($id);
        $visaTypeDescription->update($validation);
        return redirect()->back();
    }

    public function deleteVisaTypeDescription($id)
    {
        VisaTypeDescription::find($id)->delete();
        return redirect()->back();
    }

    // visa remarks sections

    public function createRemarks(Request $request)
    {
        $validation = $request->validate([
            'country_id' => ['required', 'exists:countries,id'],
            'visa_type_id' => ['required', 'exists:visa_types,id'],
            'remarks' => ['required', 'string'],
        ]);
        Remark::create($validation);
        return redirect()->back();
    }

    public function editRemarks(Request $request, $id)
    {
        $validation = $request->validate([
            'country_id' => ['required', 'exists:countries,id'],
            'visa_type_id' => ['required', 'exists:visa_types,id'],
            'remarks' => ['required', 'string'],
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
            'country_id' => ['required', 'exists:countries,id'],
            'visa_type_id' => ['required', 'exists:visa_types,id'],
            'eligibility_content' => ['required'],
        ]);
        Eligibility::create($validation);
        return redirect()->back();
    }

    public function editEligibility(Request $request, $id)
    {
        $validation = $request->validate([
            'country_id' => ['required', 'exists:countries,id'],
            'visa_type_id' => ['required', 'exists:visa_types,id'],
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
            'country_id' => ['required', 'exists:countries,id'],
            'visa_type_id' => ['required', 'exists:visa_types,id'],
            'processing_time' => ['required'],
        ]);
        VisaProcessingTime::create($validation);
        return redirect()->back();
    }

    public function editVisaProcessingTime(Request $request, $id)
    {
        $validation = $request->validate([
            'country_id' => ['required', 'exists:countries,id'],
            'visa_type_id' => ['required', 'exists:visa_types,id'],
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
            'country_id' => ['required', 'exists:countries,id'],
            'visa_type_id' => ['required', 'exists:visa_types,id'],
            'before_departure_requirements' => ['required'],
        ]);
        BeforeDepartureRequirements::create($validation);
        return redirect()->back();
    }

    public function editBeforeDepartureRequirements(Request $request, $id)
    {
        $validation = $request->validate([
            'country_id' => ['required', 'exists:countries,id'],
            'visa_type_id' => ['required', 'exists:visa_types,id'],
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
            'country_id' => ['required', 'exists:countries,id'],
            'visa_type_id' => ['required', 'exists:visa_types,id'],
            'fee_and_service_charges' => ['required'],
        ]);
        FeeAndServiceCharges::create($validation);
        return redirect()->back();
    }

    public function editFeeAndServiceCharges(Request $request, $id)
    {
        $validation = $request->validate([
            'country_id' => ['required', 'exists:countries,id'],
            'visa_type_id' => ['required', 'exists:visa_types,id'],
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
        $allCountries = Country::select('id', 'country_name')->orderBy('country_name', 'asc')->get();
        $allVisaTypes = VisaType::latest()->select('id', 'visa_type')->get();
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
            $image = $request->file('image');
            $destinationPath = 'images/sample-documents/';
            $documentImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $documentImage);
            $validated['image'] = "$documentImage";
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

        $document = SampleDocumentsAndPhotos::find($id);

        if ($request->hasFile('image')) {
            $filePath = 'images/sample-documents/' . $document->image;
            if (file_exists($filePath)) {
                unlink($filePath);
            }

            $image = $request->file('image');
            $destinationPath = 'images/sample-documents/';
            $documentImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $documentImage);
            $validated['image'] = "$documentImage";
        }

        $document->update($validated);

        return redirect()->back();
    }

    public function deleteSampleDocumentsAndPhotos($id)
    {
        $document = SampleDocumentsAndPhotos::findOrFail($id);

        $filePath = 'images/sample-documents/' . $document->image;
        if (file_exists($filePath)) {
            unlink($filePath);
        }

        $document->delete();
        return redirect()->back();
    }

    // Important contact and links sections

    public function getImportantContactAndLinks()
    {
        $allCountries = Country::select('id', 'country_name')->orderBy('country_name', 'asc')->get();
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
            'email' => 'nullable|email|max:255',
            'phone' => ['required'],
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
            'email' => 'nullable|email|max:255',
            'phone' => ['required'],
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

    // visa documents requirements routes

    public function getVisaDocumentsRequirements()
    {
        $allCountries = Country::select('id', 'country_name')->orderBy('country_name', 'asc')->get();
        $allVisaTypes = VisaType::latest()->select('id', 'visa_type', 'visa_description')->get();
        $documentRequirementData = VisaDocumentsRequirements::with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'title', 'description')->paginate(10);
        return Inertia::render('Dashboard/VisaService/DocumentRequirements/DocumentRequirementSection', compact('documentRequirementData', 'allCountries', 'allVisaTypes'));
    }

    public function createVisaDocumentsRequirements(Request $request)
    {
        $validated = $request->validate([
            'country_id' => 'required|exists:countries,id',
            'visa_type_id' => 'required|exists:visa_types,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        VisaDocumentsRequirements::create($validated);

        return redirect()->back();
    }

    public function editVisaDocumentsRequirements(Request $request, $id)
    {
        $validated = $request->validate([
            'country_id' => 'required|exists:countries,id',
            'visa_type_id' => 'required|exists:visa_types,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);
        $visaDocumentsRequirements = VisaDocumentsRequirements::find($id);
        $visaDocumentsRequirements->update($validated);

        return redirect()->back();
    }

    public function deleteVisaDocumentsRequirements($id)
    {
        VisaDocumentsRequirements::find($id)->delete();
        return redirect()->back();
    }

    public function createImportantDocumentsInformation(Request $request)
    {
        // dd($request->all());
        $validated = $request->validate([
            'country_id' => 'required|exists:countries,id',
            'visa_type_id' => 'required|exists:visa_types,id',
            'remarks' => 'required|string',
            'description' => 'required|string',
        ]);

        ImportantDocumentInfo::create($validated);

        return redirect()->back();
    }

    public function editImportantDocumentsInformation(Request $request, $id)
    {
        $validated = $request->validate([
            'country_id' => 'required|exists:countries,id',
            'visa_type_id' => 'required|exists:visa_types,id',
            'remarks' => 'required|string',
            'description' => 'required|string',
        ]);

        $importantDocumentInfo = ImportantDocumentInfo::find($id);
        $importantDocumentInfo->update($validated);

        return redirect()->back();
    }

    public function deleteImportantDocumentsInformation($id)
    {
        ImportantDocumentInfo::find($id)->delete();
        return redirect()->back();
    }
}
