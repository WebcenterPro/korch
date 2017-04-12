/* Модалки */
$(function() {
	var
		sign = $('.js-sign'), // Модальное окно входа / регистрации
		
		signIn = sign.find('.sign__wrap_in'), // Контейнер для входа
		signUp = sign.find('.sign__wrap_up'), // Контейнер для регистрации
		signForgot = sign.find('.sign__wrap_forgot'), // Контейнер для забытого пароля
		
		signLinkIn = sign.find('.js-sign__link_in'), // Ссылка на контейнер для входа
		signLinkUp = sign.find('.js-sign__link_up'), // Ссылка на контейнер для регистрации
		signLinkForgot = sign.find('.js-sign__link_forgot'), // Ссылка на контейнер для забытого пароля

		signDelay = 300, // Скорость смены контейнеров

		formForgot = sign.find('.js-sign__form_forgot'), // Форма для забытого пароля

		$input = 'input__field', // Класс инпута
		$inputFillClass = 'input__field_fill', // Класс заполненного инпута

		$header = $('.header') // Шапка
	;

	sign.on('show.bs.modal', function() { // Фикс прыгающей шапки
		if (document.body.scrollHeight != document.body.offsetHeight) {
			$header.css('padding-right', '17px');
		}
	});

	sign.on('shown.bs.modal', function() { // Фокус при открытии модалки
		$(this).find('input[type="text"]').each(function() {
			if ($(this).val()) {
				$(this).addClass($inputFillClass);
			}
		});
		$(this).find('input[type="text"]:first').focus();
	});

	sign.on('hidden.bs.modal', function() { // При закрытии модалки возвращается контейнер входа и очищаются инпуты
		signIn.slideDown();
		signUp.slideUp();
		signForgot.slideUp();

		$(this)
			.find('.' + $input)
			.val('')
			.removeClass($inputFillClass);

		$header.css('padding-right', '0');
	});

	// Смена контейнеров при клике на ссылки
	signLinkIn.on('click', function() {
		signIn.slideDown(signDelay);
		signUp.slideUp(signDelay);
		signForgot.slideUp(signDelay);
		setTimeout(function() {
			signIn.find('input:first').focus();
		}, signDelay);
	});

	signLinkUp.on('click', function() {
		signIn.slideUp(signDelay);
		signUp.slideDown(signDelay);
		signForgot.slideUp(signDelay);
		setTimeout(function() {
			signUp.find('input:first').focus();
		}, signDelay);
	});

	signLinkForgot.on('click', function() {
		signIn.slideUp(signDelay);
		signUp.slideUp(signDelay);
		signForgot.slideDown(signDelay);
		setTimeout(function() {
			signForgot.find('input:first').focus();
		}, signDelay);
	});
	// =====================================
	
	formForgot.on('submit', function() { // Проверка на заполненность любого поля в восст. пароля
		var bool = false;

		$(this)
			.find('.' + $input)
			.each(function() {
				if ($(this).val()) {
					bool = true;
				}
			});

		if (!bool) {
			$(this)
				.find('.' + $input)[0]
				.focus();
			return false;
		}
	});

	function getScroll(a) {
		var d = document,
			b = d.body,
			e = d.documentElement,
			c = "client" + a;
		a = "scroll" + a;
		return /CSS/.test(d.compatMode)? (e[c]< e[a]) : (b[c]< b[a])
	}
});
/* ========== */
