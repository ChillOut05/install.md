import $ from 'jquery'

$(document).ready(function() {
	var $status = $('.gallery__slide-count span');
	var $slickElement = $('.gallery__slider-wrap');

	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.gallery__info').find('.gallery__slide-count span').text(i + ' / ' + slick.slideCount);
	});

	$('.gallery__slider-wrap').on('setPosition', function () {
		$(this).find('.slick-slide').height('auto');
		var slickTrack = $(this).find('.slick-track');
		var slickTrackHeight = $(slickTrack).height();
		$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
	});

	$('.gallery__slider-wrap').slick({
		asNavFor: '.gallery__caption-list',
		prevArrow: $('.gallery__slider-prev'),
		nextArrow: $('.gallery__slider-next')
	});

	$('.gallery__caption-list').slick({
		asNavFor: '.gallery__slider-wrap',
		arrows: false,
		fade: true,
		draggable: false
	});

	// $('.reviews__comment-wrap').slick({
	// 	fade: true,
	// 	asNavFor: '.reviews__reviewer',
	// 	nextArrow: $('.reviews__next'),
	// 	prevArrow: $('.none'),
	// 	draggable: false
	// });

	// $('.reviews__reviewer').slick({
	// 	slide: '.reviewer',
	// 	asNavFor: '.reviews__comment-wrap',
	// 	arrows: false,
	// 	fade: true,
	// 	draggable: false
	// });

	// // sticky header reveal
	// if ($('.header').length && $(window).width() > 500) {
	// 	(function () {

	// 		var headerSticky = function headerSticky() {
	// 			var showAt = void 0;
	// 			var $el = $('.header');

	// 			if ($('.partners').length) {
	// 				showAt = $('.partners').outerHeight(true) + $('.partners').offset().top;
	// 			}

	// 			if ($(window).scrollTop() > showAt) {
	// 				$el.addClass('header_stick');
	// 			} else {
	// 				$el.removeClass('header_stick');
	// 			}
	// 		};

	// 		headerSticky();

	// 		$(window).on('scroll', function (e) {

	// 			headerSticky();
	// 		});
	// 	})();
	// }
});
