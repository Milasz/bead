<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

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
Route::group(['middleware' => ['auth']], function () {
    Route::get('/welcome', function(){
    return view('welcome');
}  
);
}
);

Route::get('/', function () {
    return view('proba');
});


Route::get('/jatekproba', function () {
    return view('jatekproba');
});

Route::get('/belepes', function(){
    return view('belepes');
}); 

Route::post('/belepes','App\Http\Controllers\AuthController@Auth'); 

// Route::get('/regisztracio', 'AuthController@betoltes'); 
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



Route::get('/canvas4', function () {
    return view('canvas4');
});
Route::get('/canvas3', function () {
    return view('canvas3');
});
