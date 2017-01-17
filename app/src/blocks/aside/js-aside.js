$(document).ready(function(){
	var $aside = $('.js-aside'); // Боковое меню
	var $toggle = $('.js-aside_toggle'); // Гамбургер для бокового меню

	/*var arrMenu = [
		{
			title: 'All Categories',
			icon: ' fa fa-reorder aside__toggle',
			items: [
				{
					name: 'Devices',
					link: '#',
					items: [{
						title: 'Devices',
						icon: ' fa fa-laptop',
						items: [
							{
								name: 'Mobile Phones',
								link: '#'
							},
							{
								name: 'Televisions',
								link: '#'
							},
							{
								name: 'Cameras',
								link: '#'
							}
						]
					}]
				},
				{
					name: 'Magazines',
					link: '#'
				},
				{
					name: 'Collections',
					link: '#'
				},
				{
					name: 'Credits',
					link: '#'
				}
			]
		}
	];*/

	$aside.multilevelpushmenu({ // Инициализация бокового меню
		//menu: arrMenu,
		collapsed: true,
		fullCollapse: true,
		menuHeight: '100%',
		menuWidth: '60%',

		// Скрытие гамбургера, пока видно меню. Исправляет косяк с отображением
		onExpandMenuStart: function() {
			$($toggle).addClass('toggle_hidden');
		},
		onCollapseMenuEnd: function() {
			if ($aside.css('width') == '0px') {
				$($toggle).removeClass('toggle_hidden');
			}
		}
		// ====================================================================
	});

	$toggle.on('click', function() { // Обработка клика по гамбургеру
		$aside.multilevelpushmenu('expand');
	});

	$(document).on('click', function() { // Скрытие бокового меню при клике вне него
		var target = event.target;

		while (target.tagName != 'BODY') {
			if (target.getAttribute('id') == 'menu') return;
			target = target.parentNode;
		}

		if (target.getAttribute('id') != 'menu') {
			$aside.multilevelpushmenu('collapse');
		}
	});

	$(window).on('resize', function() { // Обработка ресайза
		if ($aside.css('width') != '0') {
			if (window.innerWidth > '767') {
				$aside.multilevelpushmenu('collapse'); // Скрывает меню при ресайзе с мобилы до планшета
			} else {
				$aside.multilevelpushmenu('redraw'); // Корректное отображение при ресайзе
			}
		}
	});
});