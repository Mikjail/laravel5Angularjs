<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/products/{id?}',['middleware' => 'cors', 
    'uses' => 'Products@index']);

Route::get('/productsType/{id?}',['middleware' => 'cors', 
    'uses' => 'ProductsType@index']);

// Route::post('/products', 'Products@store');
// Route::post('/products/{id}', 'Products@update');
// Route::delete('/products/{id}', 'Products@destroy');