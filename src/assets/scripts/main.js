import $ from 'jquery'

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
