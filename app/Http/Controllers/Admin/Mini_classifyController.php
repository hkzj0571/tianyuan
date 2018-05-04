<?php

namespace App\Http\Controllers\admin;


use Illuminate\Http\Request;
use App\Models\Mini_classify;
use App\Http\Controllers\Controller;

class Mini_classifyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = Mini_classify::paginate(10);
        return view('admin.mini_classify.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.mini_classify.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $needs = $this->validator('admin.mini_classify.store');
        } catch (ValidatorException $exception) {
            return failed($exception->getMessage());
        }

        Mini_classify::create($needs);

        return succeed('添加分类成功。');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Mini_classify $mini_classify)
    {
        return view('admin.mini_classify.edit', compact('mini_classify'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Mini_classify $mini_classify)
    {
        try {
            $needs = $this->validator('admin.mini_classify.update');
        } catch (ValidatorException $exception) {
            return failed($exception->getMessage());
        }


        $mini_classify->update($needs);

        return succeed('更新分类成功。');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Mini_classify $mini_classify)
    {
        $mini_classify->delete();
        return succeed('删除分类成功。');
    }


    /**
     * 批量删除用户
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function batch()
    {
        try {
            Mini_classify::whereIn('id', array_first($this->validator('admin.mini_classify.batch')))
                ->get()
                ->each(function($mini_classify) {
                    $mini_classify->delete();
                });
            return succeed('批量删除成功。');
        } catch (ValidatorException $exception) {
            return failed($exception->getMessage());
        }
    }

    public function uppp()
    {
        dd('111');
    }


}
