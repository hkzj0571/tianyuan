<?php

namespace App\Http\Controllers\Api;

use App\Models\Members;
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
            setregister_code($request->phone);
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
        $check_code = getregister_code($request->phone);
        if ($check_code != $request->code)
        {
            return bake([], '当前用户验证码不正确', '401');
        }
        $user = Members::where('openid',member()->user()->openid)->first();
        $user->bind_mobile = true;
        $user->mobile = $request->phone;
        $user->save();
        Cache::forget('register_'.$request->phone);
        return bake([],'绑定手机成功','200');
    }
    
}
