<?php

use App\Models\Menu;
use Illuminate\Database\Seeder;

class MenusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Menu::create(
            [
                'name'     => '管理面板',
                'describe' => '管理面板',
                'icon'     => 'fa-tachometer',
                'slug'     => 'admin.index',
            ]
        );

        $cog = Menu::create(
            [
                'name'     => '站点设置',
                'describe' => '站点设置',
                'icon'     => 'fa-cogs',
                'slug'     => 'javascript:;',
            ]
        );

        $website= Menu::create(
            [
                'name'     => '网站设置',
                'describe' => '网站设置',
                'icon'     => 'fa-chain-broken',
                'slug'     => 'javascript:;',
            ]
        );

        $mini =  Menu::create(
            [
                'name'     => '小程序设置',
                'describe' => '小程序设置',
                'icon'     => 'fa-flag',
                'slug'     => 'javascript:;',
            ]
        );

        $menus = [
            [
                'name'     => '用户管理',
                'describe' => '用户管理',
                'icon'     => 'fa-user-o',
                'slug'     => 'admin.users.index',
                'top_id'   => $cog->id,
            ],
            [
                'name'     => '权限管理',
                'describe' => '权限管理',
                'icon'     => 'fa-dot-circle-o',
                'slug'     => 'admin.permissions.index',
                'top_id'   => $cog->id,
            ],
            [
                'name'     => '角色管理',
                'describe' => '角色管理',
                'icon'     => 'fa-user-secret',
                'slug'     => 'admin.roles.index',
                'top_id'   => $cog->id,
            ],
            [
                'name'     => '菜单管理',
                'describe' => '菜单管理',
                'icon'     => 'fa-bars',
                'slug'     => 'admin.menus.index',
                'top_id'   => $cog->id,
            ],
	        [
		        'name'     => '页面管理',
		        'describe' => '页面管理',
		        'icon'     => 'fa-inbox',
		        'slug'     => 'admin.pages.index',
		        'top_id'   => $website->id,
	        ],
	        [
		        'name'     => '壁纸管理',
		        'describe' => '壁纸管理',
		        'icon'     => 'fa-picture-o',
		        'slug'     => 'admin.wallpapers.index',
		        'top_id'   => $website->id,
	        ],
	        [
		        'name'     => '产品管理',
		        'describe' => '产品管理',
		        'icon'     => 'fa-cube',
		        'slug'     => 'admin.products.index',
		        'top_id'   => $website->id,
	        ],
            [
                'name'     => '轮播管理',
                'describe' => '轮播管理',
                'icon'     => 'fa-cube',
                'slug'     => 'admin.banner.index',
                'top_id'   => $mini->id,
            ],
            [
                'name'     => '品类管理',
                'describe' => '品类管理',
                'icon'     => 'fa-cube',
                'slug'     => 'admin.mini_classify.index',
                'top_id'   => $mini->id,
            ],
            [
                'name'     => '产品管理',
                'describe' => '产品管理',
                'icon'     => 'fa-cube',
                'slug'     => 'admin.goods.index',
                'top_id'   => $mini->id,
            ],
            [
                'name'     => '用户管理',
                'describe' => '用户',
                'icon'     => 'fa-cube',
                'slug'     => 'admin.members.index',
                'top_id'   => $mini->id,
            ],
        ];

        foreach ($menus as $index => $menu) {
            Menu::create($menu);
        }
    }
}
