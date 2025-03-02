<?php

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
});
