<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Members_couponsResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'members_id' => $this->members_id,
            'coupons_id' => $this->coupons_id,
            'status' => $this->status,
            'cut_price' => $this->coupons->cut_price,
        ];
    }
}
