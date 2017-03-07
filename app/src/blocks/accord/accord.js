$(function() {
	var
		isMoving = false, // Отображает, находится ли аккордеон в движении
		accordHead = $('.accord__head'), // Шапки панелей аккордеона
		accordBody = $('.accord__body'), // Тело панелей аккордеона
		headActiveClass = 'accord__head_active' // Класс активной шапки
	;

	accordBody.perfectScrollbar(); // Кастомный ползунок

	accordHead.on('click', function() { // Действия при клике на шапку панели
		if (isMoving) return;

		var hasOpened = $(this).hasClass(headActiveClass);
		accordHead.removeClass(headActiveClass);

		if (!hasOpened) {
			$(this).addClass(headActiveClass);
		}

		isMoving = true;
		setTimeout(function() {
			isMoving = false;
			accordBody.perfectScrollbar('update');
		}, 350);
	});

	$(window).on('resize', function() {
		accordBody.perfectScrollbar('update');
	});
});