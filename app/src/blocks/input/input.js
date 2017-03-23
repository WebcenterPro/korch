/* Инпуты */
$(function() {
	var 
		$input = $('.input__field'), // Стандартные инпуты
		$inputFillClass = 'input__field_fill' // Класс заполненного инпута
	;
	
	$input.on('input', function() { // Движение плейсхолдера
		if ($(this).val()) {
			$(this).addClass($inputFillClass);
		} else {
			$(this).removeClass($inputFillClass);
		}
	});
});
/* ========== */
