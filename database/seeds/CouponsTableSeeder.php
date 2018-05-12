<?php

use Illuminate\Database\Seeder;

class CouponsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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
    }
}
