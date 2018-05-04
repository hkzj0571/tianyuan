<?php

Route::get('/','PagesController@index')->name('index');

Route::get('contact','PagesController@contact')->name('contact');

Route::get('pages/{page}','PagesController@show')->name('pages');

Route::get('products','ProductsController@index')->name('products');
Route::get('products/{product}','ProductsController@show')->name('products.show');