<?php

namespace App\Models;

use App\Models\Traits\Helpers;
use Illuminate\Database\Eloquent\Model;

class Mini_classify extends Model
{
    //
    use Helpers;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'mini_classify';

    protected $fillable = [
        'name',
    ];


    /**
     * @param $date
     * @return mixed
     */
    public function getCreatedAtAttribute($date)
    {
        return $this->hommization($date);
    }

    /**
     * @param $date
     * @return mixed
     */
    public function getUpdatedAtAttribute($date)
    {
        return $this->hommization($date);
    }

}
