/* Боковое меню */
$(function() {
	var
		$aside = $('.aside'), // Боковое меню
		$list = $('.aside__list'), // Внутренний контейнер меню
		$link = $('.aside__link'), // Ссылки пунктов меню
		$subWrap = $('.aside__sub-wrap'), // Внешний контейнер подменю
		$sub = $('.aside__sub'), // Контейнер подменю
		$toggle = $('.toggle'), // Гамбургер
		$point = 480; // Брейкпоинт на мобильную версию

	/* Клик по гамбургеру в шапке */
	$toggle.on('click', function() {
		if (window.innerWidth < $point) {
			if ($(this).hasClass('toggle_arrow')) {
				makeToggleCross();
				hideSub();
			} else {
				toggleAside();
			}
		} else {
			toggleAside();
		}
	});
	/* ========== */

	/* Клик по пункту меню */
	$link.on('click', function(e) {
		var hasSub = $(this).attr('data-sub');
		if (!hasSub) return;

		e.preventDefault();

		var $this = $('#' + hasSub);
		if ($this.hasClass('aside__sub-wrap_visible')) {
			hideSub();
		} else {
			hideSub();
			$aside.addClass('aside_sub-open');
			$(this).addClass('aside__link_active');
			$this.addClass('aside__sub-wrap_visible');
			if (window.innerWidth < $point) {
				makeToggleArrow();
			}
		}
	});
	/* ========== */

	/* Клик вне меню и гамбургера */
	$(document).on('click', function(e) {
		var target = e.target;

		while (target.tagName != 'BODY') {
			if (target.classList.contains('aside') || target.classList.contains('toggle')) return;
			target = target.parentNode;
		}

		hideAside();
	});
	/* ========== */

	/* Инициализация кастомного скролла */
	$list.perfectScrollbar();
	$sub.perfectScrollbar();
	/* ========== */

	/* Ресайз */
	$(window).on('resize', function() {
		$list.perfectScrollbar('update');
		$sub.perfectScrollbar('update');

		if ($aside.hasClass('aside_sub-open')) {
			if (window.innerWidth < $point) {
				makeToggleArrow();
			} else {
				makeToggleCross();
			}
		}
	});
	/* ========== */

	/* Отключение скролла страницы пока курсор на меню */
	$aside.on('mousewheel', function(e) {
		e.preventDefault();
	});
	/* ========== */

	/* ФУНКЦИИ */

	// Сделать гамбургер стрелкой
	function makeToggleArrow() {
		$toggle
			.removeClass('toggle_active')
			.addClass('toggle_arrow');
	}

	// Сделать гамбургер крестом
	function makeToggleCross() {
		$toggle
			.removeClass('toggle_arrow')
			.addClass('toggle_active');
	}

	// Сбросить гамбургер
	function resetToggle() {
		$toggle.removeClass('toggle_arrow toggle_active')
	}

	// Скрыть подменю
	function hideSub() {
		$subWrap.removeClass('aside__sub-wrap_visible');
		$link.removeClass('aside__link_active');
		$aside.removeClass('aside_sub-open');
	}

	// Показать / скрыть меню
	function toggleAside() {
		hideSub();
		$aside.toggleClass('aside_visible');
		$toggle.toggleClass('toggle_active');
	}

	// Скрыть меню
	function hideAside() {
		hideSub();
		$aside.removeClass('aside_visible');
		resetToggle();
	}

	/* ========== */
});
/* ========== */
