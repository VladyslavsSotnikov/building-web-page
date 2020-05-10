<?php
    if ( !empty($_POST) && 
        trim($_POST['name']) != '' &&
        trim($_POST['email']) != '' &&
        trim($_POST['phone']) != '' &&
        trim($_POST['message']) != '' &&
        $_POST['check'] != 'false'
        ) {
        $message =  "Вам пришло новое сообщение с сайта: \n" .
                    "Имя отправителя: " . $_POST['name'] . "\n" .
                    "Email отправителя: ". $_POST['email'] . "\n" .
                    "Телефон отправителя: ". $_POST['phone'] . "\n" .
                    "Сообщение: ". $_POST['message'];

        $mail = mail( 'vlad.sotnikov05@gmail.com', "Сообщение с сайта! MMA", $message );
        echo 'Formularz wysłano';
    }
?>