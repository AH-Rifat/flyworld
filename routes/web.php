<?php

use App\Http\Controllers\Frontend\VisaServiceController as FrontendVisaServiceController;
use App\Http\Controllers\VisaServiceController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/about-us', function () {
    return inertia('AboutUs/AboutUs');
});

Route::get('/tourist-packages', function () {
    return inertia('TouristPackages/TouristPackage');
});

Route::controller(FrontendVisaServiceController::class)->group(function () {
    Route::get('/visa-service', 'visaServicePage')->name('visa-service-page');
    Route::post('/visa-service', 'getVisaServiceData')->name('get-visa-service-data');
    Route::get('/refund-policy', 'refundPolicy')->name('refund-policy');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return inertia('Dashboard/Dashboard');
    })->name('dashboard');

    Route::get('/profile', function () {
        return inertia('Dashboard/Profile');
    })->name('profile');

    Route::get('/change-password', function () {
        return inertia('Dashboard/ChangePassword');
    })->name('change-password');

    Route::controller(VisaServiceController::class)->group(function () {
        // all countries routes
        Route::get('/get-all-countries', 'getAllCountryData')->name('get-all-countries');
        Route::get('/create-visa-type-country-name', 'visaTypeCountryList')->name('create-visa-type-country-name');
        Route::post('/create-country', 'createCountry')->name('create-country');
        Route::put('/edit-country/{id}', 'editCountry')->name('edit-country');
        Route::delete('/delete-country/{id}', 'deleteCountry')->name('delete-country');

        // all visas type routes
        Route::post('/create-visa-type', 'createVisaType')->name('create-visa-type');
        Route::put('/edit-visa-type/{id}', 'editVisaType')->name('edit-visa-type');
        Route::delete('/delete-visa-type/{id}', 'deleteVisaType')->name('delete-visa-type');

        // all visa type discription routes
        Route::post('/create-visa-type-description', 'createVisaTypeDescription')->name('create-visa-type-description');
        Route::put('/edit-visa-type-description/{id}', 'editVisaTypeDescription')->name('edit-visa-type-description');
        Route::delete('/delete-visa-type-description/{id}', 'deleteVisaTypeDescription')->name('delete-visa-type-description');

        // all visa remarks routes
        Route::post('/create-remarks', 'createRemarks')->name('create-remarks');
        Route::put('/edit-remarks/{id}', 'editRemarks')->name('edit-remarks');
        Route::delete('/delete-remarks/{id}', 'deleteRemarks')->name('delete-remarks');

        // all Eligibility to Apply for Visa routes
        Route::post('/create-eligibility', 'createEligibility')->name('create-eligibility');
        Route::put('/edit-eligibility/{id}', 'editEligibility')->name('edit-eligibility');
        Route::delete('/delete-eligibility/{id}', 'deleteEligibility')->name('delete-eligibility');

        // all visa processing time routes
        Route::post('/create-visa-processing-time', 'createVisaProcessingTime')->name('create-visa-processing-time');
        Route::put('/edit-visa-processing-time/{id}', 'editVisaProcessingTime')->name('edit-visa-processing-time');
        Route::delete('/delete-visa-processing-time/{id}', 'deleteVisaProcessingTime')->name('delete-visa-processing-time');

        // all before departure requirements routes
        Route::post('/create-before-departure-requirements', 'createBeforeDepartureRequirements')->name('create-before-departure-requirements');
        Route::put('/edit-before-departure-requirements/{id}', 'editBeforeDepartureRequirements')->name('edit-before-departure-requirements');
        Route::delete('/delete-before-departure-requirements/{id}', 'deleteBeforeDepartureRequirements')->name('delete-before-departure-requirements');

        // all visa fees and service charges routes
        Route::post('/create-fee-and-service-charges', 'createFeeAndServiceCharges')->name('create-fee-and-service-charges');
        Route::put('/edit-fee-and-service-charges/{id}', 'editFeeAndServiceCharges')->name('edit-fee-and-service-charges');
        Route::delete('/delete-fee-and-service-charges/{id}', 'deleteFeeAndServiceCharges')->name('delete-fee-and-service-charges');

        //sample documents and photo section routes
        Route::get('/get-sample-documents-and-photos', 'getSampleDocumentsAndPhotos')->name('sample-documents-and-photos');
        Route::post('/create-sample-documents-and-photos', 'createSampleDocumentsAndPhotos')->name('create-sample-documents-and-photos');
        Route::post('/update-sample-documents-and-photos/{id}', 'editSampleDocumentsAndPhotos')->name('edit-sample-documents-and-photos');
        Route::delete('/delete-sample-documents-and-photos/{id}', 'deleteSampleDocumentsAndPhotos')->name('delete-sample-documents-and-photos');

        // Important contact and links routes
        Route::get('/get-important-contact-and-links', 'getImportantContactAndLinks')->name('get-important-contact-and-links');
        Route::post('/create-important-contact-and-links', 'createImportantContactAndLinks')->name('create-important-contact-and-links');
        Route::put('/edit-important-contact-and-links/{id}', 'editImportantContactAndLinks')->name('edit-important-contact-and-links');
        Route::delete('/delete-important-contact-and-links/{id}', 'deleteImportantContactAndLinks')->name('delete-important-contact-and-links');

        // visa documents requirements routes
        Route::get('/get-visa-documents-requirements', 'getVisaDocumentsRequirements')->name('get-visa-documents-requirements');
        Route::post('/create-visa-documents-requirements', 'createVisaDocumentsRequirements')->name('create-visa-documents-requirements');
        Route::put('/edit-visa-documents-requirements/{id}', 'editVisaDocumentsRequirements')->name('edit-visa-documents-requirements');
        Route::delete('/delete-visa-documents-requirements/{id}', 'deleteVisaDocumentsRequirements')->name('delete-visa-documents-requirements');
    });
});
