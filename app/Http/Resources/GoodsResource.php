<?php

namespace App\Http\Resources;

use App\Models\Goods;
use Illuminate\Http\Resources\Json\Resource;

class GoodsResource extends Resource
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
            'title' => $this->title,
            'type' => $this->type->name,
            'image' => $this->image,
            'intro' => $this->intro,
            'more' => $this->more,
            'price' => Goods::get_money($this->id),
            'is_collect' => member()->check() && member()->user()->is_collect($this->id),
        ];
    }
}
