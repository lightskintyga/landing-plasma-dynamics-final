$(document).ready(function(){
	$('#sendForm').click(function(){
		// собираем данные с формы
		var user_name    = $('#nameForm').val();
		var user_phone   = $('#phoneForm').val();
		var text_comment = $('#descriptionForm').val();
		// отправляем данные
		$.ajax({
			url: "/sender.php", // куда отправляем
			type: "post", // метод передачи
			dataType: "json", // тип передачи данных
			data: { // что отправляем
				"nameForm":    user_name,
				"phoneForm":   user_phone,
				"descriptionForm": text_comment
			},
			// после получения ответа сервера
			success: function(data){
				$('.messages').html(data.result); // выводим ответ сервера
			}
		});
	});
});