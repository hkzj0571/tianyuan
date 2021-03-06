<?php

use Illuminate\Database\Seeder;

class BannerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = \App\Models\Goods::pluck('id')->toArray();

        for ($i = 0; $i < 20; $i++) {
            \App\Models\Banner::create([
                'name' => '杭州西湖一日游',
                'goods_id' => array_random($types),
                'url' => 'http://p5l5o867t.bkt.clouddn.com/UHRB4O0Sb9/Hwj3NFhpr1dmagVCQB3L6DxBagusPMDTOQWUBlVy.jpeg',
                'weight' => rand(1,100),
            ]);
        }

        \App\Models\Coupon::create([
            'name' => '新用户优惠券',
            'cut_price' => '20',
            'explain' => '用户首次注册时赠送',
        ]);

        \App\Models\Coupon::create([
            'name' => '用户邀请优惠券',
            'cut_price' => '20',
            'explain' => '用户邀请朋友时赠送的优惠券',
        ]);


        $menus = [
            [
                'name'     => '西湖',
            ],
            [
                'name'     => '一日游',
            ],
            [
                'name'     => '灵隐寺',
            ],
            [
                'name'     => '灵隐寺',
            ],
            [
                'name'     => '一日游',
            ],
            [
                'name'     => '一日游',
            ],
            [
                'name'     => '灵隐寺',
            ],
            [
                'name'     => '一日游',
            ],
            [
                'name'     => '一日游',
            ],
            [
                'name'     => '灵隐寺',
            ],
        ];

        foreach ($menus as $index => $menu) {
            \App\Models\Keywords::create($menu);
        }

    }
}
