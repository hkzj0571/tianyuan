<?php

namespace App\Http\Controllers\Api;

use App\Models\Goods;
use App\Models\Goods_sku;
use App\Models\Orders;
use App\Models\Orders_sku;
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

//        $cars = [
//            [
//                'sku_id'     => '2',
//                'adult' => '1',
//                'kids'     => '1',
//            ],
//            [
//                'sku_id'     => '2',
//                'adult' => '1',
//                'kids'     => '1',
//            ],
//        ];

        $cars = $needs['date'];

        $goods = Goods::find($goods_id);

        $order  = Orders::create([
            'no' => date('YmdHis', time()) . member()->user()->id,
            'body' => '天缘 ' . $goods->title . ' - ' . '购买订单',
            'members_id' => member()->user()->id,
            'goods_id' => $goods_id,
            'price' => $this->getTotal($cars),
        ]);


        $order_detail_data = [];
        foreach ($cars as $car) {
            $order_detail_data[] = [
                'orders_id' => $order->id,
                'goods_sku_id' => $car['sku_id'],
                'adult' => $car['adult'],
                'kids' => $car['kids'],
            ];
        }
        Orders_sku::insert($order_detail_data);
        return bake(['order' => $order->toResource()]);
    }



    /**
     * @param $request
     * @param $cars
     *
     * @return array
     */
//    private function formatOrderData($cars)
//    {
//
//        $body = '天缘 ' . $goods->title . ' - ' . '购买订单';
//        $no = date('YmdHis', time()) . member()->user()->id;
//        $total = $this->getTotal($cars);
//        $members_id = member()->user()->id;
//        return compact('total', 'no','members_id','body');
//    }

    /**
     * @param $cars
     *
     * @return int
     */
    private function getTotal($cars)
    {
        $total = 0;
        foreach ($cars as $car) {
//            $kids = (is_null($car['kids']) & isset($car['kids']))?$car['kids']:'0';
            $product = Goods_sku::find($car['sku_id']);
            $total += $car['adult'] * $product['price'] + $car['kids'] * $product['kid_price'];
        }
        return $total;
    }



}
