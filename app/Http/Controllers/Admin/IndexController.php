<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function index()
    {
        return view('admin.index.index');
    }

    public function clear()
    {
        cache()->clear();
        return succeed('缓存清除成功。');
    }
}
