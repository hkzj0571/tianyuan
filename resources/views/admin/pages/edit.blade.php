@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <a href="{{ route('admin.pages.index') }}" class="btn btn-back"><i class="fa fa-arrow-left"></i></a>
            <h5 class="box-title">更新页面: <strong>{{ $page->title }}</strong></h5>
        </div>
        <div class="box-body">
            <form onsubmit="task(this)">
                <div class="form-group">
                    <label>标题</label>
                    <input type="text" name="title" class="form-control" value="{{ $page->title }}" autofocus required>
                </div>
                <div class="form-group">
                    <label>关键词</label>
                    <input type="text" name="keyword" value="{{ $page->keyword }}" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>描述</label>
                    <input type="text" name="descript" value="{{ $page->descript }}" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>内容</label>
                    <textarea id="PickEditor" name="body" style="min-height: 500px;" spellcheck="false">{{ $page->body }}</textarea>
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
                action: '{{ route('admin.pages.update',['page' => $page->id]) }}',
                jump: '{{ route('admin.pages.index') }}'
            })
        }
    </script>
@stop