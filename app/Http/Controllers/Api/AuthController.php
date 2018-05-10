<?php

namespace App\Http\Controllers\Api;

use App\Models\Members;
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

        try {
            $infos = $this->validator('api.user_info', $needs['data']);
        } catch (ValidatorException $exception) {
            return errord($exception->getMessage());
        }

//        $needs['code'] = '021jUT5G03uKjl2J1C7G0XS66G0jUT5O';

        $restful = EasyWeChat::miniProgram()->auth->session($needs['code']);

        if (isset($restful['errcode'])) {
            return errord('拉取用户信息失败，Js Code 参数错误');
        }

        $member = Members::where('openid', $restful['openid'])->first();

        $data = [
            'session_key' => $restful['session_key'],
            'avatar' => 'https://lccdn.phphub.org/uploads/avatars/19875_1510242370.jpeg',
            'name' => '1111',
        ];

        if ($member) {
            $member->update($data);
        } else {
            $data['openid'] = $restful['openid'];
            $member         = Members::create($data);
        }

        return geted([
            'token' => 'bearer' . member()->fromUser($member),
            'member' => $member->toResource(),
        ]);
    }
}
