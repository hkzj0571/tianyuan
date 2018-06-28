<?php

namespace App\Http\Controllers\Api;

use App\Events\GoodsBuyed;
use App\Http\Resources\Orders_mainResourse;
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
use Mrgoon\AliSms\AliSms;

class OrdersController extends Controller
{
    /**
     * 生成订单
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \App\Exceptions\ValidatorException
     */
    public function store(Request $request)
    {
        if (!member()->user()->bind_mobile) {
            return bake([], '用户未绑定手机号码，无法下单', '202');
        }
        $needs = $this->validator('api.order');
        $goods_id = $needs['goods_id'];
        $cars = $needs['data'];
        $members_coupons_id = $needs['members_coupons_id'];
        $goods = Goods::find($goods_id);

        $cut = $this->check_cut_price($members_coupons_id);

        if ($this->getTotal($cars)-$cut < '0'){
            $price = '0.01';
        }else{
            $price = $this->getTotal($cars)-$cut;
        }
        // begin tran
        DB::beginTransaction();

        $order = Orders::create([
            'no' => date('YmdHis', time()) . member()->user()->id,
            'body' => '天缘 ' . $goods->title . ' - ' . '购买订单',
            'members_id' => member()->user()->id,
            'goods_id' => $goods_id,
            'coupons_id' => $members_coupons_id,
            'price' => $price,
        ]);
        if (!$order) {
            DB::rollBack();
            return bake([], '服务器异常，请稍后再试', '203');
        }

        if ($members_coupons_id != '0'){
            $coupons = Members_coupons::find($members_coupons_id);
            $coupons->status = 1;
            $coupons->save();
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


    /**
     * 计算优惠券金额
     * @param $members_coupons_id
     * @return \Illuminate\Http\JsonResponse|int
     */
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
     * 计算总价
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


    /**
     * 支付！
     * @param Request $request
     * @param Orders $orders
     * @return array|\EasyWeChat\Kernel\Support\Collection|\Illuminate\Http\JsonResponse|object|\Psr\Http\Message\ResponseInterface|string
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidConfigException
     */
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
            'total_fee' => $orders->price *100,
            'trade_type' => 'JSAPI',
            'openid' => member()->user()->openid,
        ]);

        // 如果成功生成统一下单的订单，那么进行二次签名
        if ($result['return_code'] === 'SUCCESS') {
            $orders->update(['prepay_id' => $result['prepay_id']]);
            // 二次签名的参数必须与下面相同
            $params = [
                'appId'     => 'wx8395b9772ab76853',
                'timeStamp' => (string) time(),
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


    /**
     * 订单回调
     * @param Request $request
     * @throws \EasyWeChat\Kernel\Exceptions\Exception
     */
    public function notify(Request $request)
    {
        $response = \EasyWeChat::payment()->handlePaidNotify(function ($message, $fail) {
            // find order
            $order = Orders::where('no', $message['out_trade_no'])->first();

            if (! $order || $order->is_payed) { // order not exists or payed
                return true; // message to wechat
            }
            if ($message['return_code'] === 'SUCCESS') {
                // pay success
                if (array_get($message, 'result_code') === 'SUCCESS') {

                    $order->update([
                        'is_payed' => true,
                        'payed_at' => \Carbon\Carbon::now()->toDateTimeString(),
                    ]);

                    $aliSms =  new \Mrgoon\AliSms\AliSms();
                    $send = $aliSms->sendSms($order->member->mobile, 'SMS_136872117', ['code'=> $order->no]);
                    // 购买课程成功，发送模板通知
                    event(new GoodsBuyed($order));
//                    \Log::info('订单:' . $order->id . ' 支付成功');
                    // Pay fail
                } elseif (array_get($message, 'result_code') === 'FAIL') {
                    ## who care?
                }
            } else {
                return $fail('error message');
            }
            return true;
        });

        $response->send(); // return $response;
    }


    /**
     * 订单详情
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function main($id)
    {
        $order = Orders::find($id);
        if (member()->user()->id !== $order->members_id) {
            return bake([], '非当前用户订单，无法进行支付操作', '204');
        }
        return bake([
            'goods' => $this->collect_order($order)
        ]);
    }


    /**
     * 获取用户订单
     * @return \Illuminate\Http\JsonResponse
     */
    public function get_members_orders()
    {
        $orderes = Orders::where('members_id',member()->user()->id)->with('goods')->orderBy('id', 'DESC')->get();


        $orders = [];
        foreach ($orderes as $order) {
            if ($order->coupons_id != '0'){
                $coupons = [
                    'coupons_id' => $order->coupons_id,
                    'cpupons_name' => $order->members_coupons->coupons->name,
                    'cut_price' => $order->members_coupons->coupons->cut_price,
                ];
            }else{
                $coupons = '0';
            }

            $orders[] = [
                'id' => $order->id,
                'image' => $order->goods->image,
                'title' => $order->goods->title,
                'is_payed' => $order->is_payed,
                'members_id' => (string)$order->members_id,
                'type' => [
                    'type_id' => $order->goods->type->id,
                    'type_name' => $order->goods->type->name,
                ],
                'goods_id' => (integer) $order->goods_id,
                'no' => (string) $order->no,
                'price' => (float) $order->price,
                'body' => (string) $order->body,
                'sku' => [
                    'sku_id' => $order->sku->id,
                    'sku_name' => $order->sku->skus->sku_name,
                    'adult' => $order->sku->adult,
                    'adult_price' => $order->sku->skus->price,
                    'kids' => $order->sku->kids,
                    'kids_price' => $order->sku->skus->kid_price,
                ],
                'user_name' => $order->sku->user_name,
                'user_phone' => $order->sku->user_phone,
                'date' => $order->sku->date,
                'coupons' => $coupons,
            ];
        }

        return bake([
            'orders' => $orders,
        ]);

    }

    /**
     * @param $order
     * @return array
     */
    private function collect_order($order)
    {
        if ($order->coupons_id != '0'){
            $coupons = [
                'coupons_id' => $order->coupons_id,
                'cpupons_name' => $order->members_coupons->coupons->name,
                'cut_price' => $order->members_coupons->coupons->cut_price,
            ];
        }else{
            $coupons = '0';
        }

        if($order->is_payed == false){
            return [
                'id' => $order->id,
                'state' => $order->state,
                'image' => $order->goods->image,
                'title' => $order->goods->title,
                'is_payed' => $order->is_payed,
                'members_id' => (string)$order->members_id,
                'type' => [
                    'type_id' => $order->goods->type->id,
                    'type_name' => $order->goods->type->name,
                ],
                'goods_id' => (integer) $order->goods_id,
                'no' => (string) $order->no,
                'price' => (float) $order->price,
                'body' => (string) $order->body,
                'sku' => [
                    'sku_id' => $order->sku->id,
                    'sku_name' => $order->sku->skus->sku_name,
                    'adult' => $order->sku->adult,
                    'adult_price' => $order->sku->skus->price,
                    'kids' => $order->sku->kids,
                    'kids_price' => $order->sku->skus->kid_price,
                ],
                'user_name' => $order->sku->user_name,
                'user_phone' => $order->sku->user_phone,
                'date' => $order->sku->date,
                'coupons' => $coupons,
            ];
        }else{
            return [
                'id' => $order->id,
                'state' => $order->state,
                'image' => $order->goods->image,
                'title' => $order->goods->title,
                'is_payed' => $order->is_payed,
                'members_id' => (string)$order->members_id,
                'type' => [
                    'type_id' => $order->goods->type->id,
                    'type_name' => $order->goods->type->name,
                ],
                'goods_id' => (integer) $order->goods_id,
                'no' => (string) $order->no,
                'price' => (float) $order->price,
                'body' => (string) $order->body,
                'sku' => [
                    'sku_id' => $order->sku->id,
                    'sku_name' => $order->sku->skus->sku_name,
                    'adult' => $order->sku->adult,
                    'adult_price' => $order->sku->skus->price,
                    'kids' => $order->sku->kids,
                    'kids_price' => $order->sku->skus->kid_price,
                ],
                'user_name' => $order->sku->user_name,
                'user_phone' => $order->sku->user_phone,
                'date' => $order->sku->date,
                'coupons' => $coupons,
                'payed_at'=>$order->payed_at,
            ];
        }
    }


    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function get_members_coupons()
    {
        $order = Members_coupons::where('members_id',member()->user()->id)->with('coupons')->get();
        return bake([
            'coupons' => $order,
        ]);
    }



    public function test()
    {
//        $result = \EasyWeChat::payment()->order->unify([
//            'body' => '11111',
//            'out_trade_no' => '11111',
//            'total_fee' => '100',
//            'trade_type' => 'JSAPI',
//            'openid' => 'oPRYE5kgddL3LTH8wfP8Mq-5iGRU',
//        ]);
//        dd($result);

//        $info = [
//            'touser' => 'oPRYE5kgddL3LTH8wfP8Mq-5iGRU',
//            'template_id' => 'nJxJ4bHoASXM8-i5eRUd9frE_1nJup0yDbMoucuxii8',
//            'page' => '/pages/markorder/markorder?oid=1',
//            'form_id' => "wx081558462062007b83516e561138011568",
//            'data' => [
//                'keyword1' => '11111',
//                'keyword2' => '11111',
//                'keyword3' => '11111',
//                'keyword4' => '11111',
//            ],
//        ];
//
//        dump(\EasyWeChat::miniProgram()->template_message->send($info));

        $res = \EasyWeChat::miniProgram()->app_code->get('path/to/page');
        $filename = $res->save('public/image','code.png');

//        $disk = \Storage::disk('qiniu');
//
//        $filename = $disk->put(str_random(10), $res);

        return succeed($filename);
    }

}
