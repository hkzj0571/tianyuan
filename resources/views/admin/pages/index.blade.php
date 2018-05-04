@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <h5 class="box-title">页面管理</h5>
            @can('admin.pages.create')
                <a class="btn btn-primary" href="{{ route('admin.pages.create') }}"><i class="fa fa-plus"></i>添加</a>
            @endcan
        </div>
        <div class="box-body">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>编号</th>
                    <th>标题</th>
                    <th>添加时间</th>
                    <th>更新时间</th>
                    <th width="200px">操作</th>
                </tr>
                </thead>
                <tbody>
                @foreach($pages as $page)
                    <tr>
                        <td>
                            <label>
                                {{ $page->id }}
                            </label>
                        </td>
                        <td>{{ $page->title }}</td>
                        <td>{{ hommization($page->created_at) }}</td>
                        <td>{{ hommization($page->updated_at) }}</td>
                        <td>
                            @can('admin.pages.edit')
                                <a class="btn btn-success"
                                   href="{{ route('admin.pages.edit',['permission' => $page->id]) }}">
                                    <i class="fa fa-pencil-square-o"></i> 编辑
                                </a>
                            @endcan
                            @can('admin.pages.destroy')
                                <a href="{{ route('admin.pages.destroy',['permission' => $page->id]) }}" class="btn btn-danger destroy">
                                    <i class="fa fa-trash-o"></i>
                                    删除
                                </a>
                            @endcan
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
        {{--<div class="box-footer clearfix">--}}
            {{--@can('admin.pages.batch')--}}
                {{--<button class="btn btn-primary select-all"><i class="fa fa-check"></i> 全选/反选</button>--}}
                {{--<button class="btn btn-danger btn-batch" batch-url="{{ route('admin.pages.batch') }}"><i class="fa fa-trash-o"></i> 删除选中</button>--}}
            {{--@endcan--}}
            {{--{{ $pages->links() }}--}}
            {{--<p class="total">共计 {{ $pages->total() }} 条数据，每页显示 10 条。</p>--}}
        {{--</div>--}}
    </div>
@stop