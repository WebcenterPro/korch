$(function() {
	var
		$aside = $('.aside'), // Боковое меню
		$sub = $('.aside__sub'), // Подменю
		$toggle = $('.toggle'); // Гамбургер

	/* Клик по гамбургеру в шапке */
	$toggle.on('click', function() {
		$sub.removeClass('aside__sub_visible');
		$aside.toggleClass('aside_visible');
		$toggle.toggleClass('toggle_active');
		$('.aside__link').removeClass('aside__link_active');

	});
	/* ========== */

	/* Клик по пункту меню */
	$('.aside__link').on('click', function(e) {
		var hasSub = $(this).attr('data-sub');

		if (hasSub) {
			e.preventDefault();

			var $this = $('#' + hasSub);
			if ($this.hasClass('aside__sub_visible')) {
				$this.removeClass('aside__sub_visible');
				$(this).removeClass('aside__link_active');
			} else {
				$sub.removeClass('aside__sub_visible');
				$this.addClass('aside__sub_visible');
				$('.aside__link').removeClass('aside__link_active');
				$(this).addClass('aside__link_active');
			}
		}
	});
	/* ========== */

	/* Клик вне меню и гамбургера */
	$(document).on('click', function(e) {
		var event = e.target;

		while (event.tagName != 'BODY') {
			if (event.classList.contains('aside') || event.classList.contains('toggle')) return;
			event = event.parentNode;
		}

		$sub.removeClass('aside__sub_visible');
		$aside.removeClass('aside_visible');
		$toggle.removeClass('toggle_active');
		$('.aside__link').removeClass('aside__link_active');
	});
	/* ========== */
});
