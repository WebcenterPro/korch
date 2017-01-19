$(function() {
	$('#signIn').on('shown.bs.modal', function() {
		$(this).find('input:first').focus();
	});
});