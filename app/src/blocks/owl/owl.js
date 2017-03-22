/* Слайдер на весь экран */
$(function() {
	$('.js-owl').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		dotsClass: 'owl__dots',
		dotClass: "owl__dot",
		nav: false,
		navText: ''
	});
});
/* ========== */
