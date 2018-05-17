@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary" id="app">
        <div class="box-header">
            <h5 class="box-title">产品管理</h5>
            @can('admin.goods.create')
                <a class="btn btn-primary" href="{{ route('admin.goods.create') }}"><i class="fa fa-plus"></i>添加</a>
            @endcan
            <form class="filter-bar">
                <input type="text" class="form-control wb" name="name" placeholder="请输入素材名称" value="{{ $filters['name'] }}">
                <select name="is_shelve" class="form-control wb">
                    <option value="">是否上架</option>
                    <option value='1' {{ $filters['is_shelve'] == '1' ? 'selected' : '' }}>是</option>
                    <option value="0" {{ $filters['is_shelve'] == '0' ? 'selected' : '' }}>否</option>
                </select>
                <button class="btn-success" style="border-radius: 4px;"  type="submit" ><i class="fa fa-search"></i>搜索</button>
            </form>
        </div>
        <div class="box-body">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>编号</th>
                    <th>封面</th>
                    <th>标题</th>
                    <th>产品类型</th>
                    <th>是否上架</th>
                    <th>添加时间</th>
                    <th>更新时间</th>
                    <th width="200px">操作</th>
                </tr>
                </thead>
                <tbody>
                @foreach($goods as $good)
                    <tr>
                        <td>{{ $good->id }}</td>
                        <td>
                            <a href="{{ $good->image }}" target="_blank">
                                <img src="{{ $good->image }}" class="img-thumbnail"
                                     style="width: 50px;height: 50px">
                            </a>
                        </td>
                        <td>{{ $good->title }}</td>
                        <td>{{ $good->type->name }}</td>
                        {{--<td>--}}
                            {{--<span class="label label-success">￥ {{ $good->price }}</span>--}}
                        {{--</td>--}}
                        <td>
                            @if($good->is_shelve)
                                <span class="label label-success">是</span>
                            @else
                                <span class="label label-danger">否</span>
                            @endif
                        </td>
                        <td>{{ hommization($good->created_at) }}</td>
                        <td>{{ hommization($good->updated_at) }}</td>
                        <td style="width: 250px;">
                            @can('admin.goods.edit')
                                <a class="btn btn-success"
                                   href="{{ route('admin.goods.sku.index',['goods' => $good->id]) }}">
                                    <i class="fa fa-deaf"></i> 规格
                                </a>
                                <a class="btn btn-success" href="{{ route('admin.goods.edit',['goods' => $good->id]) }}">
                                    <i class="fa fa-pencil-square-o"></i> 编辑
                                </a>
                            @endcan
                            @can('admin.goods.destroy')
                                <a href="{{ route('admin.goods.destroy',['goods' => $good->id]) }}"
                                   class="btn btn-danger destroy">
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
            {{ $goods->links() }}
            <p class="total">共计 {{ $goods->total() }} 条数据，每页显示 10 条。</p>
        </div>
    </div>
    <script>
        // new Vue({
        //     el: '#app',
        //     data: {}
        // })

    </script>
@stop