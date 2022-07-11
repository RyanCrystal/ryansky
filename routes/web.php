<?php

use App\Models\Listing;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactMeMessageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/listing', function () {
    return view('listing', [
        'heading' => 'This is the heading',
        'listings' => Listing::all()
    ]);
});


Route::post('/', [ContactMeMessageController::class, 'submit']);


Route::get('/restaurant', function () {
    return view('restaurant');
});
