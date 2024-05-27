<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
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








Route::get('/', function () {
    return view('themain');
})->middleware('auth');
Route::get('/home', function () {
    return view('HOME');
});
Route::get('/blogs', function () {
    return view('BLOG');
});
Route::get('/contact', function () {
    return view('CONTACT');
});
Route::get('/portfolio', function () {
    return view('Portfolio');
});
Route::get('/login', function () {
    return view('register');
});




Route::post('/create-service', function (Request $request) {
    DB::table('services') ->insert([
        'title' => request('title'),
        'info' => request("info"),  
        'image' => request("images"),   
    ]);
    return json_encode(['status' => 'ok']);    
})->middleware('auth');
Route::post('/create-blog', function (Request $request) {
    DB::table('blog') ->insert([
        'title' => request('title'),
        'info' => request("info"), 
        'image' => request("images"),   
        'category' => request("category"),
    ]);
    return json_encode(['status' => 'ok']);    
})->middleware('auth');
Route::post('/create-recomend', function (Request $request) {
    DB::table('recomendation') ->insert([
        'title' => request('title'),
        'info' => request("info"), 
        'rate' => request("rate"),
    ]);
    return json_encode(['status' => 'ok']);    
})->middleware('auth');
Route::post('/create-brand', function (Request $request) {
    DB::table('brand') ->insert([
        'image' => request("images"), 
    ]);
    return json_encode(['status' => 'ok']);    
})->middleware('auth');


Route::post('/upload-img', function (Request $request) {
    $link = $request->file('photo')->store('products');
    return json_encode(['status' => 'ok', "data" => $link]);  
})->middleware('auth');

Route::post('/update-product', function () {
    DB::table('services')->where('id',request('id'))->update([
        "updated_at"=> Carbon::now(),
        'title' => request('title'),
        'info' => request("info"), 
        'image' => request("images"), 
    ]);
    return json_encode(['status' => 'ok!']);
})->middleware('auth');
Route::post('/update-blog', function () {
    DB::table('blog')->where('id',request('id'))->update([
        "updated_at"=> Carbon::now(),
        'title' => request('title'),
        'info' => request("info"), 
        'image' => request("images"),   
        'category' => request("category"),
    ]);
    return json_encode(['status' => 'ok!']);
})->middleware('auth');
Route::post('/update-recomendation', function () {
    DB::table('recomendation')->where('id',request('id'))->update([
        "updated_at"=> Carbon::now(),
        'title' => request('title'),
        'info' => request("info"), 
        'rate' => request("rate"), 
    ]);
    return json_encode(['status' => 'ok!']);
})->middleware('auth');
Route::post('/update-brand', function () {
    DB::table('brand')->where('id',request('id'))->update([
        "updated_at"=> Carbon::now(),
        'image' => request("images"), 
    ]);
    return json_encode(['status' => 'ok!']);
})->middleware('auth');


Route::get('/services/{id}', function ($id) {

    $table = DB::table('services')->where('id',$id)->get();   
    return json_encode(['status' => 'ok','products' => $table]);    
});
Route::get('/blog/{id}', function ($id) {

    $table = DB::table('blog')->where('id',$id)->get();   
    return json_encode(['status' => 'ok','blogs' => $table]);    
})->middleware('auth');
Route::get('/recomend/{id}', function ($id) {

    $table = DB::table('recomendation')->where('id',$id)->get();   
    return json_encode(['status' => 'ok','recomend' => $table]);    
});




Route::post('/delete-service', function () {
     DB::table('services')->where('id',request("id"))->update([
        "deleted_at" => Carbon::now()
     ]);
    return json_encode(['status' => 'deleted!']);  
})->middleware('auth');
Route::post('/delete-blog', function () {
    DB::table('blog')->where('id',request("id"))->update([
       "deleted_at" => Carbon::now()
    ]);
   return json_encode(['status' => 'deleted!']);  
})->middleware('auth');
Route::post('/delete-recomend', function () {
    DB::table('recomendation')->where('id',request("id"))->update([
       "deleted_at" => Carbon::now()
    ]);
   return json_encode(['status' => 'deleted!']);  
})->middleware('auth');
Route::post('/delete-brand', function () {
    DB::table('brand')->where('id',request("id"))->update([
       "deleted_at" => Carbon::now()
    ]);
   return json_encode(['status' => 'deleted!']);  
})->middleware('auth');


Route::post('/reg_save', function (Request $request) {
    DB::table('users') ->insert([
        'name' => request('name'),
        'surname' => request("surname"), 
        'email' => request("email"),   
        'password' => request("password"),   
    ]);
    return json_encode(['status' => 'ok']);    
});
Route::post('/login', function () {

    $check = DB::table('users')->where('email',request("email"))->where('password',request("password"))->exists();

    if($check) {
        $user = DB::table('users')->where('email',request("email"))->where('password',request("password"))->first();

        Auth::loginUsingId($user->id);

  
}

    return response()->json([
        "status" => $check ? "ok" : "none"
    ]);

})->name('login');
Route::post('/logout-system', function () {

   Auth::logout();

   return redirect()->to('/login');

})->middleware('auth');




Route::post('/deleteimg', function () {
    $blog = DB::table('services')->where('id',request('id'))->first();
    $arr = json_decode($blog->image);

    array_splice($arr , request('index'));
    DB::table('services')->where('id',request('id'))->update([
        'image' => json_encode($arr)
    ]);

    return json_encode(["status"=> 'Deleted']);
})->middleware('auth');
Route::post('/deleteimg_recomend', function () {
    $blog = DB::table('recomendation')->where('id',request('id'))->first();
    $arr = json_decode($blog->image);

    array_splice($arr , request('index'));
    DB::table('recomendation')->where('id',request('id'))->update([
        'image' => json_encode($arr)
    ]);

    return json_encode(["status"=> 'Deleted']);
})->middleware('auth');
Route::post('/deleteimg_blog', function () {
    $blog = DB::table('blog')->where('id',request('id'))->first();
    $arr = json_decode($blog->image);

    array_splice($arr , request('index'));
    DB::table('blog')->where('id',request('id'))->update([
        'image' => json_encode($arr)
    ]);

    return json_encode(["status"=> 'Deleted']);
})->middleware('auth');
Route::post('/deleteimg_brand', function () {
    $blog = DB::table('brand')->where('id',request('id'))->first();
    $arr = json_decode($blog->image);

    array_splice($arr , request('index'));
    DB::table('brand')->where('id',request('id'))->update([
        'image' => json_encode($arr)
    ]);

    return json_encode(["status"=> 'Deleted']);
})->middleware('auth');


Route::get('/blog/{id}', function ($id) {

    $check = DB::table('blog')->where('id',$id)->first();

    return json_encode(["blogs"=> $check]);
    });


Route::get('/{any}', function() {
    return view('themain');
})->where('any','.*');