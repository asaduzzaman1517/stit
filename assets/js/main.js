(function($) {
	"use strict";

	$(document).ready(function() {
		/**-----------------------------
		 *  Navbar fix
		 * ---------------------------*/

		$(document).on(
			"click",
			"li.menu-item-has-children>a",
			function(e) {
				e.preventDefault();
			}
		);
		// Toogle class on navbar
		$(".sdy_brand__icon-box").on("click", function() {
			$(this).toggleClass("active");
			$(".sdy_menu").toggleClass("active");
		});
		$(".sdy_menu__close").on("click", function() {
			$(".sdy_menu").toggleClass("active");
			$(".sdy_brand__icon-box").toggleClass("active");
		});

		//Hero Slider
		var heroSlider = $(".sdy_hero__slider");
		if (heroSlider.length) {
			heroSlider.slick({
				slidesToShow: 1,
				mobileFirst: true,
				fade: true,
				cssEase: "linear",
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
							centerPadding: "0"
						}
					}
				]
			});
		}
	});
})(jQuery);
