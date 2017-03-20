$(function() {
	var owlMore = $('.js-owl-more'); // Контейнер слайдера

	owlMore.owlCarousel({
		items: 4,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: false,
		nav: false,
		navText: '',
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			}
		}
	});

	owlMore
		.find('.owl-prev')
		.append('<i class="fa fa-angle-left owl-more__arrow"></i>');

	owlMore
		.find('.owl-next')
		.append('<i class="fa fa-angle-right owl-more__arrow"></i>');
});