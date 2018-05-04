<?php

namespace App\Services;

use Cache;
use App\Models\Menu;

class MenuService
{
    public $menus;

    public $time = 24 * 60 * 7;

    public function __construct()
    {
        $this->menus = Cache::remember('menus', $this->time, function() {
            return Menu::tops()->with('childers')->orderBy('weight', 'desc')->get();
        });
    }
}