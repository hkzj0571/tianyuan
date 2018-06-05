<?php

namespace App\Models;

use App\Models\Traits\Helpers;
use Illuminate\Database\Eloquent\Model;

class Collect_goods extends Model
{
    use Helpers;

    protected $table = 'collect_goods';

    protected $guarded = [];

    public function goods()
    {
        return $this->belongsTo(Goods::class);
    }

    public function type()
    {
        
    }
}
