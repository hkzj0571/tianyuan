@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary box-half">
        <div class="box-header">
            <a href="{{ route('admin.banner.index') }}" class="btn btn-back"><i class="fa fa-arrow-left"></i></a>
            <h5 class="box-title">添加小程序轮播</h5>
        </div>
        <div class="box-body">
            <form onsubmit="task(this)">
                <div class="form-group">
                    <label>名称</label>
                    <input type="text" name="name" class="form-control" autofocus required>
                </div>

                <div class="form-group">
                    <label>产品封面</label>
                    <img src="" style="display: none" class="img-thumbnail img-preview">
                    <div class="input-group input-group-sm">
                        <input type="text" readonly name="url" class="form-control" required>
                        <span class="input-group-btn">
                      <button type="button" class="btn btn-info btn-file" style="border-bottom-right-radius: 3px;
    border-top-right-radius: 3px; padding: 6px 10px; !important;">
                          <i class="fa fa-picture-o"></i> 选择图片
                      </button>
                    </span>
                    </div>
                    <p class="help-block">请上传比例为 34:45 的图片</p>
                </div>

                <div class="form-group">
                    <label>权重</label>
                    <input type="text" name="weight" class="form-control" autofocus required>
                    <p class="help-block">只能输入数字，权重会影响轮播的排序，权重数值越大，排序越靠前</p>
                </div>

                <div class="form-group">
                    <label>产品编号</label>
                    <input type="text" name="goods_id" class="form-control" autofocus required>
                    <p class="help-block">请去产品管理查看对应的产品编号</p>
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
                action: '{{ route('admin.banner.store') }}',
                jump: '{{ route('admin.banner.index') }}'
            })
        }
    </script>
@stop