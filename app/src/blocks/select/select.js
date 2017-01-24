$(function() {
	$('.select').each(function () {

		var
			$this = $(this),
			$selectWrap = 'l-select',
			$selectClass = 'select__style',
			$activeClass = 'select__style_active',
			$optionsClass = 'select__list',
			numberOfOptions = $(this).children('option').length;

		$this.addClass('select_hidden');
		$this.wrap('<div class="' + $selectWrap + '"></div>');
		$this.after('<div class="' + $selectClass + '"></div>');
		var $styledSelect = $this.next('.' + $selectClass);
		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />', {
			'class': 'select__list'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function (e) {
			e.stopPropagation();
			$('.' + $activeClass).each(function () {
				$(this).removeClass($activeClass).next('.' + $optionsClass).hide();
			});
			$(this).toggleClass($activeClass).next('.' + $optionsClass).toggle();
		});

		$listItems.click(function (e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass($activeClass);
			$this.val($(this).attr('rel'));
			$list.hide();
		});

		$(document).click(function () {
			$styledSelect.removeClass($activeClass);
			$list.hide();
		});

	});
});