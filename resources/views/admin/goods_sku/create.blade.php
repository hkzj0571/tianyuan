@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <a href="{{ route('admin.goods.sku.index',['goods' => $good->id]) }}" class="btn btn-back"><i class="fa fa-arrow-left"></i></a>
            <h5 class="box-title">规格目录</h5>
        </div>
        <div class="box-body">
            <form onsubmit="task(this)">
                <div class="form-group ban">
                    <label>规格名称</label>
                    <input type="text" name="sku_name" class="form-control" required>
                </div>

                <div class="form-group ban">
                    <label>默认价格</label>
                    <input type="text" name="price" class="form-control" required>
                </div>

                <div class="form-group ban">
                    <label>是否包含儿童价格</label>
                    <div style="margin-top: 25px">
                        <div class="inline-rad">
                            <label>
                                <input type="radio" name="is_group" value="1" checked> 是
                            </label>
                        </div>
                        <div class="inline-rad">
                            <label>
                                <input type="radio" name="is_group" value="0"> 否
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group ban group_price">
                    <label>儿童价格</label>
                    <input type="text" name="kid_price"  class="form-control">
                    <p class="help-block">只能输入数字，保留小数点后两位</p>
                </div>


                <div class="form-group">
                    <button type="submit" class="btn btn-primary"><i class="fa fa-floppy-o"></i>保存</button>
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
                action: '{{ route('admin.goods.sku.store',['goods'=>$good->id]) }}',
                jump: '{{ route('admin.goods.sku.index',['goods'=>$good->id]) }}'
            })
        }

        // $('.inline-rad input[name=is_group]').on('click', function () {
        //     if (parseInt($(this).val()) == 1) {
        //         $('.group_price').show()
        //     } else {
        //         $('.group_price').hide()
        //     }
        // })
        $('.inline-rad input[name=is_group]').on('click', function () {
            if (parseInt($(this).val()) == 1) {
                $('.group_price').show()
            } else {
                $('.group_price').hide()
            }
        })
    </script>
@stop