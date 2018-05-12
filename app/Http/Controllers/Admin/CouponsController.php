<?php

namespace App\Http\Controllers\Admin;

use App\Models\Coupon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CouponsController extends Controller
{
    public function index()
    {
        $coupons = Coupon::paginate(10);
        return view('admin.coupons.index', compact('coupons'));
    }

    public function create()
    {
        return view('admin.coupons.create');
    }

    public function store(Request $request)
    {
        try {
            $needs = $this->validator('admin.coupons.store');
        } catch (ValidatorException $exception) {
            return failed($exception->getMessage());
        }

        Coupon::create($needs);

        return succeed('添加优惠券成功。');
    }

    public function edit(Coupon $coupon)
    {
        return view('admin.coupons.edit', compact('coupon'));
    }

    public function update(Request $request,Coupon $coupon)
    {
        try {
            $needs = $this->validator('admin.coupons.store');
        } catch (ValidatorException $exception) {
            return failed($exception->getMessage());
        }
        $coupon->update($needs);
        return succeed('更新优惠券成功。');
    }

    public function destroy(Coupon $coupon)
    {
        $coupon->delete();
        return succeed('删除优惠券成功。');
    }
}
