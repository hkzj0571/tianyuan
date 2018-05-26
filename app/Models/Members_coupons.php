<?php

namespace App\Models;

use App\Models\Traits\Helpers;
use Illuminate\Database\Eloquent\Model;

class Members_coupons extends Model
{
    use Helpers;

    protected $table = 'members_coupons';

    protected $guarded = [];

    public function coupons()
    {
        return $this->belongsTo(Coupon::class,'coupons_id');
    }
}
