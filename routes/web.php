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
        Route::get('/create-visa-type-country-name', 'visaTypeCountryList')->name('create-visa-type-country-name');
        Route::post('/create-country', 'createCountry')->name('create-country');
        Route::put('/edit-country/{id}', 'editCountry')->name('edit-country');
        Route::delete('/delete-country/{id}', 'deleteCountry')->name('delete-country');
    });
});
