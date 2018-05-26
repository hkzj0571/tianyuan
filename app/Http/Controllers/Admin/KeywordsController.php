<?php

namespace App\Http\Controllers\Admin;

use App\Models\Keywords;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class KeywordsController extends Controller
{
    public function index()
    {
        $users = Keywords::paginate(10);
        return view('admin.keywords.index', compact('users'));
    }

    public function create()
    {
        return view('admin.keywords.create');
    }

    public function store(Request $request)
    {
        try {
            $needs = $this->validator('admin.mini_classify.store');
        } catch (ValidatorException $exception) {
            return failed($exception->getMessage());
        }

        Keywords::create($needs);

        return succeed('添加关键词成功。');
    }

    public function destroy(Keywords $keyword)
    {
        $keyword->delete();
        return succeed('删除关键词成功。');
    }
}
