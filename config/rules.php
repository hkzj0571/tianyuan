<?php

return [
	'admin' => [
	    'mini_classify' => [
            'store' => [
                'name' => 'required|between:2,8',
            ],
            'update' => [
                'name' => 'required|between:2,8',
            ],
            'batch' => [
                'id' => 'array|nullable',
            ],
        ],
        'goods' => [
            'store' => [
                'title' => 'required',
                'mini_classify_id' => 'required|numeric|exists:mini_classify,id',
                'image' => 'required|string',
                'intro' => 'required|string',
                'more' => 'required|string',
                'address' => 'required|string',
                'price' => 'nullable|numeric',
                'kid_price'=> 'nullable|numeric',
                'is_shelve' => 'required|boolean',
            ],
        ],
        'sku' => [
            'store' => [
                'sku_name' => 'required',
                'price' => 'nullable|numeric',
                'kid_price'=> 'nullable|numeric',
            ],
            'update' => [
                'sku_name' => 'required',
                'price' => 'nullable|numeric',
                'kid_price'=> 'nullable|numeric',
            ],
        ],
		'users' => [
			'login' => [
				'email' => 'required|email|exists:users',
				'password' => 'required|between:6,20',
			],
			'store' => [
				'roles' => 'array|nullable',
				'name' => 'required|between:2,20|unique:users',
				'email' => 'required|email|unique:users',
				'password' => 'required|between:6,20',
			],
			'update' => [
				'roles' => 'array|nullable',
				'name' => 'required|between:2,20',
				'email' => 'required|email',
				'password' => 'between:6,20|nullable',
			],
			'batch' => [
				'id' => 'array|nullable',
			],
		],
		'menus' => [
			'store' => [
				'name' => 'required|max:191',
				'icon' => 'nullable|max:191',
				'slug' => 'required|max:191',
				'weight' => 'required|numeric',
				'top_id' => 'required|numeric',
				'describe' => 'max:191|nullable',
			],
			'update' => [
				'name' => 'required|max:191',
				'icon' => 'nullable|max:191',
				'slug' => 'required|max:191',
				'weight' => 'required|numeric',
				'top_id' => 'required|numeric',
				'describe' => 'max:191|nullable',
			],
		],
		'permissions' => [
			'store' => [
				'alias' => 'required',
				'describe' => 'nullable',
				'name' => 'required|between:2,50|unique:permissions',
			],
			'update' => [
				'alias' => 'required',
				'describe' => 'nullable',
				'name' => 'required|between:2,50',
			],
			'batch' => [
				'id' => 'array|nullable',
			],
		],
		'roles' => [
			'store' => [
				'alias' => 'required',
				'permissions' => 'array|nullable',
				'describe' => 'nullable',
				'name' => 'required|between:2,20|unique:roles',
			],
			'update' => [
				'alias' => 'required',
				'permissions' => 'array|nullable',
				'describe' => 'nullable',
				'name' => 'required|between:2,20',
			],
			'batch' => [
				'id' => 'array|nullable',
			],
		],
		'pages' => [

			'store' => [
				'title' => 'required|string',
				'keyword' => 'required|string',
				'descript' => 'required|string',
				'body' => 'required|string',
			],

			'update' => [
				'title' => 'required|string',
				'keyword' => 'required|string',
				'descript' => 'required|string',
				'body' => 'required|string',
			],
		],
		'wallpapers' => [

			'store' => [
				'url' => 'required|url',
				'main_text' => 'required|string',
				'sub_text' => 'required|string',
				'btn_text' => 'required|string',
				'btn_url' => 'required|url',
				'sort' => 'required|numeric',
			],

			'update' => [
				'url' => 'required|url',
				'main_text' => 'required|string',
				'sub_text' => 'required|string',
				'btn_text' => 'required|string',
				'btn_url' => 'required|url',
				'sort' => 'required|numeric',
			],
		],

		'upload' => [
			'file' => 'required|file',
		],

        'banner'       => [
            'store'  => [
                'name'        => 'required',
                'url'        => 'required',
                'weight'        => 'required|numeric',
                'goods_id'        => 'required|numeric',
            ],
            'update' => [
                'name'        => 'required',
                'url'        => 'required',
                'weight'        => 'required|numeric',
                'goods_id'        => 'required|numeric',
            ],
        ],

        'coupons' => [
            'store' => [
                'name' => 'required|string',
                'cut_price' => 'required',
                'explain' => 'required|string',
            ],
        ],

		'products' => [

			'store' => [
				'name' => 'required|string',
				'cover' => 'required|url',
				'descript' => 'required|string',
				'url' => 'required|url',
				'body' => 'required|string',
			],

			'update' => [
				'name' => 'required|string',
				'cover' => 'required|url',
				'descript' => 'required|string',
				'url' => 'required|url',
				'body' => 'required|string',
			],
		],
	],

    'api' => [
        'login' => [
            'code' => 'required|string',
            'data' => 'nullable|array',
            'parent_id' => 'nullable',
        ],
        'update_members' => [
            'avatarUrl' => 'required|string',
            'nickName' => 'required|string',
        ],
        'user_info' => [
            'avatarUrl' => 'nullable|string',
            'nickName' => 'nullable|string',
        ],
        'order' => [
            'goods_id' => 'required|numeric|exists:goods,id',
            'data' => 'nullable',
            'user_name' => 'required',
            'user_phone' => 'required',
            'play_date' => 'required',
            'members_coupons_id' => 'required',
        ],
    ],
];
