@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <h5 class="box-title">产品管理</h5>
            @can('admin.products.create')
                <a class="btn btn-primary" href="{{ route('admin.products.create') }}"><i class="fa fa-plus"></i>添加</a>
            @endcan
        </div>
        <div class="box-body">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>编号</th>
                    <th>名称</th>
                    <th>添加时间</th>
                    <th>更新时间</th>
                    <th width="200px">操作</th>
                </tr>
                </thead>
                <tbody>
                @foreach($products as $product)
                    <tr>
                        <td>
                            <label>
                                {{ $product->id }}
                            </label>
                        </td>
                        <td>{{ $product->name }}</td>
                        <td>{{ hommization($product->created_at) }}</td>
                        <td>{{ hommization($product->updated_at) }}</td>
                        <td>
                            @can('admin.products.edit')
                                <a class="btn btn-success"
                                   href="{{ route('admin.products.edit',['product' => $product->id]) }}">
                                    <i class="fa fa-pencil-square-o"></i> 编辑
                                </a>
                            @endcan
                            @can('admin.products.destroy')
                                <a href="{{ route('admin.products.destroy',['product' => $product->id]) }}" class="btn btn-danger destroy">
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
            {{ $products->links() }}
            <p class="total">共计 {{ $products->total() }} 条数据，每页显示 10 条。</p>
        </div>
    </div>
@stop