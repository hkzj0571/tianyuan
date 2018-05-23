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
        try {
            $needs = $this->validator('api.login');
        } catch (ValidatorException $exception) {
            return errord($exception->getMessage());
        }

        if (!empty($needs['data']))
        {
            try {
                $infos = $this->validator('api.user_info', $needs['data']);
            } catch (ValidatorException $exception) {
                return errord($exception->getMessage());
            }
        }

        $restful = EasyWeChat::miniProgram()->auth->session($needs['code']);
        if (isset($restful['errcode'])) {
            return errord('拉取用户信息失败，Js Code 参数错误');
        }

        $member = Members::where('openid', $restful['openid'])->first();

        $data = [
            'session_key' => $restful['session_key'],
            'avatar' => isset($infos['avatarUrl']) ? $infos['avatarUrl'] : '',
            'name' => isset($infos['nickName'])?$infos['nickName'] : '',
        ];

        if ($member) {
            $member->update($data);
        } else {
            $data['openid'] = $restful['openid'];
            $data['parent_id'] = isset($needs['parent_id'])?$needs['parent_id'] : '';
            $member = Members::create($data);
        }

        return geted([
            'token' => 'bearer ' . member()->fromUser($member),
            'member' => $member->toResource(),
        ]);
    }
}
