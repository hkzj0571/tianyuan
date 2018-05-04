<?php

namespace App\Http\Controllers\Admin;

use App\Models\Banner;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $banners = Banner::paginate(10);
        return view('admin.banner.index', compact('banners'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.banner.create');
    }


    public function store(Request $request)
    {
        try {
            $needs = $this->validator('admin.banner.store');
        } catch (ValidatorException $exception) {
            return failed($exception->getMessage());
        }

        Banner::create($needs);

        return succeed('添加轮播成功。');
    }

    public function edit(Banner $banner)
    {
        return view('admin.banner.edit',compact('banner'));
    }

    public function update(Request $request,Banner $banner)
    {
        try {
            $needs = $this->validator('admin.banner.store');
        } catch (ValidatorException $exception) {
            return failed($exception->getMessage());
        }
        $banner->update($needs);
        return succeed('更新轮播成功。');
    }

    public function destroy(Banner $banner)
    {
        $banner->delete();
        return succeed('删除轮播成功。');
    }


}
