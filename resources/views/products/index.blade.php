@extends('layouts.app')

@section('main')
    <div class="container-wrap">
        <!-- <aside id="fh5co-hero">
            <div class="flexslider">
                <ul class="slides">
                    <li style="background-image: url(images/img_bg_3.jpg);">
                        <div class="overlay-gradient"></div>
                        <div class="container-fluids">
                            <div class="row">
                                <div class="col-md-6 col-md-offset-3 slider-text slider-text-bg">
                                    <div class="slider-text-inner text-center">
                                        <h1>Blog</h1>
                                        <h2>More Templates <a href="http://www.cssmoban.com/" target="_blank"
                                                              title="模板之家">模板之家</a> - Collect from <a
                                                    href="http://www.cssmoban.com/" title="网页模板"
                                                    target="_blank">网页模板</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </aside> -->
        <div id="fh5co-blog">
            <div class="row">
                @foreach($products as $product)
                    <div class="col-md-4">
                        <div class="fh5co-blog animate-box">
                            <a href="{{ route('products.show',['product' => $product->id]) }}" class="blog-bg" style="background-image: url({{ $product->cover }});"></a>
                            <div class="blog-text">
                                <h3><a href="#">{{ $product->name }}</a></h3>
                                <p>{{ $product->descript }}</p>
                                <ul class="stuff text-center">
                                    <li style="float: inherit"><a href="{{ route('products.show',['product' => $product->id]) }}"></i> 查看详情<i class="icon-arrow-right22"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
@stop