@extends('admin.layouts.app')

@section('main')
    <div class="box box-primary">
        <div class="box-header">
            <h5 class="box-title">会员管理</h5>
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
                    <th width="200px">操作</th>
                </tr>
                </thead>
                <tbody>
                @foreach($members as $member)
                    <tr>
                        <td>{{ $member->id }}</td>
                        <td>
                            <a href="{{ $member->avatar }}" target="_blank">
                                <img src="{{ $member->avatar }}" class="img-thumbnail" style="width: 50px;height: 50px">
                            </a>
                        </td>
                        <td>{{ $member->name }}</td>
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
                                <span class="label label-success">未绑定手机号码</span>
                            @endif
                        </td>
                        <td>{{ hommization($member->created_at) }}</td>
                        <td>
                            {{--@can('admin.members.show')--}}
                            {{--<a class="btn btn-success"--}}
                            {{--href="{{ route('admin.members.show',['member' => $member->id]) }}">--}}
                            {{--<i class="fa fa-eye"></i> 查看详情--}}
                            {{--</a>--}}
                            {{--@endcan--}}

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
            {{ $members->links() }}
            <p class="total">共计 {{ $members->total() }} 条数据，每页显示 10 条。</p>
        </div>
    </div>
@stop