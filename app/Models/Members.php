<?php

namespace App\Models;

use App\Http\Resources\MembersResource;
use App\Models\Traits\Helpers;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Members extends User implements JWTSubject
{
    use Helpers;

    protected $table = 'members';



    protected $guarded = [];

    protected $resource = MembersResource::class;
    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function collect()
    {
        return $this->belongsToMany(Goods::class, 'collect_goods')->withTimestamps();
    }

    public function is_collect($goods_id)
    {
        return $this->collect()->where('goods_id', $goods_id)->exists();
    }

}
