@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary box-half">
        <div class="box-header">
            <a href="{{ route('admin.mini_classify.index') }}" class="btn btn-back"><i class="fa fa-arrow-left"></i></a>
            <h5 class="box-title">添加优惠券</h5>
        </div>
        <div class="box-body">
            <form onsubmit="task(this)">
                <div class="form-group">
                    <label>优惠券名称</label>
                    <input type="text" name="name" class="form-control" autofocus required>
                </div>
                <div class="form-group">
                    <label>优惠金额</label>
                    <input type="text" name="cut_price" class="form-control" autofocus required>
                </div>
                <div class="form-group">
                    <label>优惠说明</label>
                    <input type="text" name="explain" class="form-control" autofocus required>
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
                method: 'POST',
                action: '{{ route('admin.coupons.store') }}',
                jump: '{{ route('admin.coupons.index') }}'
            })
        }
    </script>
@stop