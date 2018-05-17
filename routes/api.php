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

//获取产品分类
Route::get('goods_type','GoodsController@goods_type');

//获取分类下的产品
Route::get('goods_types/{id}','GoodsController@type_goods');

//获取产品详情
Route::get('goods/{good}','GoodsController@show');

//获取产品SKU
Route::get('goods/sku/{id}','GoodsController@goods_sku');

Route::group([
    'middleware' => 'jwt_auth',
], function () {

    // 获取当前登录的用户信息
    Route::get('members/info', 'MembersController@info');

    //发送短信验证码
    Route::any('members/bound_phone','MembersController@bound_phone');

    //check短信验证码&更改用户状态
    Route::any('members/check_phone','MembersController@check_phone');

    //收藏产品
    Route::any('members/collect_goods','MembersController@collect_goods');

    //取消收藏产品
    Route::any('members/uncollect_goods','MembersController@uncollect_goods');

    //生成订单
    Route::any('orders/store','OrdersController@store');


});


Route::fallback(function () {
    return response()->json(['message' => 'The route no\'t define'], 404);
});