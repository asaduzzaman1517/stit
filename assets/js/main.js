(function($) {
    "use strict";

    $(document).ready(function() {
        // Toogle class on navbar
        $(".kdv_brand__icon-box").on("click", function() {
            $(this).toggleClass("active");
            $(".kdv_menu").toggleClass("active");
        });
        $(".kdv_menu__close").on("click", function() {
            $(".kdv_menu").toggleClass("active");
            $(".kdv_brand__icon-box").toggleClass("active");
        });

        //Hero Slider
        var heroSlider = $(".kdv_hero__slider");
        if (heroSlider.length) {
            heroSlider.slick({
                slidesToShow: 1,
                mobileFirst: true,
                fade: true,
                cssEase: 'linear',
                arrows: false,
                autoplay: true,
                autoplaySpeed: 8000,
                speed: 800,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                            fade: false,
                            centerMode: true,
                            centerPadding: '0'
                        }
                    }
                ]
            });
        }
    });
})(jQuery);
