@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary box-halt">
        <div class="box-header">
            <a href="{{ route('admin.products.index') }}" class="btn btn-back"><i class="fa fa-arrow-left"></i></a>
            <h5 class="box-title">添加页面</h5>
        </div>
        <div class="box-body">
            <form onsubmit="task(this)">
                <img src="" style="display: none;" class="img-thumbnail img-preview">
                <div class="form-group">
                    <label>产品名称</label>
                    <input type="text" name="name" class="form-control" autofocus required>
                </div>
                <label>图片</label>
                <div class="input-group input-group-sm">
                    <input type="text" readonly name="cover" class="form-control" required>
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-info btn-file">
                          <i class="fa fa-picture-o"></i> 选择图片
                      </button>
                    </span>
                </div>
                <br>
                <div class="form-group">
                    <label>产品简介</label>
                    <input type="text" name="descript" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>跳转链接</label>
                    <input type="text" name="url" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>内容详情</label>
                    <textarea id="PickEditor" name="body" style="min-height: 500px;" spellcheck="false"></textarea>
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
                action: '{{ route('admin.products.store') }}',
                jump: '{{ route('admin.products.index') }}'
            })
        }
    </script>
@stop