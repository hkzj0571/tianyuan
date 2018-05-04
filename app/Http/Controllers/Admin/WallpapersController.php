<?php

namespace App\Http\Controllers\Admin;

use App\Models\Wallpaper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WallpapersController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$wallpapers = Wallpaper::paginate(10);
		return view('admin.wallpapers.index', compact('wallpapers'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		return view('admin.wallpapers.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		try {
			$needs = $this->validator('admin.wallpapers.store');
		} catch (ValidatorException $exception) {
			return failed($exception->getMessage());
		}

		Wallpaper::create($needs);
		return succeed('添加壁纸成功。');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit(Wallpaper $wallpaper)
	{
		return view('admin.wallpapers.edit', compact('wallpaper'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @param  int $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Wallpaper $wallpaper)
	{
		try {
			$needs = $this->validator('admin.wallpapers.update');
		} catch (ValidatorException $exception) {
			return failed($exception->getMessage());
		}

		$wallpaper->update($needs);
		return succeed('此壁纸已更新。');
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Wallpaper $wallpaper)
	{
		$wallpaper->delete();
		return succeed('删除壁纸成功。');
	}
}
