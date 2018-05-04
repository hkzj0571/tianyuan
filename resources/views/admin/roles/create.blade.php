@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary box-half">
        <div class="box-header">
            <a href="{{ route('admin.roles.index') }}" class="btn btn-back"><i class="fa fa-arrow-left"></i></a>
            <h5 class="box-title">添加角色</h5>
        </div>
        <div class="box-body">
            <form onsubmit="task(this)">
                <div class="form-group">
                    <label>名称</label>
                    <input type="text" name="alias" class="form-control" autofocus required>
                </div>
                <div class="form-group">
                    <label>Slug</label>
                    <input type="text" name="name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>描述</label>
                    <textarea name="describe" rows="2" class="form-control"></textarea>
                </div>
                <div class="form-group">
                    <label>权限</label>
                    <div class="check-box">
                        @foreach($permissions as $permission)
                            <label data-toggle="tooltip" title="{{ $permission->name }}">
                                <input type="checkbox" name="permissions[]" value="{{ $permission->name }}" class="form-control">{{ $permission->alias }}
                            </label>
                        @endforeach
                    </div>
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
                action: '{{ route('admin.roles.store') }}',
                jump: '{{ route('admin.roles.index') }}'
            })
        }
    </script>
@stop