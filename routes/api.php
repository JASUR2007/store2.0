<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });



Route::get('/services', function () {
    $table = DB::table('services')->where("deleted_at",null)->get();   
    return json_encode(['status' => 'ok','services' => $table]);    
});
Route::get('/blog', function () {
    $table = DB::table('blog')->where("deleted_at",null)->get();   
    return json_encode(['status' => 'ok','blog' => $table]);    
});
Route::get('/recomend', function () {
    $table = DB::table('recomendation')->where("deleted_at",null)->get();   
    return json_encode(['status' => 'ok','recomendation' => $table]);    
});
Route::get('/brand', function () {
    $table = DB::table('brand')->where("deleted_at",null)->get();   
    return json_encode(['status' => 'ok','brand' => $table]);    
});
Route::get('/readmore_blog/{id}', function ($id) {
    return view('readmore_blog');
});
Route::get('/blog/{id}', function ($id) {

    $check = DB::table('blog')->where('id',$id)->first();

    return json_encode(["blogs"=> $check]);
});
Route::get('/brand/{id}', function ($id) {

    $table = DB::table('brand')->where('id',$id)->get();   
    return json_encode(['status' => 'ok','brand' => $table]);    
});





