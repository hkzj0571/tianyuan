@extends('layouts.app')
<style>
img{
    max-width: 960px;
}
</style>
@section('main')
    <div class="container-wrap">
        <aside id="fh5co-hero">
            <div class="flexslider">
                <ul class="slides">
                    <li style="background-image: url({{ $product->cover }});">
                        <div class="overlay-gradient"></div>
                        <div class="container-fluids">
                            <div class="row">
                                <div class="col-md-6 col-md-offset-3 slider-text slider-text-bg">
                                   <!--  <div class="slider-text-inner text-center">
                                        <h1>About</h1>
                                        <h2>More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></h2>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
        <div id="fh5co-about">
            {!! $product->body !!}
        </div>
    </div>
@stop