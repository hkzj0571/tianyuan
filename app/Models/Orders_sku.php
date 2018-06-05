<?php

namespace App\Models;

use App\Models\Traits\Helpers;
use Illuminate\Database\Eloquent\Model;

class Orders_sku extends Model
{
    use Helpers;

    protected $table = 'orders_skus';

    protected $guarded = [];

    public function skus()
    {
        return $this->belongsTo(Goods_sku::class,'goods_sku_id');
    }
}
