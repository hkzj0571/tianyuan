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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group(['prefix' => 'auth'], function () {
    // 用户登录接口
    Route::any('login', 'AuthController@login');
});

// 获取轮播
Route::get('banner','BannerController@index');

// 获取产品
Route::get('goods','GoodsController@index');

Route::fallback(function () {
    return response()->json(['message' => 'The route no\'t define'], 404);
});