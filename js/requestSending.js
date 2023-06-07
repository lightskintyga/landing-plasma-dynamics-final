$('#request__form').submit(function(e){
	var popup = $('#popup_text');
	e.preventDefault();
	$.ajax({
		url: "/sender.php",
		type: "POST",
		data: $('#request__form').serialize(),
		success: function(response) {
			//обработка успешной отправки
			popup.html('Ваше сообщение успешно отправлено!').delay(2000).fadeOut(1000);

			$('#nameForm').val('');
			$('#phoneForm').val('');
			$('#descriptionForm').val('');
		},
		error: function(response) {
			//обработка ошибок при отправке
		}
	});
});