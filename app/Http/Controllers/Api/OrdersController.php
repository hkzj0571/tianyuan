<?php

namespace App\Http\Controllers\Api;

use App\Models\Coupon;
use App\Models\Goods;
use App\Models\Goods_sku;
use App\Models\Members;
use App\Models\Members_coupons;
use App\Models\Orders;
use App\Models\Orders_sku;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use function EasyWeChat\Kernel\Support\generate_sign;

class OrdersController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \App\Exceptions\ValidatorException
     */
    public function store(Request $request)
    {
//        if (!member()->user()->bind_mobile) {
//            return bake([], '用户未绑定手机号码，无法下单', '202');
//        }
        $needs = $this->validator('api.order');
        $goods_id = $needs['goods_id'];
        $cars = $needs['data'];
        $members_coupons_id = $needs['members_coupons_id'];
        $goods = Goods::find($goods_id);

        $cut = $this->check_cut_price($members_coupons_id);
        // begin tran
        DB::beginTransaction();

        $order = Orders::create([
            'no' => date('YmdHis', time()) . member()->user()->id,
            'body' => '天缘 ' . $goods->title . ' - ' . '购买订单',
            'members_id' => member()->user()->id,
            'goods_id' => $goods_id,
            'coupons_id' => $members_coupons_id,
            'price' => $this->getTotal($cars)-$cut,
        ]);
        if (!$order) {
            DB::rollBack();
            return bake([], '服务器异常，请稍后再试', '203');
        }

        $order_detail_data = [
            'orders_id' => $order->id,
            'goods_sku_id' => $cars['sku_id'],
            'adult' => $cars['adult'],
            'kids' => $cars['kids'],
            'date' => $needs['play_date'],
            'user_name' => $needs['user_name'],
            'user_phone' => $needs['user_phone'],
        ];

        if (!Orders_sku::insert($order_detail_data)) {
            DB::rollBack();
            return bake([], '服务器异常，请稍后再试', '203');
        }
        DB::commit();
        return bake(['order' => $order->toResource()]);
    }

    private function check_cut_price($members_coupons_id)
    {
        if ($members_coupons_id == '0'){
            $cut_price = 0;
        }else{
            $members_coupons = Members_coupons::find($members_coupons_id);
            if (!$members_coupons){
                return bake([], '请不要搞事情，ojbk？', '204');
            }
            if (member()->user()->id !== $members_coupons->members_id) {
                return bake([], '非当前用户优惠券，无法进行支付操作', '204');
            }
            if ($members_coupons->status == true) {
                return bake([], '该优惠券已使用', '204');
            }
            if (!$coupon = Coupon::find($members_coupons->coupons_id)){
                return bake([], '已无此优惠券', '204');
            }
            $cut_price = $coupon->cut_price;
        }
        return $cut_price;
    }


    /**
     * @param $cars
     *
     * @return int
     */
    private function getTotal($cars)
    {
        $total = 0;
//        foreach ($cars as $car) {
////            $kids = (is_null($car['kids']) & isset($car['kids']))?$car['kids']:'0';
//            $product = Goods_sku::find($car['sku_id']);
//            $total += $car['adult'] * $product['price'] + $car['kids'] * $product['kid_price'];
//        }
        $product = Goods_sku::find($cars['sku_id']);
        $total = $cars['adult'] * $product['price'] + $cars['kids'] * $product['kid_price'];
        return $total;
    }

    public function pay(Request $request, Orders $orders)
    {
        if (member()->user()->id !== $orders->members_id) {
            return bake([], '非当前用户订单，无法进行支付操作', '204');
        }

        if ($orders->is_payed) {
            return bake([], '此订单已支付过，无需重新支付', '205');
        }


        $result = \EasyWeChat::payment()->order->unify([
            'body' => $orders->body,
            'out_trade_no' => $orders->no,
            'total_fee' => '100',
            'trade_type' => 'JSAPI',
            'openid' => member()->user()->openid,
        ]);


        // 如果成功生成统一下单的订单，那么进行二次签名
        if ($result['return_code'] === 'SUCCESS') {
            // 二次签名的参数必须与下面相同
            $params = [
//                'appId'     => 'wx09b2bbf8d9781472',
                'timeStamp' => time(),
                'nonceStr'  => $result['nonce_str'],
                'package'   => 'prepay_id=' . $result['prepay_id'],
                'signType'  => 'MD5',
            ];

            // config('wechat.payment.default.key')为商户的key
            $params['paySign'] = generate_sign($params, config('wechat.payment.default.key'));

            return $params;
        } else {
            return $result;
        }
    }




//    public function store(Request $request)
//    {
//        if (!member()->user()->bind_mobile) {
//            return bake([], '用户未绑定手机号码，无法下单', '202');
//        }
//        $needs = $this->validator('api.order');
//        $goods_id = $needs['goods_id'];
//
//        $cars = $needs['date'];
//
//        $goods = Goods::find($goods_id);
//
//        // begin tran
//        DB::beginTransaction();
//
//        $order = Orders::create([
//            'no' => date('YmdHis', time()) . member()->user()->id,
//            'body' => '天缘 ' . $goods->title . ' - ' . '购买订单',
//            'members_id' => member()->user()->id,
//            'goods_id' => $goods_id,
//            'price' => $this->getTotal($cars),
//        ]);
//        if (!$order) {
//            DB::rollBack();
//            return bake([], '服务器异常，请稍后再试', '203');
//        }
//
//        $order_detail_data = [];
//        foreach ($cars as $car) {
//            $order_detail_data[] = [
//                'orders_id' => $order->id,
//                'goods_sku_id' => $car['sku_id'],
//                'adult' => $car['adult'],
//                'kids' => $car['kids'],
//            ];
//        }
//
//        if (!Orders_sku::insert($order_detail_data)) {
//            DB::rollBack();
//            return bake([], '服务器异常，请稍后再试', '203');
//        }
//        DB::commit();
//        return bake(['order' => $order->toResource()]);
//    }


    public function test()
    {
        return $cut = $this->check_cut_price('3');
    }

}
