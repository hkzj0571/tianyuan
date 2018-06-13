<?php

namespace App\Http\Controllers\Admin;

use App\Models\Orders;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrdersController extends Controller
{
    public function index(Request $request)
    {
        $filters = get_by(['no', 'is_payed','state']);
        $orders = Orders::search('no', $filters['no'])->whor('is_payed', $filters['is_payed'])->whor('state', $filters['state'])->orderBy('id', 'DESC')->paginate(10);
        return view('admin.orders.index',compact('orders','filters'));
    }

    public function show(Orders $order)
    {
        return view('admin.orders.show', compact('order'));
    }

    public function edit(Orders $order)
    {
        $order->state = '1';
        $order->save();
        return succeed('确认订单成功');
    }

    public function update(Orders $order)
    {
        $order->state = '2';
        $order->save();
        return succeed('订单完成');
    }
}
