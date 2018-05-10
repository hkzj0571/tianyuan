<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    protected $name = [
        'admin' => '后台',
        'banner' => '轮播图',
        'create' => '创建',
        'store' => '新增',
        'edit' => '编辑',
        'update' => '更新',
        'index' => '首页',
        'destroy' => '删除',
        'permissions' => '权限管理',
        'menus' => '菜单管理',
        'users' => '用户管理',
        'members' => '会员管理',
        'courses' => '课程管理',
        'orders' => '订单管理',
        'modules' => '模块管理',
        'roles' => '角色管理',
        'groups' => '拼团管理',
        'auth' => '用户认证',
        'login' => '登录',
        'logout' => '注销',
        'clear' => '清除缓存',
        'upload' => '上传',
        'get_private_url' => '获取私有链接',
        'get_token' => '获取上传秘钥',
        'products' => '商品',
        'pages' => '页面',
        'mini_classify' => '小程序品类',
        'members' => '用户',
        'sku' => '规格',
    ];
    /**
     *Runthedatabaseseeds.
     *
     * @returnvoid
     */
    public function run()
    {
        $lists = [];

        $timestamp = Carbon::now();

        $data = array_keys(array_values((array) Route::getRoutes())[2]);

        foreach ($data as $key => $v) {
            if (strpos($v, 'admin.') === false) {
                unset($data[$key]);
            }
        }

        foreach ($data as $index => $value) {
            $lists[] = [
                'name' => $value,
                'alias' => $this->replace($value),
                'describe' => $this->replace($value),
                'guard_name' => 'web',
                'created_at' => $timestamp,
                'updated_at' => $timestamp,
            ];
        }

        DB::table('permissions')->insert($lists);
    }

    public function replace($index)
    {
        $names = explode('.', $index);
        foreach ($names as $key => $name) {
            if (isset($this->name[$name])) {
                $names[$key] = $this->name[$name];
            }
        }
        return implode('_',$names);
    }
}
