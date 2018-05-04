@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <a href="{{ route('admin.pages.index') }}" class="btn btn-back"><i class="fa fa-arrow-left"></i></a>
            <h5 class="box-title">添加页面</h5>
        </div>
        <div class="box-body">
            <form onsubmit="task(this)">
                <div class="form-group">
                    <label>标题</label>
                    <input type="text" name="title" class="form-control" autofocus required>
                </div>
                <div class="form-group">
                    <label>关键词</label>
                    <input type="text" name="keyword" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>描述</label>
                    <input type="text" name="descript" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>内容</label>
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
                action: '{{ route('admin.pages.store') }}',
                jump: '{{ route('admin.pages.index') }}'
            })
        }
    </script>
@stop