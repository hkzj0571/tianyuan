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

    }
}
