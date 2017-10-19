<?php
/*
if(isset($_POST['email'])) {
     
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "freddyrivero@gmail.com";
    $email_subject = "Tiesto - Polar";
     
     
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
     
    // validation expected data exists
    if(!isset($_POST['first_name']) ||
        !isset($_POST['last_name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['telephone']) ||
        !isset($_POST['comments'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
	$email_polar = "tiesto@polarlight.com.ve";
    $full_name = "Polar Light";
    $first_name = $_POST['first_name']; // required
    $last_name = $_POST['last_name']; // required
	$email_from = $full_name . "<" . $email_polar . ">";
    $telephone = $_POST['telephone']; // not required
    $comments = $_POST['comments']; // required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
  if(!preg_match($string_exp,$last_name)) {
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
  }
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
     
     
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
}
*/
?>
<?php
$email_polar = "tiesto@polarlight.com.ve";
    $full_name = "Polar Light";
    $first_name = $_POST['first_name']; // required
    $last_name = $_POST['last_name']; // required
	$email_from = $full_name . "<" . $email_polar . ">";
	
$headers = 'From: ' . $email_from.'\r\n';

// Always set content-type when sending HTML email
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";

$body = "<HTML><BODY><CENTER>
<div style='text-align:center;'>
<a href='http://www.remakesms.com/tiestopolarlight/'><IMG SRC='http://www.remakesms.com/tiestopolarlight/tiesto.jpg'></a>
</div>
 <div>
  <p style='font-size:14px;color:black;font-family:Verdana'>Con Polar Light La Rumba siempre ON</p>
  <p style='text-align:center;font-size:12px;color:black;font-family:Verdana'>Polar Light llega oficialmente a las redes sociales
para garantizar que los venezolanos 
tenemos La Rumba Siempre ON

Siguenos en <a href='http://www.twitter.com/PolarLightVE'>@PolarLightVE</a>
Hazte fan en http://www.facebook.com/PolarLightVe</p>
<p style='text-align:center;font-size:10px;color:black;font-family:Verdana'>NOTA: este es un mensaje enviado por sistema, por favor no responda al mismo ya que no sera atendido por ninguna persona en la institucion. Notificacion automatica: Este mensaje y cualquier archivo que se adjunte contiene informacion privilegiada y confidencial. Es para uso exclusivo del destinatario. Si usted ha recibido esta comunicacion por error, por favor avisenos inmediatamente. Ud. ha recibido este correo porque pertenece a nuestra base de datos, si no desea seguir recibiendo informacion haga click <a href='mailto:produccion@remakesms.com'>aqui</a>.</p>
</div>
</CENTER></BODY>
</HTML>";

mail("julio@remakesms.com", "Polar Ligth, la Rumba Siempre ON", $body, $headers);

?>