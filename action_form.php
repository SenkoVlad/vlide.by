<?php
if(isset($_POST['name']) && isset($_POST['phonenumber']) && isset($_POST['email']) && isset($_POST['address']) && isset($_POST['message']) )  {

    $to = 'byt1kip82@gmail.com'; //Почта получателя
    $subject = 'Обратный звонок';
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.$_POST['name'].'</p>
                    <p>Телефон: '.$_POST['phonenumber'].'</p>    
                    <p>Email: '.$_POST['email'].'</p> 
                    <p>Адрес: '.$_POST['address'].'</p> 
                    <p>Сообщение: '.$_POST['message'].'</p>                     
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Отправитель <mail@vlide.by>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers);
        // exit('<meta http-equiv="refresh" content="0; url=index.php" />');
        // echo $message;
}



?>