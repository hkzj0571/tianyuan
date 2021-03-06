@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <h5 class="box-title">菜单管理</h5>
            @can('admin.menus.create')
                <a class="btn btn-primary" href="{{ route('admin.menus.create') }}"><i class="fa fa-plus"></i>添加</a>
            @endcan
        </div>
        <div class="box-body">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>编号</th>
                    <th>名称</th>
                    <th>图标</th>
                    <th>Slug</th>
                    <th>排序</th>
                    <th>子栏目</th>
                    <th>添加时间</th>
                    <th>更新时间</th>
                    <th width="200px">操作</th>
                </tr>
                </thead>
                <tbody>
                @foreach($menus as $menu)
                    <tr>
                        <td>{{ $menu->id }}</td>
                        <td><a href="{{ route('admin.menus.edit',['menu' => $menu->id]) }}">{{ $menu->name }}</a></td>
                        <td><i data-toggle="tooltip" title="{{ $menu->icon }}" class="fa {{ $menu->icon }}"/></td>
                        <td>{{ $menu->slug }}</td>
                        <td>{{ $menu->weight }}</td>
                        <td>
                            @if($menu->childers->count())
                                <a href="javascript:void(0);" data-toggle="modal" data-target="#childers{{ $menu->id }}"
                                   style="padding: 15px">{{ $menu->childers->count() }}</a>
                            @else
                                {{ $menu->childers->count() }}
                            @endif
                        </td>
                        <td>{{ $menu->created_at }}</td>
                        <td>{{ $menu->updated_at }}</td>
                        <td>
                            @can('admin.menus.edit')
                                <a class="btn btn-success" href="{{ route('admin.menus.edit',['menu' => $menu->id]) }}">
                                    <i class="fa fa-pencil-square-o"></i> 编辑
                                </a>
                            @endcan
                            @can('admin.menus.destroy')
                                <a href="{{ route('admin.menus.destroy',['menu' => $menu->id]) }}" class="btn btn-danger destroy">
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
            {{ $menus->links() }}
            <p class="total">共计 {{ $menus->total() }} 条数据，每页显示 10 条。</p>
        </div>
    </div>

    @include('admin.menus._show')
@stop