<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\BannerResourse;
use App\Models\Banner;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BannerController extends Controller
{
    public function index()
    {
        return geted(BannerResourse::collection(
            Banner::orderBy('weight','desc')->get()
        ));
    }
}
