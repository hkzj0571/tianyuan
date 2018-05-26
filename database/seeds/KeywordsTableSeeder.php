<?php

use Illuminate\Database\Seeder;

class KeywordsTableSeeder extends Seeder
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
            Menu::create($menu);
        }
    }
}
