@extends('admin.layouts.basic')

@section('title','Admin')
<style>
    .box-body {
        overflow-x: scroll;
    }
</style>
@section('body')
    <div class="wrapper">
        <header class="main-header">
            <a href="{{ route('admin.index') }}" class="logo">
                <span class="logo-mini"><b>T</b>a</span>
                <span class="logo-lg"><b>{{ config('app.name') }}</b></span>
            </a>
            <nav class="navbar navbar-static-top">
                <a href="javascript:void(0);" class="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span class="sr-only"></span>
                </a>
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        @can('admin.clear')
                            <li class="dropdown">
                                <a href="{{ route('admin.clear') }}" id="cache-clear"><i class="fa fa-bolt"></i></a>
                            </li>
                        @endcan
                        <li class="dropdown user user-menu">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                                <img src="https://lccdn.phphub.org/uploads/avatars/19875_1510242370.jpeg" class="user-image">
                                <span class="hidden-xs">{{ auth()->user()->name }}</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="user-header">
                                    <img src="https://lccdn.phphub.org/uploads/avatars/19875_1510242370.jpeg" class="img-circle">
                                    <p>
                                        {{ auth()->user()->name }}
                                        <small>注册于 {{ auth()->user()->created_at }}</small>
                                    </p>
                                </li>
                                <li class="user-footer">
                                    <div class="pull-left">
                                        @can('admin.users.edit')
                                            <a href="{{ route('admin.users.edit',['user' => auth()->user()->id]) }}"
                                               class="btn btn-default btn-flat"><i class="fa fa-pencil-square-o"></i> 编辑
                                            </a>
                                        @endcan
                                    </div>
                                    <div class="pull-right">
                                        @can('admin.auth.logout')
                                            <a href="{{ route('admin.auth.logout') }}" id="logout"
                                               class="btn btn-default btn-flat"><i class="fa fa-sign-out"></i> 注销
                                            </a>
                                        @endcan
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0);" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <aside class="main-sidebar">
            <section class="sidebar">
                <div class="user-panel">
                    <div class="pull-left image">
                        <img src="https://lccdn.phphub.org/uploads/avatars/19875_1510242370.jpeg" class="img-circle" alt="User Image">
                    </div>
                    <div class="pull-left info">
                        <p>{{ auth()->user()->name }}</p>
                        <a href="javascript:void(0);"><i class="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>
                @include('admin.layouts.menus')
            </section>
        </aside>
        <div class="content-wrapper" id="main">
            <section class="content">
                @yield('main')
            </section>
        </div>
        {{--@include('admin.layouts.footer')--}}
    </div>
    <script>

        /**
         * 退出登录
         */
        $('#logout').on('click', function (event) {
            event.preventDefault()
            $.get($(this).attr('href'), {}, respond => {
                window.location.href = '{{ route('admin.auth.login') }}'
            })
        })

        /**
         * 清除缓存
         */
        $('#cache-clear').on('click', function (event) {
            event.preventDefault()
            $.get($(this).attr('href'), {}, respond => {
                succeed(respond.message, () => {
                    window.location.reload()
                })
            })
        })
    </script>
@stop