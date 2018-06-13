@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary box-half">
        <div class="box-header">
            <a href="{{ route('admin.orders.index') }}" class="btn btn-back"><i class="fa fa-arrow-left"></i></a>
            <h5 class="box-title">订单详情: <strong>{{ $order->id }}</strong></h5>
        </div>
        <div class="box-body">
            <p class="lead">订单编号: <span class="label label-success">{{ $order->no }}</span></p>
            <div class="table-responsive">
                <table class="table">
                    <tbody>
                    <tr>
                        <th>订单 ID</th>
                        <td>{{ $order->id }}</td>
                    </tr>
                    <tr>
                        <th>订单编号</th>
                        <td>{{ $order->no }}</td>
                    </tr>
                    <tr>
                        <th>订单描述</th>
                        <td>{{ $order->body }}</td>
                    </tr>
                    <tr>
                        <th>订单价格</th>
                        <td>
                            <span class="label label-default">￥ {{ $order->price }}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>订单状态</th>
                        <td>
                            @if($order->is_payed)
                                <span class="label label-success">已支付</span>
                            @else
                                <span class="label label-danger">未支付</span>
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <th>下单会员</th>
                        <td>{{ $order->member->name }} (OpenId: {{ $order->member->openid }})</td>
                    </tr>
                    <tr>
                        <th>订单类型</th>
                        <td>
                            <span class="label label-success">{{ $order->goods->type->name }}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>出行时间</th>
                        <td><span class="label label-success">{{ $order->sku->date }}</span></td>
                    </tr>
                    <tr>
                        <th>用户名字</th>
                        <td>{{ $order->sku->user_name }}</td>
                    </tr>
                    <tr>
                        <th>用户联系方式</th>
                        <td>{{ $order->sku->user_phone }}</td>
                    </tr>


                    <tr>
                        <th>处理订单</th>

                        @if($order->is_payed)
                            @if($order->state == '0')
                            <td> <a href="{{ route('admin.orders.edit',['order' => $order->id]) }}" class="btn btn-primary confirm_order" >确定订单</a></td>
                                @elseif($order->state == '1')
                            <td><a href="{{ route('admin.orders.update',['order' => $order->id]) }}" class="btn btn-primary finish_order" >完成订单</a></td>
                                @elseif($order->state == '2')
                                <td><span class="label label-success">订单完成</span></td>
                            @endif
                        @else
                            <td><span class="label label-default">等待用户支付</span></td>
                        @endif

                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@stop
