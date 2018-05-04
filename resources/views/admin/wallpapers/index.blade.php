@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <h5 class="box-title">壁纸管理</h5>
            @can('admin.wallpapers.create')
                <a class="btn btn-primary" href="{{ route('admin.wallpapers.create') }}"><i class="fa fa-plus"></i>添加</a>
            @endcan
        </div>
        <div class="box-body">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>编号</th>
                    <th>图片</th>
                    <th>排序</th>
                    <th>添加时间</th>
                    <th>更新时间</th>
                    <th width="200px">操作</th>
                </tr>
                </thead>
                <tbody>
                @foreach($wallpapers as $wallpaper)
                    <tr>
                        <td>
                            <label>
                                {{ $wallpaper->id }}
                            </label>
                        </td>
                        <td>
                            <img src="{{ $wallpaper->url }}" class="img-thumbnail" width="40px" height="40px">
                        </td>
                        <td>{{ $wallpaper->sort }}</td>
                        <td>{{ hommization($wallpaper->created_at) }}</td>
                        <td>{{ hommization($wallpaper->updated_at) }}</td>
                        <td>
                            @can('admin.wallpapers.edit')
                                <a class="btn btn-success"
                                   href="{{ route('admin.wallpapers.edit',['wallpaper' => $wallpaper->id]) }}">
                                    <i class="fa fa-pencil-square-o"></i> 编辑
                                </a>
                            @endcan
                            @can('admin.wallpapers.destroy')
                                <a href="{{ route('admin.wallpapers.destroy',['wallpaper' => $wallpaper->id]) }}" class="btn btn-danger destroy">
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
            {{ $wallpapers->links() }}
            <p class="total">共计 {{ $wallpapers->total() }} 条数据，每页显示 10 条。</p>
        </div>
    </div>
@stop