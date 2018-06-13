@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <h5 class="box-title">订单管理</h5>
            <form class="filter-bar">
                <input type="text" class="form-control wb" name="no" placeholder="请输入订单号" value="{{ $filters['no'] }}">
                <select name="is_payed" class="form-control wb">
                    <option value="">是否支付</option>
                    <option value='1' {{ $filters['is_payed'] == '1' ? 'selected' : '' }}>是</option>
                    <option value="0" {{ $filters['is_payed'] == '0' ? 'selected' : '' }}>否</option>
                </select>
                <select name="state" class="form-control wb">
                    <option value="">订单状态</option>
                    <option value='0' {{ $filters['state'] == '0' ? 'selected' : '' }}>未安排</option>
                    <option value='1' {{ $filters['state'] == '1' ? 'selected' : '' }}>已安排</option>
                    <option value="2" {{ $filters['state'] == '2' ? 'selected' : '' }}>订单已完成</option>
                </select>
                <button class="btn-success" style="border-radius: 4px;"  type="submit" ><i class="fa fa-search"></i>搜索</button>
            </form>
        </div>
        <div class="box-body">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>编号</th>
                    <th>购买产品</th>
                    <th>产品名称+规格</th>
                    <th>购买类型</th>
                    <th>订单总价</th>
                    <th>是否支付</th>
                    <th>订单状态</th>
                    <th>添加时间</th>

                    <th width="200px">操作</th>
                </tr>
                </thead>
                <tbody>
                @foreach($orders as $order)
                    <tr>
                        <td>
                            <label>
                                {{--<input type="checkbox" value="{{ $user->id }}" class="table-check">--}}
                                {{ $order->id }}
                            </label>
                        </td>
                        <td>
                            <a href="{{ $order->goods->image }}" target="_blank">
                                <img src="{{ $order->goods->image }}" class="img-thumbnail" style="width: 50px;height: 50px">
                            </a>
                        </td>
                        <td>{{ $order->goods->title }}&nbsp; / <span class="label label-success">{{ $order->sku->skus->sku_name }}</span></td>
                        <td><span class="label label-primary">{{ $order->goods->type->name }} </span></td>
                        <td><span class="label label-success">{{ $order->price }} ¥ </span></td>
                         <td>
                             @if($order->is_payed)
                                 <span class="label label-success">已支付</span>
                             @else
                                 <span class="label label-danger">未支付</span>
                             @endif
                         </td>

                        <td>
                            @if($order->state == '0')
                                <span class="label label-danger">未安排</span>
                            @elseif($order->state == '1')
                                <span class="label label-warning">已安排</span>
                            @elseif($order->state == '2')
                                <span class="label label-success">订单完成</span>
                            @endif
                        </td>
                        {{--<td><span class="label label-success">￥ {{ $coupon->cut_price }}</span></td>--}}
                        <td>{{ hommization($order->created_at) }}</td>

                        <td>
                            <a class="btn btn-success"
                               href="{{ route('admin.orders.show',['order' => $order->id]) }}">
                                <i class="fa fa-eye"></i> 详情
                            </a>
                            {{--@can('admin.users.edit')--}}
                                {{--<a class="btn btn-success" href="{{ route('admin.coupons.edit',['coupon' => $coupon->id]) }}">--}}
                                    {{--<i class="fa fa-pencil-square-o"></i> 编辑--}}
                                {{--</a>--}}
                            {{--@endcan--}}
                            {{--@can('admin.users.destroy')--}}
                                {{--<a href="{{ route('admin.coupons.destroy',['coupon' => $coupon->id]) }}" class="btn btn-danger destroy">--}}
                                    {{--<i class="fa fa-trash-o"></i>--}}
                                    {{--删除--}}
                                {{--</a>--}}
                            {{--@endcan--}}
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
            {{ $orders->links() }}
            <p class="total">共计 {{ $orders->total() }} 条数据，每页显示 10 条。</p>
        </div>
    </div>
@stop