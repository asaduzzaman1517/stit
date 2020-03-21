(function($) {
    "use strict";

    $(document).ready(function() {
        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/

        $(document).on("click", "li.menu-item-has-children>a", function(e) {
            e.preventDefault();
        });
        // Toogle class on navbar
        $(".st_brand__icon-box").on("click", function() {
            $(this).toggleClass("active");
            $(".st_menu").toggleClass("active");
        });
        $(".st_menu__close").on("click", function() {
            $(".st_menu").toggleClass("active");
            $(".st_brand__icon-box").toggleClass("active");
        });

        //Header Top slider
        var headerTop = $(".st-header-top__slider");
        if (headerTop.length) {
            headerTop.slick({
                slidesToShow: 1,
                mobileFirst: true,
                autoplay: true,
                fade: true,
                autoplaySpeed: 8000,
                prevArrow: '<i class="fas fa-angle-left slick-arrow-prev"></i>',
                nextArrow: '<i class="fas fa-angle-right slick-arrow-next"></i>'
            });
        }
        //Service Slider
        var servSlider = $(".st-service-slider");
        if (servSlider.length) {
            servSlider.slick({
                slidesToShow: 1,
                slideToScroll: 1,
                mobileFirst: true,
                prevArrow:
                    '<i class="fas fa-arrow-left serv-arrow serv-arrow-prev"></i>',
                nextArrow:
                    '<i class="fas fa-arrow-right serv-arrow serv-arrow-next"></i>',
                responsive: [
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 1365,
                        settings: {
                            slidesToShow: 4
                        }
                    }
                ]
            });
        }
        //Feedback Slider
        var feedFor = $(".st-feed-for");
        var feedNav = $(".st-feed-nav");
        if (feedFor.length) {
            feedFor.slick({
                mobileFirst: true,
                slidesToShow: 1,
                slideToScroll: 1,
                arrows: false,
                asNavFor: feedNav,
                fade: true
            });
        }
        if (feedNav.length) {
            feedNav.slick({
                mobileFirst: true,
                slidesToShow: 1,
                slideToScroll: 1,
                asNavFor: feedFor,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            arrows: true,
                            prevArrow:
                                '<i class="fas fa-arrow-left feed-arrow feed-arrow-prev"></i>',
                            nextArrow:
                                '<i class="fas fa-arrow-right feed-arrow feed-arrow-next"></i>'
                        }
                    }
                ]
            });
        }

        //BLog Slider
        var blogSlide = $(".st-blog__img-slider");
        if (blogSlide.length) {
            blogSlide.slick({
                mobileFirst: true,
                slidesToShow: 1,
                slideToScroll: 1,
                fade: true,
                prevArrow:
                    '<i class="fas fa-arrow-left blog-arrow blog-arrow-prev"></i>',
                nextArrow:
                    '<i class="fas fa-arrow-right blog-arrow blog-arrow-next"></i>'
            });
        }
        //Hero Image Animation
        var hoverLayer = $(".st-hero-bg");

        var heroImgOne = $(".st-hero-bg__img-two");
        var heroImgTwo = $(".st-hero-bg__img-three");
        var heroImgThree = $(".st-hero-bg__img-four");
        var heroImgFour = $(".st-hero-bg__img-five");
        var heroImgFive = $(".st-hero-bg__img-six");
        var heroImgSix = $(".st-hero-bg__img-seven");

        //Animation Init
        hoverLayer.mousemove(function(e) {
            var valueX = (e.pageX * -1) / 60;
            var valueY = (e.pageY * -1) / 80;

            heroImgOne.css({
                transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
            });
        });
        hoverLayer.mousemove(function(e) {
            var valueX = (e.pageX * -1) / 115;
            var valueY = (e.pageY * -1) / 150;

            heroImgTwo.css({
                transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
            });
        });
        hoverLayer.mousemove(function(e) {
            var valueX = (e.pageX * -1) / 20;
            var valueY = (e.pageY * -1) / 25;

            heroImgThree.css({
                transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
            });
        });
        hoverLayer.mousemove(function(e) {
            var valueX = (e.pageX * -1) / 30;
            var valueY = (e.pageY * -1) / 35;

            heroImgFour.css({
                transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
            });
        });
        hoverLayer.mousemove(function(e) {
            var valueX = (e.pageX * -1) / 60;
            var valueY = (e.pageY * -1) / 65;

            heroImgFive.css({
                transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
            });
        });
        hoverLayer.mousemove(function(e) {
            var valueX = (e.pageX * -1) / 60;
            var valueY = (e.pageY * -1) / 65;

            heroImgSix.css({
                transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
            });
        });

        //Video Popup
        $(".st-video-play").magnificPopup({
            items: {
                src: "https://www.youtube.com/watch?v=kshIWIc15yg"
            },
            type: "iframe",
            iframe: {
                markup:
                    '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    "</div>",
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "//www.youtube.com/embed/kshIWIc15yg"
                    }
                },
                srcAction: "iframe_src"
            }
        });

        // back to top
        $(document).on("click", ".back-to-top", function() {
            $("html,body").animate(
                {
                    scrollTop: 0
                },
                2000
            );
        });

        //Gallery Filter
        var filterizd = $(".filtr-container");
        if (filterizd.length) {
            filterizd.filterizr({
                //options object
                layout: "sameWidth",
                gutterPixels: 20
            });
        }

        $(".st-g-filter__link").on("click", function() {
            $(this).removeAttr("href");
        });
        $(".st-g-filter .st-g-filter__item").on("click", function() {
            $(this)
                .toggleClass("active")
                .siblings()
                .removeClass("active");
        });

        //Image Upload
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $("#imagePreview").css(
                        "background-image",
                        "url(" + e.target.result + ")"
                    );
                    $("#imagePreview").hide();
                    $("#imagePreview").fadeIn(650);
                };
                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#imageUpload").change(function() {
            readURL(this);
        });
    });
})(jQuery);

var lastScrollTop = "";
$(window).on("scroll", function() {
    var st = $(this).scrollTop();
    lastScrollTop = st;

    var ScrollTop = $(".back-to-top");
    if ($(window).scrollTop() > 3000) {
        ScrollTop.fadeIn(1000);
    } else {
        ScrollTop.fadeOut(1000);
    }
});

// Parallax Plugin initialization
window.onload = function() {
    lax.setup(); // init

    const updateLax = () => {
        lax.update(window.scrollY);
        window.requestAnimationFrame(updateLax);
    };

    window.requestAnimationFrame(updateLax);
};
