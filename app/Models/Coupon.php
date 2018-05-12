<?php

namespace App\Models;

use App\Models\Traits\Helpers;
use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    use Helpers;

    protected $table = 'coupons';

    protected $guarded = [];

}
