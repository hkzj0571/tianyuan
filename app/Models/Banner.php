<?php

namespace App\Models;

use App\Http\Resources\BannerResourse;
use App\Models\Traits\Helpers;
use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    use Helpers;

    protected $table = 'banner';

    protected $resource = BannerResourse::class;

    protected $guarded = [];



}
