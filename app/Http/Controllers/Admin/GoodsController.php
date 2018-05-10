<?php

namespace App\Http\Controllers\Admin;

use App\Models\Banner;
use App\Models\Goods;
use App\Models\Goods_sku;
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
        $goods = [
            'title' => $needs['title'],
            'mini_classify_id' => $needs['mini_classify_id'],
            'address' => $needs['address'],
            'image' => $needs['image'],
            'intro' => $needs['intro'],
            'more' => $needs['more'],
            'is_shelve' => $needs['is_shelve'],
        ];
        $res = Goods::create($goods);

        $sku = [
          'goods_id' => $res->id,
            'sku_name' => '默认套餐',
            'price' => $needs['price'],
            'kid_price' => $needs['kid_price']
        ];
        Goods_sku::create($sku);


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
//        $res = Goods_sku::where('goods_id',$good->id)->first();
//        if ($res!=null)
//        {
            Goods_sku::where('goods_id',$good->id)->delete();
        Banner::where('goods_id',$good->id)->delete();
//        }
        $good->delete();
        return succeed('删除产品成功。');
    }

}
