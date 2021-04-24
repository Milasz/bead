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
    Route::get('/canvas4', function () {
        return view('canvas4');
    });
}
);

Route::get('/', function () {
    return view('belepes');
});


Route::get('/jatekproba', function () {
    return view('jatekproba');
});

Route::get('/belepes', function(){
    return view('belepes');
}); 

Route::get('/reg', function(){
    return view('reg');
}); 
Route::get('/menu', function(){
    return view('menu');
}); 

Route::get('/reg','App\Http\Controllers\RegController@betoltes'); 
Route::post('/reg','App\Http\Controllers\RegController@letrehoz'); 
Route::post('/','App\Http\Controllers\AuthController@Auth');
Route::post('/belepes','App\Http\Controllers\AuthController@Auth'); 

// Route::get('/regisztracio', 'AuthController@betoltes'); 
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');




Route::get('/canvas5', function () {
    return view('canvas5');
});
Route::get('/canvas3', function () {
    return view('canvas3');
});

Route::get('/mentes', [App\Http\Controllers\MentesController::class, 'mentes']);