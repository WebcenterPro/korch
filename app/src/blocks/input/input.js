/* Инпуты */
$(function() {
	var 
		$input = $('.input__field'), // Стандартные инпуты
		$inputFillClass = 'input__field_fill' // Класс заполненного инпута
	;
	
	$input.on('change', function() { // Движение плейсхолдера
		if ($(this).val()) {
			$(this).addClass($inputFillClass);
		} else {
			$(this).removeClass($inputFillClass);
		}
	});
});
/* ========== */
