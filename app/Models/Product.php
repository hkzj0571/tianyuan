<?php

namespace App\Models;

use App\Models\Traits\Helpers;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use Helpers;

    protected $guarded = [];
}
