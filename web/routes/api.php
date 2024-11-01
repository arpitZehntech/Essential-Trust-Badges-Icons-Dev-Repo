<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BadgeController;
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

Route::get('/', function () {
    return "Hello API";
});

// API routes for badges
Route::get('/badges', [BadgeController::class, 'index']);
Route::post('/badges', [BadgeController::class, 'store']);
Route::put('/badges/{id}', [BadgeController::class, 'update']);
Route::delete('/badges/{id}', [BadgeController::class, 'destroy']); // Add this line for delete
Route::get('/badges/{id}', [BadgeController::class, 'show']);
// Route::get('/badges/last-created', [BadgeController::class, 'getLastCreatedBadge']);
