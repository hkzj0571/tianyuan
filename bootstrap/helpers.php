<?php

/**
 * @param $phone
 * @return bool
 */
function setregister_code($phone)
{
    $code = '';
    $charset = '1234567890';
    $_len = strlen($charset) - 1;
    for ($i = 0;$i < 4;++$i) {
        $code .= $charset[mt_rand(0, $_len)];
    }
    $key = 'register_'.$phone;
    \Illuminate\Support\Facades\Cache::put($key,$code,5);
    $aliSms =  new \Mrgoon\AliSms\AliSms();
    $send = $aliSms->sendSms($phone, 'SMS_136856426', ['code'=> $code]);
    if($send){
        return true;
    }
    return false;
}

/**
 * @param $phone
 * @return mixed
 */
function getregister_code($phone)
{
    $key = 'register_'.$phone;
    $code = \Illuminate\Support\Facades\Cache::get($key);
    return $code;
}

/**
 * 自定义 Ajax 返回格式
 *
 * @param $status
 * @param $respond
 * @return \Illuminate\Http\JsonResponse
 */
function respond($status, $respond)
{
    return response()->json(['status' => $status, is_string($respond) ? 'message' : 'data' => $respond]);
}

/**
 * 自定义 Ajax 成功返回
 *
 * @param $respond
 * @return \Illuminate\Http\JsonResponse
 */
function succeed($respond = 'Request success!')
{
    return respond(true, $respond);
}

/**
 * 自定义 Ajax 失败返回
 *
 * @param $respond
 * @return \Illuminate\Http\JsonResponse
 */
function failed($respond = 'Request failed!')
{
    return respond(false, $respond);
}

/**
 * 人性化显示时间戳
 *
 * @param $date
 * @return string|static
 */
function hommization($date)
{
	return \Carbon\Carbon::now() > \Carbon\Carbon::parse($date)->addDays(10)
		? \Carbon\Carbon::parse($date)
		: \Carbon\Carbon::parse($date)->diffForHumans();
}

/**
 * 随机返回设定的诗句
 *
 * @return mixed
 */
function poem()
{
    return array_random(config('poems'));
}

/**
 * 检查路由是否存在，依检查结果返回 link 或 slug
 *
 * @param $slug
 * @return string
 */
function linker($slug = null)
{
    return \Route::has($slug) ? route($slug) : $slug;
}

/**
 * 获取自定义配置
 *
 * @param $config_name
 * @return \Illuminate\Config\Repository|mixed
 */
function laradmin($config_name = null)
{
    return config("laradmin.{$config_name}");
}

function active_router($name,$class = 'active')
{
	return Route::currentRouteNamed($name) ? $class : '';
}


/**
 * Api 返回方法，默认 HTTP Code 为 400
 *
 * @param $message
 * @return \Illuminate\Http\JsonResponse
 */
function errord($message)
{
    return response()->json(['error' => $message], 400);
}

/**
 * Api 返回方法，HTTP Code 为 200
 *
 * @param $data
 * @return \Illuminate\Http\JsonResponse
 */
function geted($data)
{
    return response()->json(['data' => $data], 200);
}

function member()
{
    return Auth::guard('api');
}

function get_by(array $keys)
{
    $data = [];
    foreach ($keys as $key) {
        $data[$key] = request($key, null);
    }
    return $data;
}
/**
 * 响应辅助函数
 *
 * @param array $data
 * @param string $message
 * @param int $code
 * @return \Illuminate\Http\JsonResponse
 */
function bake($data = [],$message = 'OK',$code = 0) {
    return response()->json([
        'data' => $data,
        'message' => $message,
        'code' => $code
    ]);
}


