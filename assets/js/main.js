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
		$(".st_brand__icon-box").on("click", function() {
			$(this).toggleClass("active");
			$(".st_menu").toggleClass("active");
		});
		$(".st_menu__close").on("click", function() {
			$(".st_menu").toggleClass("active");
			$(".st_brand__icon-box").toggleClass("active");
		});

		//Header Top slider
		var headerTop = $('.st-header-top__slider');
		if(headerTop.length) {
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
	});
})(jQuery);
