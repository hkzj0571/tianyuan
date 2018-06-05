<?php

namespace App\Models;

use App\Http\Resources\GoodsResource;
use App\Models\Traits\Helpers;
use Illuminate\Database\Eloquent\Model;

class Goods extends Model
{
    use Helpers;
    protected $table = 'goods';


    protected $guarded = [];

    protected $resource = GoodsResource::class;

    public function type()
    {
        return $this->belongsTo(Mini_classify::class,'mini_classify_id');
    }

    public function types()
    {
        return $this->hasMany(Mini_classify::class);
    }

    public static function  get_money($id)
    {
        $sku = Goods_sku::where('goods_id',$id)->first();
        return $sku->price;
    }

}
