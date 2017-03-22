/* Отображение значка корзины в зависимости от количества товаров */
$(function() {

	checkBag();

	// Проверка корзины
	function checkBag() {
		var
			bag = $('.icon-btn_bag'), // Корзина
			bagCount = bag.find('.icon-btn__count').text() // Количество товаров в корзине
		;

		if (bagCount > 0) {
			bag.addClass('icon-btn_full');
		} else {
			bag.removeClass('icon-btn_full');
		}
	}
});
/* ========== */
