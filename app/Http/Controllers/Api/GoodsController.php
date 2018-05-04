<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\GoodsResource;
use App\Models\Goods;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GoodsController extends Controller
{
    public function index()
    {
        return bake([
            'goods' => GoodsResource::collection(
                Goods::where('is_shelve', true)->with('type')->get()
            ),
        ]);
    }
}
