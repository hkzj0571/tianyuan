@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <a href="{{ route('admin.products.index') }}" class="btn btn-back"><i class="fa fa-arrow-left"></i></a>
            <h5 class="box-title">更新页面: <strong>{{ $product->name }}</strong></h5>
        </div>
        <div class="box-body">
            <form onsubmit="task(this)">
                <div class="form-group">
                    <img src="{{ $product->url }}" class="img-thumbnail img-preview">
                    <label>产品名称</label>
                    <input type="text" name="name" value="{{ $product->name }}" class="form-control" autofocus required>
                </div>
                <label>图片</label>
                <div class="input-group input-group-sm">
                    <input type="text" readonly name="cover" value="{{ $product->cover }}" class="form-control" required>
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-info btn-file">
                          <i class="fa fa-picture-o"></i> 选择图片
                      </button>
                    </span>
                </div>
                <br>
                <div class="form-group">
                    <label>产品简介</label>
                    <input type="text" name="descript" value="{{ $product->descript }}" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>跳转链接</label>
                    <input type="text" name="url" value="{{ $product->url }}" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>内容详情</label>
                    <textarea id="PickEditor" name="body" style="min-height: 500px;" spellcheck="false">{{ $product->body }}</textarea>
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
                action: '{{ route('admin.products.update',['product' => $product->id]) }}',
                jump: '{{ route('admin.products.index') }}'
            })
        }
    </script>
@stop