@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary box-half">
        <div class="box-header">
            <a href="{{ route('admin.roles.index') }}" class="btn btn-back"><i class="fa fa-arrow-left"></i></a>
            <h5 class="box-title">更新角色: <strong>{{ $role->name }}</strong></h5>
        </div>
        <div class="box-body">
            <form onsubmit="task(this)">
                <div class="form-group">
                    <label>名称</label>
                    <input type="text" name="alias" class="form-control" value="{{ $role->alias }}" autofocus required>
                </div>
                <div class="form-group">
                    <label>Slug</label>
                    <input type="text" name="name" class="form-control" value="{{ $role->name }}" required>
                </div>
                <div class="form-group">
                    <label>描述</label>
                    <textarea name="describe" rows="2" class="form-control">{{ $role->describe }}</textarea>
                </div>
                <div class="form-group">
                    <label>权限</label>
                    <div class="check-box">
                        @foreach($permissions as $permission)
                            <label data-toggle="tooltip" title="{{ $permission->name }}">
                                <input type="checkbox" name="permissions[]" value="{{ $permission->name }}" class="form-control" {{ $role->hasPermissionTo($permission->name) ? 'checked' : '' }}>{{ $permission->alias }}
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
                method: 'PUT',
                action: '{{ route('admin.roles.update',['role' => $role->id]) }}',
                jump: '{{ route('admin.roles.index') }}'
            })
        }
    </script>
@stop