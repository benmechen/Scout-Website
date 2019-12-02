<?php

require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

// Enable debug output
$mail->SMTPDebug = 3;

// Tell the mailer to use SMTP
$mail->isSMTP();

// Information based on the following documentation ttp://www.easy-smtp.com/smtp
$mail->Host = 'mail.1stlytchettscoutgroup.co.uk';
$mail->SMTPAuth = true;
$mail->Username = 'server@1stlytchettscoutgroup.co.uk';
$mail->Password = 'LytchettServer10';
$mail->SMTPSecure = 'null';
$mail->Port = 25;

// Set the from address
$mail->From = 'server@1stlytchettscoutgroup.co.uk';
$mail->FromName = 'Test Mailer';

// Set the to address
$mail->addAddress('benm123@yahoo.com');

// Set the message subject
$mail->Subject = 'Test Email';

// Set the message body
$mail->Body = 'This is a test email';

// Attempt to send the email
if(!$mail->send()) {
    // Something went wrong
    echo "[ERROR] Error encountered sending message.<br/>";
    echo "Mailer error: " . $mail->ErrorInfo;
} else {
    // Message sent successfully !
    echo "[SUCCESS] Message sent.";
}

?>