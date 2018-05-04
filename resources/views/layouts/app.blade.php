<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>天缘旅业</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <link rel="stylesheet" href="{{ asset('frontends/css/animate.css') }}">
    <link rel="stylesheet" href="{{ asset('frontends/css/icomoon.css') }}">
    <link rel="stylesheet" href="{{ asset('frontends/css/bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('frontends/css/magnific-popup.css') }}">
    <link rel="stylesheet" href="{{ asset('frontends/css/flexslider.css') }}">
    <link rel="stylesheet" href="{{ asset('frontends/css/style.css') }}">
    <script src="{{ asset('frontends/js/modernizr-2.6.2.min.js') }}"></script>
    <!--[if lt IE 9]>
    <script src="{{ asset('frontends/js/respond.min.js')  }}"></script>
    <![endif]-->
</head>
<body>


<div id="page">
    @include('layouts.header')
    @yield('main')
    @include('layouts.footer')
</div>

<div class="gototop js-top">
    <a href="#" class="js-gotop"><i class="icon-arrow-up2"></i></a>
</div>

<script src="{{ asset('frontends/js/jquery.min.js') }}"></script>
<script src="{{ asset('frontends/js/jquery.easing.1.3.js') }}"></script>
<script src="{{ asset('frontends/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('frontends/js/jquery.waypoints.min.js') }}"></script>
<script src="{{ asset('frontends/js/jquery.flexslider-min.js') }}"></script>
<script src="{{ asset('frontends/js/jquery.magnific-popup.min.js') }}"></script>
<script src="{{ asset('frontends/js/magnific-popup-options.js') }}"></script>
<script src="{{ asset('frontends/js/jquery.countTo.js') }}"></script>
<script src="{{ asset('frontends/js/main.js') }}"></script>
</body>
</html>

