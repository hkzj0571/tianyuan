@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary box-half">
        <div class="box-header">
            <a href="{{ route('admin.coupons.index') }}" class="btn btn-back"><i class="fa fa-arrow-left"></i></a>
            <h5 class="box-title">更新优惠券: <strong>{{ $coupon->name }}</strong></h5>
        </div>
        <div class="box-body">
            <form onsubmit="task(this)">
                <div class="form-group">
                    <label>名称</label>
                    <input type="text" name="name" class="form-control" value="{{ $coupon->name }}" autofocus required>
                </div>

                <div class="form-group">
                    <label>优惠金额</label>
                    <input type="text" name="cut_price" value="{{ $coupon->cut_price }}" class="form-control" autofocus required>
                </div>
                <div class="form-group">
                    <label>优惠说明</label>
                    <input type="text" name="explain" value="{{ $coupon->explain }}" class="form-control" autofocus required>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary"><i class="fa fa-floppy-o"></i>保存
                    </button>
                </div>
            </form>
        </div>
    </div>
    <script>
        function task(el) {
            window.event.preventDefault()
            return toSubmit({
                el: $(el),
                method: 'PUT',
                action: '{{ route('admin.coupons.update',['coupon' => $coupon->id]) }}',
                jump: '{{ route('admin.coupons.index') }}'
            })
        }
    </script>
@stop