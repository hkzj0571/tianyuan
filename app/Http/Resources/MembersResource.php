<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class MembersResource extends Resource
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
            'avatar' => $this->avatar,
            'name' => $this->name,
            'mobile' => $this->mobile,
            'bind_mobile' => $this->bind_mobile,
            'created_at' => $this->created_at->date,
        ];
    }
}
