$(function(){
	var 
		$aside = $('.js-aside'), // Боковое меню
		$toggle = $('.js-aside_toggle') // Гамбургер для бокового меню
	;
	
	
	// Формирование мобильного меню на основе десктопного
	var
		$arr = [{ // Исходный массив
			title: 'All Categories',
			icon: ' fa fa-reorder aside__toggle',
			items: []
		}]
	;

	var 
		$arrMain = $arr[0].items, // Обращение к свойству items исходного массива
		$arrLink, // Текущий тег A в меню
		$arrSubLink, // Текущий тег A в подменю
		$arrId // Последний элемент массива
	;
	
	$('.menu__item').each(function() { // Перебираем все пункты меню
		$arrLink = $(this).find('.menu__link'); // Забиваем ссылку текущего пункта
		
		$arrMain.push({ // Добавляем в массив объект со значениями ссылки
			name: $arrLink.text(),
			link: $arrLink.attr('href')
		});

		$arrSubLink = $(this).find('.menu__sub-link'); // Записываем все ссылки текущего пункта подменю

		if ($arrSubLink.length) { // Если там не пусто
			$arrId = $arrMain.length - 1; // То забиваем индекс последнего элемента
			$arrMain[$arrId].items = [{ // И пишем в него исходник для подменю
				title: $arrMain[$arrId].name,
				items: []
			}];

			$arrSubLink.each(function(i) { // С каждой ссылки подменю
				$arrMain[$arrId].items[0].items.push({ // Забиваем данные в массив
					name: $($arrSubLink[i]).text(),
					link: $($arrSubLink[i]).attr('href')
				});
			});
		}
	});
	// ==================================================


	$aside.multilevelpushmenu({ // Инициализация бокового меню
		menu: $arr,
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

	$(document).on('click', function(e) { // Скрытие бокового меню при клике вне него
		var target = e.target;

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
				$aside.multilevelpushmenu('redraw'); // Иначе корректно отображает при ресайзе
			}
		}
	});
});