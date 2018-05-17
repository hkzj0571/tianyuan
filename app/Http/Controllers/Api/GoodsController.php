<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\GoodsResource;
use App\Models\Goods;
use App\Models\Goods_sku;
use App\Models\Mini_classify;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;

class GoodsController extends Controller
{
    /**
     * 首页所有产品
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return bake([
            'goods' => GoodsResource::collection(
                Goods::where('is_shelve', true)->with('type')->get()
            ),
        ]);
    }

    /**
     * 产品所有分类
     * @return \Illuminate\Http\JsonResponse
     */
    public function goods_type()
    {
        return bake([
            Mini_classify::all()
        ]);
    }

    public function type_goods($id)
    {
//        $goods =  Goods::where('mini_classify_id',$id)->get();
//        return bake([$goods->toResource()]);
        return bake([
            'goods' => GoodsResource::collection(
                Goods::where('mini_classify_id', $id)->get()
            )
        ]);
    }

    /**
     * 产品详情
     * @param Goods $good
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Goods $good)
    {
        return bake([
            $good->toResource()
        ]);
    }

    public function goods_sku($id)
    {
        return bake([
            Goods_sku::where('goods_id',$id)->get()
        ]);
    }
}
