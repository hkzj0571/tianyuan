<?php

use Illuminate\Database\Seeder;

class GoodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = \App\Models\Mini_classify::pluck('id')->toArray();

        for ($i = 0; $i < 20; $i++) {
            \App\Models\Goods::create([
                'title' => '杭州西湖一日游',
                'mini_classify_id' => array_random($types),
                'image' => 'http://p5l5o867t.bkt.clouddn.com/S3jSq14ovw/6ltIJwv0teSvHw7kE2kUPEnHVJ92mbyfOrtNL9hu.jpeg',
                'intro' => '让你的孩子由衷的热爱学习，激发天分,每月两节课，敬请期待',
                'more' => '<p><img src="http://p5l5o867t.bkt.clouddn.com/uploads/images/yunI4u3z9lrXBkUqqWcMH9dXsBw8XAzTDjGSUG4D.jpeg" alt="" style="max-width:100%;"><br></p><p><img src="http://p5l5o867t.bkt.clouddn.com/uploads/images/VoAok8FwLJTWvT051tbjSVWBmWEs6JrFhKyltknL.jpeg" alt="" style="max-width:100%;"><br></p><p><br></p>',
                'price' => 0.01,
                'is_shelve' => true,
            ]);
        }

    }
}
