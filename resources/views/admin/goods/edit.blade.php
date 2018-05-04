@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <a href="{{ route('admin.goods.index') }}" class="btn btn-back"><i class="fa fa-arrow-left"></i></a>
            <h5 class="box-title">更新产品: <strong>{{ $goods->title }}</strong></h5>
        </div>
        <div class="box-body">
            <form onsubmit="task(this)">
                <div class="form-group ban">
                    <label>产品标题</label>
                    <input type="text" name="title" value="{{ $goods->title }}" class="form-control" required>
                </div>
                <div class="form-group ban">
                    <label>产品封面</label>
                    <img src="{{ $goods->image }}" class="img-thumbnail img-preview">
                    <div class="input-group input-group-sm">
                        <input type="text" name="image" value="{{ $goods->image }}" class="form-control" readonly>
                        <span class="input-group-btn">
                              <button type="button" class="btn btn-info btn-flat btn-file"><i
                                          class="fa fa-picture-o"></i> 选择图片</button>
                        </span>
                    </div>
                    <p class="help-block">请上传比例为 34:45 的图片</p>
                </div>
                <div class="form-group ban">
                    <label>课程类型</label>
                    <div style="margin-top: 25px">
                        @foreach($types as $type)
                            <div class="inline-rad">
                                <label>
                                    <input type="radio" name="mini_classify_id" value="{{ $type->id }}"
                                            {{ $goods->mini_classify_id == $type->id ? 'checked' : '' }}> {{ $type->name }}
                                </label>
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="form-group ban">
                    <label>产品价格</label>
                    <input type="text" name="price" value="{{ $goods->price }}" class="form-control"
                           required>
                </div>
                <div class="form-group ban">
                    <label>是否上架</label>
                    <div style="margin-top: 25px">
                        <div class="inline-rad">
                            <label>
                                <input type="radio" name="is_shelve" value="1" value="0" {{ $goods->is_shelve  ? 'checked' : ''}}> 是
                            </label>
                        </div>
                        <div class="inline-rad">
                            <label>
                                <input type="radio" name="is_shelve"
                                       value="0" {{ $goods->is_shelve  ? '' : 'checked'}}> 否
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group ban">
                    <label>产品简介</label>
                    <textarea name="intro" class="form-control" rows="3" required>{{ $goods->intro }}</textarea>
                </div>
                <div class="form-group">
                    <label>产品详情</label>
                    <div class="editor" spellcheck="false"></div>
                    <textarea id="PickEditor" style="display: none;" name="more" class="editor-body">{!! $goods->more !!}</textarea>
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
                method: 'PUT',
                action: '{{ route('admin.goods.update',['course' => $goods->id]) }}',
                jump: '{{ route('admin.goods.index') }}'
            })
        }

        $('.inline-rad input[name=is_group]').on('click', function () {
            if (parseInt($(this).val()) == 1) {
                $('.group_price').show()
            } else {
                $('.group_price').hide()
            }
        })
    </script>
@stop