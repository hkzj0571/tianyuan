@extends('layouts.app')

@section('main')
    <div class="container-wrap">
        <aside id="fh5co-hero">
            <div class="flexslider">
                <ul class="slides">
                    <li style="background-image: url({{ asset('frontends/images/img_bg_3.jpg') }});">
                        <div class="overlay-gradient"></div>
                        <div class="container-fluids">
                            <div class="row">
                                <div class="col-md-6 col-md-offset-3 slider-text slider-text-bg">
                                    <div class="slider-text-inner text-center">
                                        <h1>{{ $page->title }}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
        <div id="fh5co-about">
            {!! $page->body !!}
        </div>
    </div>
@stop