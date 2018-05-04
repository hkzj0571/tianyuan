<nav class="fh5co-nav" role="navigation">
    <div class="container-wrap">
        <div class="top-menu">
            <div class="row">
                <div class="col-xs-2">
                    <div id="fh5co-logo">
                        <a href="/">
                            <img src="{{ asset('frontends/images/logo.png') }}" alt="">
                        </a>
                    </div>
                </div>
                <div class="col-xs-10 text-right menu-1">
                    @php
                        $pages = \App\Models\Page::all();
                    @endphp
                    <ul>
                        <li class="{{ active_router('index') }}"><a href="{{ route('index') }}">主页</a></li>
                        <li><a href="{{ route('products') }}">旅游产品</a></li>
                        <li class="has-dropdown">
                            <a href="javascript:;">关于我们</a>
                            <ul class="dropdown">
                                @foreach($pages as $page)
                                    <li><a href="{{ route('pages',[$page->id]) }}">{{ $page->title }}</a></li>
                                @endforeach
                            </ul>
                        </li>
                        <li class="{{ active_router('contact') }}"><a href="{{ route('contact') }}">联系我们</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</nav>