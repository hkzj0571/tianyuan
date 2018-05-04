@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary box-half">
        <div class="box-header">
            <a href="{{ route('admin.wallpapers.index') }}" class="btn btn-back"><i class="fa fa-arrow-left"></i></a>
            <h5 class="box-title">添加壁纸</h5>
        </div>
        <div class="box-body">
            <form onsubmit="task(this)">
                <label>图片</label>
                <img src="" style="display: none;" class="img-thumbnail img-preview">
                <div class="input-group input-group-sm">
                    <input type="text" readonly name="url" class="form-control" required>
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-info btn-file">
                          <i class="fa fa-picture-o"></i> 选择图片
                      </button>
                    </span>
                </div>
                <br>
                <div class="form-group">
                    <label>主标题</label>
                    <input type="text" name="main_text" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>副标题</label>
                    <input type="text" name="sub_text" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>按钮文字</label>
                    <input type="text" name="btn_text" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>按钮链接</label>
                    <input type="url" name="btn_url" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>排序</label>
                    <input type="number" name="sort" class="form-control" required>
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
                action: '{{ route('admin.wallpapers.store') }}',
                jump: '{{ route('admin.wallpapers.index') }}'
            })
        }
    </script>
@stop
