<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/Produto', function () {
    return view('welcome');
});

Route::get('/clientes', function () {
    return ClienteResources::collection(User::all());
});