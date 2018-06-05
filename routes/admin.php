<?php

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

Route::name('admin.')->group(function() {

    Route::prefix('auth')->group(
        function($router) {
            $router->view('login', 'admin.auths.login')->name('auth.login');
            $router->post('login', 'AuthController@login')->name('auth.login');
            $router->get('logout', 'AuthController@logout')->name('auth.logout');
        }
    );

    // 这条路由，谁动砍谁 2018年03月14日23:11:24
    Route::post('/upload', 'UploadController@upload')->name('upload');

    Route::middleware('authentication')->group(
        function($router) {


            $router->get('/', 'IndexController@index')->name('index');
            $router->get('/clear', 'IndexController@clear')->name('clear');

            $router->resource('menus', 'MenusController');

            $router->delete('permissions/batch', 'PermissionsController@batch')->name('permissions.batch');
            $router->resource('permissions', 'PermissionsController');

            $router->delete('roles/batch', 'RolesController@batch')->name('roles.batch');
            $router->resource('roles', 'RolesController');

            $router->delete('users/batch', 'UsersController@batch')->name('users.batch');
            $router->resource('users', 'UsersController');

	        $router->resource('pages', 'PagesController');
	        $router->resource('wallpapers', 'WallpapersController');
	        $router->resource('products', 'ProductsController');

            $router->any('mini_classify/batch','Mini_classifyController@batch')->name('miniclassify.batch');
	        $router->resource('mini_classify','Mini_classifyController');
//            $router->delete('mini_classify/batch','Mini_classifyController@batch')->name('mini_classify.batch');

            $router->delete('goods/batch', 'GoodsController@batch')->name('goods.batch');
            $router->resource('goods', 'GoodsController');

            $router->delete('banner/batch', 'BannerController@batch')->name('banner.batch');
            $router->resource('banner', 'BannerController');

            $router->resource('members', 'MembersController');

            $router->resource('coupons', 'CouponsController');


            $router->resource('keywords', 'KeywordsController');
            $router->resource('orders', 'OrdersController');

            // 课程目录设置
            $router->get('goods/{good}/sku', 'Goods_skuController@index')->name('goods.sku.index');
            $router->get('goods/{good}/sku/create', 'Goods_skuController@create')->name('goods.sku.create');
            $router->post('goods/{good}/sku', 'Goods_skuController@store')->name('goods.sku.store');
            $router->get('goods/{good}/sku/{sku}/edit', 'Goods_skuController@edit')->name('goods.sku.edit');
            $router->put('goods/{good}/sku/{sku}', 'Goods_skuController@update')->name('goods.sku.update');
            $router->delete('goods/{good}/sku/{sku}', 'Goods_skuController@destroy')->name('goods.sku.destroy');

        }
    );
});
