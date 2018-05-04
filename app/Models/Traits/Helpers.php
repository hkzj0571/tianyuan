<?php

namespace App\Models\Traits;

use Carbon\Carbon;

trait Helpers
{
    /**
     * 人性化显示时间戳
     *
     * @param $date
     * @return string|static
     */
    public function hommization($date)
    {
        return hommization($date);
    }

    /**
     * 将当前示例转化为 Api 模型
     * 如未指定 Resource，将会执行 toArray 方法
     *
     * @return mixed
     */
    public function toResource()
    {
        return $this->resource ? (new $this->resource($this)) : $this->toArray();
    }
}