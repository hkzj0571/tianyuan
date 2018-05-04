<div class="container-wrap">
    <footer id="fh5co-footer" role="contentinfo">
        <div class="row">
            <div class="col-md-3 fh5co-widget">
                <p>这里写一点装逼的话 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid beatae blanditiis consectetur consequatur corporis ducimus eaque earum eius esse impedit, iusto modi natus officia placeat quo repellendus, sunt voluptas?</p>
            </div>
            <div class="col-md-3 col-md-push-1">
                <h4>Latest Posts</h4>
                <ul class="fh5co-footer-links">
                    <li><a href="#">Amazing Templates</a></li>
                    <li><a href="#">100+ Free Download Templates</a></li>
                    <li><a href="#">Neat is now available</a></li>
                    <li><a href="#">Download 1000+ icons</a></li>
                    <li><a href="#">Big Deal for this month of March, Join Us here</a></li>
                </ul>
            </div>

            <div class="col-md-3 col-md-push-1">
                <h4>关于我们</h4>
                @php
                    $pages = \App\Models\Page::all();
                @endphp
                <ul class="fh5co-footer-links">
                    @foreach($pages as $page)
                        <li><a href="{{ route('pages',[$page->id]) }}">{{ $page->title }}</a></li>
                    @endforeach
                </ul>
            </div>

            <div class="col-md-3">
                <h4>联系我们</h4>
                <ul class="fh5co-footer-links">
                    <li>198 West 21th Street, <br> Suite 721 New York NY 10016</li>
                    <li><a href="tel://1234567920">+ 1235 2355 98</a></li>
                    <li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
                    <li><a href="#">gettemplates.co</a></li>
                </ul>
            </div>

        </div>

        <div class="row copyright">
            <div class="col-md-12 text-center">
                <p>
                    <small class="block">&copy; 2016 Free HTML5. All Rights Reserved.More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></small>
                </p>
                <p>
                <ul class="fh5co-social-icons">
                    <li><a href="#"><i class="icon-twitter"></i></a></li>
                    <li><a href="#"><i class="icon-facebook"></i></a></li>
                    <li><a href="#"><i class="icon-linkedin"></i></a></li>
                    <li><a href="#"><i class="icon-dribbble"></i></a></li>
                </ul>
                </p>
            </div>
        </div>
    </footer>
</div>
