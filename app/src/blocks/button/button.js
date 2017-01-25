$(function() {
	var
		$button = $('.button'), // Делаем корректное отображение фона кнопки
		$btnSize = '500' // В зависимости от её длины
	;

	$button.each(function() {
		var $this = $(this);

		if ($this.css('width') > $btnSize) {
			$this.css('background-size', 'cover');
		}

		$(window).on('resize', function() {
			if ($this.css('width') > $btnSize) {
				$this.css('background-size', 'cover');
			} else {
				$this.css('background-size', 'auto');
			}
		});
	});
});