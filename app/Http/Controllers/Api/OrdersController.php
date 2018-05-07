<?php

namespace App\Http\Controllers\Api;

use App\Models\Goods;
use App\Models\Orders;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrdersController extends Controller
{

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \App\Exceptions\ValidatorException
     */
    public function store(Request $request)
    {
        $needs = $this->validator('api.order');
        $goods_id = $needs['goods_id'];

        $goods = Goods::find($goods_id);
        $order  = Orders::create([
            'no' => date('YmdHis', time()) . member()->user()->id,
            'body' => '天缘 ' . $goods->title . ' - ' . '购买订单',
            'member_id' => member()->user()->id,
            'goods_id' => $goods_id,
            'price' => $goods->price,
        ]);
        return bake(['order' => $order->toResource()]);
    }
}
