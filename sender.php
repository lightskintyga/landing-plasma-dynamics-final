<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $description = $_POST['description'];
    $email = plasmadynamicsrequests@gmail.com;

	$to = "daniilivanov7010@gmail.com";
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Клиент: $name /n
    Телефон: $phone /n
    Описание: $description";
	mail($to, $subject, $msg, "From: $from ");

?>

<p>Привет, форма отправлена</p>
