@extends('layouts.app')

@section('main')

    <div class="container-wrap">
        <aside id="fh5co-hero">
            <div class="flexslider">
                <ul class="slides">
                    @foreach($wallpapers as $wallpaper)
                        <li style="background-image: url({{ $wallpaper->url }});background-size: cover">
                            <div class="overlay-gradient"></div>
                            <div class="container-fluids">
                                <div class="row">
                                    <div class="col-md-6 col-md-offset-3 slider-text">
                                        <div class="slider-text-inner text-center">
                                            <h1 style="color: #fff;">{{ $wallpaper->main_text }}</h1>
                                            <h2 style="color: #fff;">{{ $wallpaper->sub_text }}</h2>
                                            <p><a class="btn btn-primary btn-demo" href="{{ $wallpaper->btn_url }}"
                                                  style="color: #fff;"></i>{{ $wallpaper->btn_text }}</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    @endforeach
                </ul>
            </div>
        </aside>
        <div id="fh5co-services">
            <div class="row">
                <div class="col-md-4 text-center animate-box">
                    <div class="services">
						<span class="icon">
							<i class="icon-diamond"></i>
						</span>
                        <div class="desc">
                            <h3><a href="#">Brand Identity</a></h3>
                            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
                                provident. Odit ab aliquam dolor eius.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-center animate-box">
                    <div class="services">
						<span class="icon">
							<i class="icon-lab2"></i>
						</span>
                        <div class="desc">
                            <h3><a href="#">Web Design &amp; UI</a></h3>
                            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
                                provident. Odit ab aliquam dolor eius.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-center animate-box">
                    <div class="services">
						<span class="icon">
							<i class="icon-settings"></i>
						</span>
                        <div class="desc">
                            <h3><a href="#">Web Development</a></h3>
                            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
                                provident. Odit ab aliquam dolor eius.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="fh5co-work" class="fh5co-light-grey">
            <div class="row animate-box">
                <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
                    <h2>热门旅游线路</h2>
                    <p>杭州人文古迹众多，西湖及其周边有大量的自然及人文景观遗迹。其中主要具代表性的有西湖文化、良渚文化、丝绸文化、茶文化，以及流传下来的许多故事传说成为杭州文化代表。</p>
                </div>
            </div>
            <div class="row">
                @foreach($products as $product)
                    <div class="col-md-4 text-center animate-box">
                        <a href="{{ route('products.show',['product' => $product->id]) }}" class="work"
                           style="background-image: url({{ $product->cover }});">
                            <div class="desc">
                                <h3>{{ $product->name }}</h3>
                                <span>{{ $product->descript }}</span>
                            </div>
                        </a>
                    </div>
                @endforeach
            </div>
        </div>
        <div class="copyrights">Collect from <a href="http://www.cssmoban.com/" title="网站模板">网站模板</a></div>

        <div id="fh5co-counter" class="fh5co-counters">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 text-center animate-box">
                    <p>我们旅行社自从开业以来接待了无数中外游客，什么人来都能玩的开心</p>
                </div>
            </div>
            <div class="row animate-box">
                <div class="col-md-8 col-md-offset-2">
                    <div class="row">
                        <div class="col-md-3 text-center">
                                <span class="fh5co-counter js-counter" data-from="0" data-to="3452" data-speed="5000"
                                      data-refresh-interval="50"></span>
                            <span class="fh5co-counter-label">人次</span>
                        </div>
                        <div class="col-md-3 text-center">
                                <span class="fh5co-counter js-counter" data-from="0" data-to="234" data-speed="5000"
                                      data-refresh-interval="50"></span>
                            <span class="fh5co-counter-label">米</span>
                        </div>
                        <div class="col-md-3 text-center">
                                <span class="fh5co-counter js-counter" data-from="0" data-to="6542" data-speed="5000"
                                      data-refresh-interval="50"></span>
                            <span class="fh5co-counter-label">个产品</span>
                        </div>
                        <div class="col-md-3 text-center">
                                <span class="fh5co-counter js-counter" data-from="0" data-to="8687" data-speed="5000"
                                      data-refresh-interval="50"></span>
                            <span class="fh5co-counter-label">块钱</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="fh5co-blog" class="blog-flex">
            <div class="featured-blog" style="background-image: url({{ array_first($products)['cover'] }});">
                <div class="desc-t">
                    <div class="desc-tc">
                        <span class="featured-head">{{ array_first($products)['name'] }}</span>
                        <h3><a href="#">{{ array_first($products)['descript'] }}</a>
                        </h3>
                        <span><a href="#" class="read-button">详情</a></span>
                    </div>
                </div>
            </div>
            <div class="blog-entry fh5co-light-grey">
                <div class="row animate-box">
                    <div class="col-md-12">
                        <h2>最新线路</h2>
                    </div>
                </div>
                <div class="row">
                    @foreach($products as $product)
                        <div class="col-md-12 animate-box">
                            <a href="{{ route('products.show',['product' => $product->id]) }}" class="blog-post">
                                <span class="img"  style="background-image: url({{ $product->cover }});border-radius: 10px"></span>
                                <div class="desc">
                                    <h3>{{ $product->name }}</h3>
                                    <span class="cat">详情</span>
                                </div>
                            </a>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>

@stop