<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

use App\Http\Controllers\ProdutoController;
Route::resource('produto',ProdutoController::class);

use App\Http\Controllers\ApiClientController;
Route::apiResource('cliente',ApiClientController::class);