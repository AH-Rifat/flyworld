<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
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

class VisaServiceController extends Controller
{
    public function visaServicePage()
    {
        $allCountries = Country::latest()->select('id', 'country_name')->get();
        $getVisaTypeFromDescriptionData = VisaTypeDescription::with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id')->get();
        $impotantDocumentInfo = ImportantDocumentInfo::with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'description', 'remarks')->get();

        return Inertia::render('VisaService/VisaService', compact('allCountries', 'getVisaTypeFromDescriptionData', 'impotantDocumentInfo'));
    }

    public function getVisaServiceData(Request $request)
    {
        $allCountries = Country::latest()->select('id', 'country_name')->get();
        $getVisaTypeFromDescriptionData = VisaTypeDescription::with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id')->get();
        $impotantDocumentInfo = ImportantDocumentInfo::with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'description', 'remarks')->get();

        $visaTypeDescription = VisaTypeDescription::where('country_id', $request->country_id)->where('visa_type_id', $request->visa_type_id)->with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'description')->get();
        $elegibilitys = Eligibility::where('country_id', $request->country_id)->where('visa_type_id', $request->visa_type_id)->with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'eligibility_content')->first();
        $beforeDepartureRequirments = BeforeDepartureRequirements::where('country_id', $request->country_id)->where('visa_type_id', $request->visa_type_id)->with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'before_departure_requirements')->first();
        $remarks = Remark::where('country_id', $request->country_id)->where('visa_type_id', $request->visa_type_id)->with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'remarks')->first();
        $visaFeeAndServiceCharge = FeeAndServiceCharges::where('country_id', $request->country_id)->where('visa_type_id', $request->visa_type_id)->with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'fee_and_service_charges')->first();
        $visaProcessingTime = VisaProcessingTime::where('country_id', $request->country_id)->where('visa_type_id', $request->visa_type_id)->with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'processing_time')->first();
        $importantContact = ImportantContactAndLink::where('country_id', $request->country_id)->where('visa_type_id', $request->visa_type_id)->with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'title', 'address', 'email', 'phone', 'office_hours')->get();
        $sampleDocumentsAndPhoto = SampleDocumentsAndPhotos::where('country_id', $request->country_id)->where('visa_type_id', $request->visa_type_id)->with(['country', 'visaType'])->latest()->select('id', 'country_id', 'visa_type_id', 'title', 'image')->get();
        $documentsRequirements = VisaDocumentsRequirements::where('country_id', $request->country_id)->where('visa_type_id', $request->visa_type_id)->with(['country', 'visaType'])->select('id', 'country_id', 'visa_type_id', 'title', 'description')->get();

        return Inertia::render('VisaService/VisaService', compact('allCountries', 'getVisaTypeFromDescriptionData', 'impotantDocumentInfo',  'visaTypeDescription', 'elegibilitys', 'beforeDepartureRequirments', 'remarks', 'visaFeeAndServiceCharge', 'visaProcessingTime', 'importantContact', 'sampleDocumentsAndPhoto', 'documentsRequirements'));
    }

    public function refundPolicy()
    {
        return Inertia::render('RefundPolicy/RefundPolicyPage');
    }
}
