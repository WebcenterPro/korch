$(function() {
	var
		bagCount = $('.bag__count') // Количество товаров в корзине
	;

	hideBagCount();
	$(window).on('resize', hideBagCount);

	function hideBagCount() { // На мобильниках убираем нулевое количество товаров в корзине
		if (window.innerWidth < 480) {
			if (bagCount.text() == '0') {
				bagCount.css('display', 'none');
			} else {
				bagCount.css('display', 'inline');
			}
		} else {
			bagCount.css('display', 'inline');
		}
	}
});