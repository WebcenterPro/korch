$(function() {
	var
		$productColor = $('.product__color'), // Выборка всех блоков с цветом
		$productColorActiveClass = 'product__color_active' // Класс активного блока
	;

	$productColor.on('click', function() { // Обрабатываем клик по блоку текста
		$productColor.removeClass($productColorActiveClass);
		$(this).addClass($productColorActiveClass);
	});
});