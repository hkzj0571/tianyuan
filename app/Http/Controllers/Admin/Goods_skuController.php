<?php

namespace App\Http\Controllers\Admin;

use App\Models\Goods;
use App\Models\Goods_sku;
use App\Models\Orders;
use App\Models\Orders_sku;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Goods_skuController extends Controller
{
    public function index(Request $request,Goods $good)
    {
        $skus = Goods_sku::where('goods_id', $good->id)->paginate();
        return view('admin.goods_sku.index', compact('good', 'skus'));
    }

    public function create(Request $request,Goods $good)
    {
        return view('admin.goods_sku.create', compact('good'));
    }

    public function store(Request $request,Goods $good)
    {
        try {
            $needs = $this->validator('admin.sku.store');
        } catch (ValidatorException $exception) {
            return failed($exception->getMessage());
        }

        $needs['goods_id'] = $good->id;
        Goods_sku::create($needs);
        return succeed('添加规格成功。');
    }

    public function edit(Request $request,Goods $good,Goods_sku $sku)
    {
        return view('admin.goods_sku.edit',compact('good','sku'));
    }

    public function update(Request $request,Goods $good,Goods_sku $sku)
    {
        try {
            $needs = $this->validator('admin.sku.update');
        } catch (ValidatorException $exception) {
            return failed($exception->getMessage());
        }
        $sku->update($needs);
        return succeed('修改规格成功。');
    }

    public function destroy(Goods $good,Goods_sku $sku)
    {

        $res = Goods_sku::where('goods_id',$good->id)->count();
        if ($res == 1){
            return failed('无法删除,必须保留一种规格');
        }

        $ress = Orders_sku::where('goods_sku_id',$sku->id)->get();
        if($ress){
            foreach ($ress as $order){
                $orders[] = $order['orders_id'];
            }
            Orders_sku::where('goods_sku_id',$sku->id)->delete();
            Orders::whereIn('id', $orders)->delete();
        }

        $sku->delete();
        return succeed('删除规格成功');
    }
}
