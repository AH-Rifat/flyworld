<?php

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

Route::get('/visa-service', function () {
    return inertia('VisaService/VisaService');
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
    });
});
