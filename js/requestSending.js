function sendMail() {
	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "plasmadyntest@gmail.com",
		Password : "54509CCC21B09CF5816E83D3046F1A899405",
		To : 'daniilivanov7010@gmail.com',
		From : "plasmadyntest@gmail.com",
		Subject : "Новое обращение с сайта plasma-dynamics.ru",
		Body : "ФИО: " + document.getElementById("nameForm").value
			+ "<br> Телефон: " + document.getElementById("phoneForm").value
			+ "<br> Текст: " + document.getElementById("descriptionForm").value
	}).then(
		message => alert("Форма отправлена!")
	);
}

window.sendMail = sendMail;