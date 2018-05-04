<?php

namespace App\Http\Controllers\Admin;

use App\Models\Page;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Exceptions\ValidatorException;

class PagesController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$pages = Page::paginate(10);
		return view('admin.pages.index', compact('pages'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		return view('admin.pages.create');
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
			$needs = $this->validator('admin.pages.store');
		} catch (ValidatorException $exception) {
			return failed($exception->getMessage());
		}

		Page::create($needs);
		return succeed('添加页面成功。');
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit(Page $page)
	{
		return view('admin.pages.edit', compact('page'));
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @param  int $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Page $page)
	{
		try {
			$needs = $this->validator('admin.pages.update');
		} catch (ValidatorException $exception) {
			return failed($exception->getMessage());
		}

		$page->update($needs);
		return succeed('此页面已更新。');
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Page $page)
	{
		$page->delete();
		return succeed('删除页面成功。');
	}
}
