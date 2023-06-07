<?php
    $fName = 'Имя: '.$_POST['name'].' <br />';
    $fPhone =  'Почта: '.$_POST['phone'].' <br />';
    $fMessage =  'Сообщение: '.$_POST['description'].' <br />';
    $AllInOne =  $fName.$fPhone.$fMessage;
    $to = 'daniilivanov7010@gmail.com';
    $headers="From: plasma-dynamics.ru <site@plasma-dynamics.ru>\nReply-to:info@plasma-dynamics.ru\nContent-Type: text/html; charset=\"utf-8\"\n";
    // функция, которая отправляет наше письмо
    mail($to, 'Свяжитесь с нами', $AllInOne, $headers);

?>