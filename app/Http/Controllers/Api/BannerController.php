<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\BannerResourse;
use App\Models\Banner;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;

class BannerController extends Controller
{
    public function index()
    {
        return geted(BannerResourse::collection(
            Banner::orderBy('weight','desc')->get()
        ));
    }


    public function test()
    {
        $arr = array(6, 3, 8, 2, 9, 1);
        $count = count($arr);
        $temp = 0;
        for($i = 0;$i < $count - 1;$i++){
            for($j = 0; $j < $count - 1 - $i; $j++){
                if($arr[$j] > $arr[$j + 1]){
                    $temp = $arr[$j];
                    $arr[$j] = $arr[$j + 1];
                    $arr[$j + 1] = $temp;
                }
            }
        }

        dump($arr);
    }
    
}
