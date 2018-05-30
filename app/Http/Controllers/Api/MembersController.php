<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\Members_couponsResource;
use App\Models\Collect_goods;
use App\Models\Members;
use App\Models\Members_coupons;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;

class MembersController extends Controller
{
    /**
     * 返回当前登录的用户信息
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function info(Request $request)
    {
        return bake(['member' => member()->user()->toResource()]);
    }


    /**
     * 发送验证码
     * @param Request $request
     */
    public function bound_phone(Request $request)
    {
        if (!member()->user()->bind_mobile){
            (setregister_code($request->phone));
            return bake([],'短信发送成功','200');
        }
    }

    /**
     * 绑定手机号码
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function check_phone(Request $request)
    {
        if (member()->user()->bind_mobile) {
            return bake([], '该用户已绑定手机号码', '402');
        }
        $check_code = getregister_code($request->phone);
        if ($check_code != $request->code) {
            return bake([], '当前用户验证码不正确', '401');
        }

        $user = Members::where('openid', member()->user()->openid)->first();
        $user->bind_mobile = true;
        $user->mobile = $request->phone;
        $user->save();
        Cache::forget('register_' . $request->phone);

        if($user->parent_id){
            Members_coupons::create([
                'members_id' => $user->parent_id,
                'coupons_id' => '2'
            ]);
        }
        //赠送用户优惠券
        Members_coupons::create([
            'members_id' => $user->id,
            'coupons_id' => '1'
        ]);

        return bake([], '绑定手机成功', '200');
    }


    /**
     * 收藏产品
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function collect_goods(Request $request)
    {
        if (!$request->goods_id) {
            return errord('缺少字段 goods_id');
        }
        if (Collect_goods::where('members_id', member()->user()->id)->where('goods_id', $request->goods_id)->first()) {
            Collect_goods::where('members_id', member()->user()->id)->where('goods_id', $request->goods_id)->delete();
            return bake([], '取消收藏产品成功', '200');
        }
        Collect_goods::create([
            'members_id' => member()->user()->id,
            'goods_id' => $request->goods_id,
        ]);
        return bake([], '收藏产品成功', '200');
    }


    public function get_coupons()
    {
        return bake(
            [
                'coupons' => Members_couponsResource::collection(Members_coupons::where('members_id',member()->user()->id)->where('status',false)->get())
            ]
        );
    }


    /**
     * 取消收藏
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
//    public function uncollect_goods(Request $request)
//    {
//        if (!$request->goods_id) {
//            return errord('缺少字段 goods_id');
//        }
//        if (!Collect_goods::where('members_id', member()->user()->id)->where('goods_id', $request->goods_id)->first()) {
//            return errord('请先收藏产品');
//        }
//        Collect_goods::where('members_id', member()->user()->id)->where('goods_id', $request->goods_id)->delete();
//        return bake([], '取消收藏成功', '200');
//    }

    
}
