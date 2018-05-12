<?php

namespace App\Http\Controllers\Api;

use App\Models\Members;
use App\Models\Members_coupons;
use Illuminate\Http\Request;
use EasyWeChat;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    /**
     * 用户登录接口
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
//        return geted($request->all());die;
        try {
            $needs = $this->validator('api.login');
        } catch (ValidatorException $exception) {
            return errord($exception->getMessage());
        }

        try {
            $infos = $this->validator('api.user_info', $needs['data']);
        } catch (ValidatorException $exception) {
            return errord($exception->getMessage());
        }
//return geted($info);die;
//        $needs['code'] = '021jUT5G03uKjl2J1C7G0XS66G0jUT5O';

        $restful = EasyWeChat::miniProgram()->auth->session($needs['code']);
        if (isset($restful['errcode'])) {
            return errord('拉取用户信息失败，Js Code 参数错误');
        }


        $member = Members::where('openid', $restful['openid'])->first();

        $data = [
            'session_key' => $restful['session_key'],
            'avatar' => $infos['avatarUrl'],
            'name' => $infos['nickName'],
        ];

        if ($member) {
            $member->update($data);
        } else {
            $data['openid'] = $restful['openid'];
            $data['parent_id'] = $needs['parent_id'];
            $member = Members::create($data);
        }

        return geted([
            'token' => 'bearer ' . member()->fromUser($member),
            'member' => $member->toResource(),
        ]);
    }
}
