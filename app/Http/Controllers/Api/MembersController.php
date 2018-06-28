<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\GoodsResource;
use App\Http\Resources\Members_couponsResource;
use App\Http\Resources\MembersResource;
use App\Models\Collect_goods;
use App\Models\Goods;
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


    /**
     * 获取用户优惠券
     * @return \Illuminate\Http\JsonResponse
     */
    public function get_coupons()
    {
        return bake(
            [
                'coupons' => Members_couponsResource::collection(Members_coupons::where('members_id',member()->user()->id)->where('status',false)->get())
            ]
        );
    }

    /**
     * 获取用户收藏列表
     * @return \Illuminate\Http\JsonResponse
     */
    public function get_collect_goods()
    {
        $goods = Collect_goods::where('members_id',member()->user()->id)->with('goods')->get();

        foreach ($goods as $car) {
            $good[] = $car['goods_id'];
        }

        return bake([
            'goods' => GoodsResource::collection(
                Goods::whereIn('id', $good)->get()
            )
        ]);

    }

    /**
     * 获取用户邀请成员
     * @return \Illuminate\Http\JsonResponse
     */
    public function get_invite_members()
    {
        $member = Members::where('parent_id',member()->user()->id)->where('bind_mobile',true)->get();

        return bake([
            'members' => MembersResource::collection($member)
        ]);
    }


    /**
     * 用户信息更新
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update_members(Request $request)
    {
        try {
            $needs = $this->validator('api.update_members');
        } catch (ValidatorException $exception) {
            return errord($exception->getMessage());
        }
        $member = Members::where('id', member()->user()->id)->first();
        $data = [
            'avatar' => isset($needs['avatarUrl']) ? $needs['avatarUrl'] : '',
            'name' => isset($needs['nickName'])?$needs['nickName'] : '',
        ];
        $member->update($data);
        return bake([], '用户信息更新成功', '200');
    }



}
