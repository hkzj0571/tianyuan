@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary" id="app">
        <div class="box-header">
            <a href="{{ route('admin.goods.index') }}" class="btn btn-back"><i class="fa fa-arrow-left"></i></a>
            <h5 class="box-title">{{ $good->title }}-规格管理</h5>
            @can('admin.goods.create')
                <a class="btn btn-primary" href="{{ route('admin.goods.sku.create',['goods' => $good->id]) }}"><i class="fa fa-plus"></i>添加</a>
            @endcan
        </div>
        <div class="box-body">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>编号</th>
                    <th>规格名称</th>
                    <th>默认价格</th>
                    <th>儿童价格</th>
                    <th>添加时间</th>
                    <th>更新时间</th>
                    <th width="200px">操作</th>
                </tr>
                </thead>
                <tbody>
                @foreach($skus as $sku)
                    <tr>
                        <td>{{ $sku->id }}</td>
                        <td>{{ $sku->sku_name }}</td>
                        <td><span class="label label-success">￥ {{ $sku->price }}</span></td>
                        <td>
                            @if($sku->kid_price)
                                <span class="label label-success">￥ {{ $sku->kid_price }}</span>
                            @else
                                <span class="label label-danger">无</span>
                            @endif
                        </td>
                        <td>{{ hommization($good->created_at) }}</td>
                        <td>{{ hommization($good->updated_at) }}</td>
                        <td style="width: 250px;">
                                <a class="btn btn-success" href="{{ route('admin.goods.sku.edit',['goods' => $good->id,'sku' => $sku->id]) }}">
                                    <i class="fa fa-pencil-square-o"></i> 编辑
                                </a>
                                <a href="{{ route('admin.goods.sku.destroy',['goods' => $good->id,'sku' => $sku->id]) }}"
                                   class="btn btn-danger destroy">
                                    <i class="fa fa-trash-o"></i>
                                    删除
                                </a>

                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
        <div class="box-footer clearfix">
            {{ $skus->links() }}
            <p class="total">共计 {{ $skus->total() }} 条数据，每页显示 10 条。</p>
        </div>
    </div>
    <script>
        // new Vue({
        //     el: '#app',
        //     data: {}
        // })
    </script>
@stop