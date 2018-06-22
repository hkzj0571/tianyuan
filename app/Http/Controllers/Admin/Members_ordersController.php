<?php

namespace App\Http\Controllers\Admin;

use App\Models\Members;
use App\Models\Orders;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Members_ordersController extends Controller
{
    public function index(Request $request,Members $member)
    {
        $orders = Orders::where('members_id',$member->id)->paginate(10);
        $filters = get_by(['no', 'is_payed','state']);
        return view('admin.members.orders',compact('orders','filters'));
    }
}
