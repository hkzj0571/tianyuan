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
}
