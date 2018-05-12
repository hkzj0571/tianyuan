@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <h5 class="box-title">小程序优惠券</h5>
            @can('admin.users.create')
                <a class="btn btn-primary" href="{{ route('admin.coupons.create') }}"><i class="fa fa-plus"></i>添加</a>
            @endcan
        </div>
        <div class="box-body">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>编号</th>
                    <th>优惠券名称</th>
                    <th>优惠金额</th>
                    <th>添加时间</th>
                    <th>更新时间</th>
                    <th width="200px">操作</th>
                </tr>
                </thead>
                <tbody>
                @foreach($coupons as $coupon)
                    <tr>
                        <td>
                            <label>
                                {{--<input type="checkbox" value="{{ $user->id }}" class="table-check">--}}
                                {{ $coupon->id }}
                            </label>
                        </td>
                        <td>{{ $coupon->name }}</td>
                        <td><span class="label label-success">￥ {{ $coupon->cut_price }}</span></td>
                        <td>{{ hommization($coupon->created_at) }}</td>
                        <td>{{ hommization($coupon->updated_at) }}</td>
                        <td>
                            @can('admin.users.edit')
                                <a class="btn btn-success" href="{{ route('admin.coupons.edit',['coupon' => $coupon->id]) }}">
                                    <i class="fa fa-pencil-square-o"></i> 编辑
                                </a>
                            @endcan
                            @can('admin.users.destroy')
                                <a href="{{ route('admin.coupons.destroy',['coupon' => $coupon->id]) }}" class="btn btn-danger destroy">
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
            {{ $coupons->links() }}
            <p class="total">共计 {{ $coupons->total() }} 条数据，每页显示 10 条。</p>
        </div>
    </div>
@stop