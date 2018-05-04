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

}
