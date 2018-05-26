@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <h5 class="box-title">小程序分类管理</h5>
            @can('admin.users.create')
                <a class="btn btn-primary" href="{{ route('admin.keywords.create') }}"><i class="fa fa-plus"></i>添加</a>
            @endcan
        </div>
        <div class="box-body">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>编号</th>
                    <th>关键词名称</th>
                    <th width="200px">操作</th>
                </tr>
                </thead>
                <tbody>
                @foreach($users as $user)
                    <tr>
                        <td>
                            <label>
                                {{--<input type="checkbox" value="{{ $user->id }}" class="table-check">--}}
                                {{ $user->id }}
                            </label>
                        </td>
                        <td>{{ $user->name }}</td>
                        <td>
                            @can('admin.users.destroy')
                                <a href="{{ route('admin.keywords.destroy',['keywords' => $user->id]) }}" class="btn btn-danger destroy">
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
        <div class="box-footer clearfix">
            {{--@can('admin.users.batch')--}}
                {{--<button class="btn btn-primary select-all"><i class="fa fa-check"></i> 全选/反选</button>--}}
                {{--<button class="btn btn-danger btn-batch" batch-url="{{ route('admin.miniclassify.batch') }}"><i class="fa fa-trash-o"></i> 删除选中</button>--}}
            {{--@endcan--}}
            {{ $users->links() }}
            <p class="total">共计 {{ $users->total() }} 条数据，每页显示 10 条。</p>
        </div>
    </div>
@stop