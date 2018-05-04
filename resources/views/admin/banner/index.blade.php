@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <h5 class="box-title">小程序轮播管理</h5>
            @can('admin.banner.create')
                <a class="btn btn-primary" href="{{ route('admin.banner.create') }}"><i class="fa fa-plus"></i>添加</a>
            @endcan
        </div>
        <div class="box-body">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>编号</th>
                    <th>图片</th>
                    <th>名称</th>
                    <th>权重</th>
                    <th>添加时间</th>
                    <th>更新时间</th>
                    <th width="200px">操作</th>
                </tr>
                </thead>
                <tbody>
                @foreach($banners as $banner)
                    <tr>
                        <td>
                            <label>
                                {{--<input type="checkbox" value="{{ $banner->id }}" class="table-check">--}}
                                {{ $banner->id }}
                            </label>
                        </td>
                        <td>
                            <a href="{{ $banner->url }}" target="_blank">
                                <img src="{{ $banner->url }}" class="img-thumbnail" style="width: 80px;height: 50px">
                            </a>
                        </td>
                        <td>{{ $banner->name }}</td>
                        <td><span class="label label-success">{{ $banner->weight }}</span></td>
                        <td>{{ $banner->created_at }}</td>
                        <td>{{ $banner->updated_at }}</td>
                        <td>
                            @can('admin.banner.edit')
                                <a class="btn btn-success" href="{{ route('admin.banner.edit',['banner' => $banner->id]) }}">
                                    <i class="fa fa-pencil-square-o"></i> 编辑
                                </a>
                            @endcan
                            @can('admin.users.destroy')
                                <a href="{{ route('admin.banner.destroy',['banner' => $banner->id]) }}" class="btn btn-danger destroy">
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
            {{ $banners->links() }}
            <p class="total">共计 {{ $banners->total() }} 条数据，每页显示 10 条。</p>
        </div>
    </div>
@stop