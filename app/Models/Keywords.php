<?php

namespace App\Models;

use App\Models\Traits\Helpers;
use Illuminate\Database\Eloquent\Model;

class Keywords extends Model
{
    use Helpers;

    protected $table = 'keywords';

    public $timestamps = false;
    protected $guarded = [];
}
