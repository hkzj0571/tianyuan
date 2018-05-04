<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Product;
use App\Models\Wallpaper;
use Illuminate\Http\Request;

class PagesController extends Controller
{
	public function index()
	{
		$wallpapers = Wallpaper::orderBy('sort','desc')->get();
		$products = Product::limit(3)->get();
		return view('pages.index',compact('wallpapers','products'));
    }

	public function contact()
	{
		return view('pages.contact');
    }

	public function show(Page $page)
	{
		return view('pages.show',compact('page'));
    }
}
