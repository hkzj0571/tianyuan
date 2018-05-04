<?php

use Illuminate\Database\Seeder;

class Mini_classifiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $menus = [
            [
                'name'     => '一日游',
            ],
            [
                'name'     => '二日游',
            ],
            [
                'name'     => '门票',
            ],

        ];

        foreach ($menus as $index => $menu) {
            \App\Models\Mini_classify::create($menu);
        }
    }
}
