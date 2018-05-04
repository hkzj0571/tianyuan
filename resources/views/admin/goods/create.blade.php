@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <a href="{{ route('admin.goods.index') }}" class="btn btn-back"><i class="fa fa-arrow-left"></i></a>
            <h5 class="box-title">添加产品</h5>
        </div>
        <div class="box-body">
            <form onsubmit="task(this)">
                <div class="form-group ban">
                    <label>标题</label>
                    <input type="text" name="title" class="form-control" required>
                </div>
                <div class="form-group ban">
                    <label>产品封面</label>
                    <img src="" style="display: none" class="img-thumbnail img-preview">
                    <div class="input-group input-group-sm">
                        <input type="text" readonly name="image" class="form-control" required>
                        <span class="input-group-btn">
                      <button type="button" class="btn btn-info btn-file" style="border-bottom-right-radius: 3px;
    border-top-right-radius: 3px; padding: 6px 10px; !important;">
                          <i class="fa fa-picture-o"></i> 选择图片
                      </button>
                    </span>
                    </div>
                    <p class="help-block">请上传比例为 34:45 的图片</p>
                </div>
                <div class="form-group ban">
                    <label>产品类型</label>
                    <div style="margin-top: 25px">
                        @foreach($types as $type)
                            <div class="inline-rad">
                                <label>
                                    <input type="radio" name="mini_classify_id" value="{{ $type->id }}" {{ $loop->first ? 'checked' : '' }} required> {{ $type->name }}
                                </label>
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="form-group ban">
                    <label>产品价格</label>
                    <input type="text" name="price" class="form-control" required>
                </div>

                <div class="form-group ban">
                    <label>是否上架</label>
                    <div style="margin-top: 25px">
                        <div class="inline-rad">
                            <label>
                                <input type="radio" name="is_shelve" value="1"> 是
                            </label>
                        </div>
                        <div class="inline-rad">
                            <label>
                                <input type="radio" name="is_shelve" value="0" checked> 否
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group ban">
                    <label>产品简介</label>
                    <textarea name="intro" class="form-control" rows="3" required></textarea>
                </div>
                <div class="form-group">
                    <label>课程详情</label>
                    <div class="editor" spellcheck="false"></div>
                    <textarea id="PickEditor" style="display: none;" name="more" class="editor-body"></textarea>
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
                action: '{{ route('admin.goods.store') }}',
                jump: '{{ route('admin.goods.index') }}'
            })
        }

        // $('.inline-rad input[name=is_group]').on('click', function () {
        //     if (parseInt($(this).val()) == 1) {
        //         $('.group_price').show()
        //     } else {
        //         $('.group_price').hide()
        //     }
        // })
    </script>
@stop