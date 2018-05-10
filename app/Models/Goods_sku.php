<?php

namespace App\Models;

use App\Models\Traits\Helpers;
use Illuminate\Database\Eloquent\Model;

class Goods_sku extends Model
{
    use Helpers;

    protected $table = 'goods_sku';

    protected $guarded = [];
}
