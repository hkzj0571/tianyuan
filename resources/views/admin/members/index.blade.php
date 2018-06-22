@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <h5 class="box-title">会员管理</h5>
            <form class="filter-bar">
                <input type="text" class="form-control wb" name="mobile" placeholder="请输入用户绑定手机号码" value="{{ $filters['mobile'] }}">
                <select name="bind_mobile" class="form-control wb">
                    <option value="">是否绑定手机</option>
                    <option value='1' {{ $filters['bind_mobile'] == '1' ? 'selected' : '' }}>是</option>
                    <option value="0" {{ $filters['bind_mobile'] == '0' ? 'selected' : '' }}>否</option>
                </select>
                <button class="btn-success" style="border-radius: 4px;"  type="submit" ><i class="fa fa-search"></i>搜索</button>
            </form>
        </div>
        <div class="box-body">
            <table class="table table-bmembered">
                <thead>
                <tr>
                    <th>编号</th>
                    <th>头像</th>
                    <th>昵称</th>
                    <th>OpenId</th>
                    <th>是否绑定手机号码</th>
                    <th>手机号码</th>
                    <th>加入时间</th>
                    <th>最近上线时间</th>
                    <th width="200px">操作</th>
                </tr>
                </thead>
                <tbody>
                @foreach($members as $member)
                    <tr>
                        <td>{{ $member->id }}</td>
                        <td>
                            <a href="{{ $member->avatar?:'http://p1d7f1q6e.bkt.clouddn.com/default_timg.jpg' }}" target="_blank">
                                <img src="{{ $member->avatar?:'http://p1d7f1q6e.bkt.clouddn.com/default_timg.jpg' }}" class="img-thumbnail" style="width: 50px;height: 50px">
                            </a>
                        </td>
                        <td>{{ $member->name?:"待授权中" }}</td>
                        <td>{{ $member->openid }}</td>
                        <td>
                            @if($member->bind_mobile)
                                <span class="label label-success">是</span>
                            @else
                                <span class="label label-success">否</span>
                            @endif
                        </td>
                        <td>
                            @if($member->bind_mobile)
                                <span class="label label-success">{{ $member->mobile }}</span>
                            @else
                                <span class="label label-danger">未绑定手机号码</span>
                            @endif
                        </td>
                        <td>{{ hommization($member->created_at) }}</td>
                        <td>{{ hommization($member->updated_at) }}</td>
                        <td>
                            @if($member->bind_mobile)
                            <a class="btn btn-success"
                               href="{{ route('admin.members.orders.index',['member' => $member->id]) }}">
                            <i class="fa fa-eye"></i> 查看订单
                            </a>
                            @else
                                <span class="label label-danger">未绑定手机</span>
                            @endif

                            {{--@can('admin.members.destroy')--}}
                            {{--<a href="{{ route('admin.members.destroy',['member' => $member->id]) }}"--}}
                            {{--class="btn btn-danger destroy">--}}
                            {{--<i class="fa fa-trash-o"></i>--}}
                            {{--删除--}}
                            {{--</a>--}}
                            {{--@endcan--}}
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
        <div class="box-footer clearfix">
            {{ $members->appends($filters)->links() }}

            <p class="total">共计 {{ $members->total() }} 条数据，每页显示 10 条。</p>
        </div>
    </div>
@stop