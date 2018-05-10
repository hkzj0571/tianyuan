<?php

namespace App\Http\Controllers\Admin;

use App\Models\Goods;
use App\Models\Mini_classify;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GoodsController extends Controller
{
    public function index()
    {
        $goods = Goods::paginate(10);
        return view('admin.goods.index',compact('goods'));
    }

    public function create(Request $request)
    {
        $types = Mini_classify::all();
        return view('admin.goods.create',compact('types'));
    }

    public function store(Request $request)
    {
//        return response($request->all());
        try {
            $needs = $this->validator('admin.goods.store');
        } catch (ValidatorException $exception) {
            return failed($exception->getMessage());
        }
        Goods::create($needs);
        return succeed('添加产品成功。');
    }

    public function edit(Goods $good)
    {
        $goods = $good;
        $types = Mini_classify::all();
        return view('admin.goods.edit',compact('goods','types'));
    }

    public function update(Request $request,Goods $good)
    {
        try {
            $needs = $this->validator('admin.goods.store');
        } catch (ValidatorException $exception) {
            return failed($exception->getMessage());
        }

        $good->update($needs);
        return succeed('更新产品成功。');
    }

    public function destroy(Goods $good)
    {
        $good->delete();
        return succeed('删除产品成功。');
    }

}
