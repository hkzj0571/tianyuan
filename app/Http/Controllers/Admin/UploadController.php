<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Exceptions\ValidatorException;

class UploadController extends Controller
{
    public function upload()
    {
        try {
            $file = array_first($this->validator('admin.upload'));
        } catch (ValidatorException $exception) {
            return failed($exception->getMessage());
        }

	    $disk = \Storage::disk('qiniu');

	    $filename = $disk->put(str_random(10), $file);

	    return succeed(['url' => $disk->getUrl($filename)]);
    }
}
