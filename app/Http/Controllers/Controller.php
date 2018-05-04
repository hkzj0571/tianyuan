<?php

namespace App\Http\Controllers;

use App\Exceptions\ValidatorException;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function validator($rulesName, $needs = null)
    {
        $rules = config("rules.{$rulesName}");

        $needs = $needs ? : request()->only(array_keys($rules));

        $result = \Validator::make($needs, $rules);

        if (!$result->fails()) return $needs;

        throw new ValidatorException($result->errors()->first());
    }
}
