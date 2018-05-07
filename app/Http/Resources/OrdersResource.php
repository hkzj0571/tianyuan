<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class OrdersResource extends Resource
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
            'id' => (integer) $this->id,
            'member_id' => (integer) $this->member_id,
            'goods_id' => (integer) $this->goods_id,
            'no' => (string) $this->no,
            'body' => (string) $this->body,
            'price' => (float) $this->price,
            'payed_at' => (string) $this->payed_at,
        ];
    }
}
