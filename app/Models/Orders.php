<?php

namespace App\Models;

use App\Http\Resources\OrdersResource;
use App\Models\Traits\Helpers;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use Helpers;

    protected $table = 'orders';

    protected $resource = OrdersResource::class;

    protected $guarded = [];


    public function member()
    {
        return $this->belongsTo(Members::class,'members_id');
    }

    public function goods()
    {
        return $this->belongsTo(Goods::class,'goods_id');
    }

    public function sku()
    {
        return $this->hasOne(Orders_sku::class);
    }

    public function members_coupons()
    {
        return $this->belongsTo(Members_coupons::class,'coupons_id');
    }
}
