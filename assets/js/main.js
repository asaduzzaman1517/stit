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
		//Hero Image Animation
		var hoverLayer = $('.st-hero-bg');

		var heroImgOne = $('.st-hero-bg__img-two');
		var heroImgTwo = $('.st-hero-bg__img-three');
		var heroImgThree = $('.st-hero-bg__img-four');
		var heroImgFour = $('.st-hero-bg__img-five');
		var heroImgFive = $('.st-hero-bg__img-six');
		var heroImgSix = $('.st-hero-bg__img-seven');

		//Animation Init
		hoverLayer.mousemove(function(e) {
			var valueX = (e.pageX * -1 / 112);
			var valueY = (e.pageY * -1 / 112);

			heroImgOne.css({
				'transform': 'translate3d('+valueX+'px,'+valueY+'px, 0)'
			})
		});
		hoverLayer.mousemove(function(e) {
			var valueX = (e.pageX * -1 / 115);
			var valueY = (e.pageY * -1 / 150);

			heroImgTwo.css({
				'transform': 'translate3d('+valueX+'px,'+valueY+'px, 0)'
			})
		});
		hoverLayer.mousemove(function(e) {
			var valueX = (e.pageX * -1 / 20);
			var valueY = (e.pageY * -1 / 25);

			heroImgThree.css({
				'transform': 'translate3d('+valueX+'px,'+valueY+'px, 0)'
			})
		});
		hoverLayer.mousemove(function(e) {
			var valueX = (e.pageX * -1 / 30);
			var valueY = (e.pageY * -1 / 35);

			heroImgFour.css({
				'transform': 'translate3d('+valueX+'px,'+valueY+'px, 0)'
			})
		});
		hoverLayer.mousemove(function(e) {
			var valueX = (e.pageX * -1 / 60);
			var valueY = (e.pageY * -1 / 65);

			heroImgFive.css({
				'transform': 'translate3d('+valueX+'px,'+valueY+'px, 0)'
			})
		});
		hoverLayer.mousemove(function(e) {
			var valueX = (e.pageX * -1 / 60);
			var valueY = (e.pageY * -1 / 65);

			heroImgSix.css({
				'transform': 'translate3d('+valueX+'px,'+valueY+'px, 0)'
			})
		});
	});
})(jQuery);
