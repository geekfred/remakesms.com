<?

// Fonction parse pour l'encodage des caractere en UTF8
function parse($valeur){
        return stripslashes(nl2br(utf8_decode($valeur)));
}


// Récupération des variable dans flash.
$sujetmsg = parse($_POST['sujet']);
$nomprenom = parse($_POST['nomprenom']);
$mail = parse($_POST['mail']);
$message = parse($_POST['msg']);
$contentmsg = "<b>Nombre: </b>".$nomprenom."<b><br />Correo: </b>".$mail."<b><br /><br />Comentario: <br /></b>".$message;

//Variable de reception
$sreception = "Gracias por escribirnos a Remake SMS";
$creception = "Gracias por escribirnos, su correo fue recibido satisfactoriamente.  <br><br> El
mismo será respondido a  la brevedad posible. <br><br> Atentamente, <br><br> Remake SMS.  ";



// Fonction mail
$email="todos@remakesms.com"; //Change the mail here
$sujet="Remake SMS : ".$sujetmsg." "; 
$headers = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\n"; 
$headers .= "From: ".$mail."\n";

//Header Reception
$headers2 = "MIME-Version: 1.0\n";
$headers2 .= "Content-type: text/html; charset=iso-8859-1\n"; 
$headers2 .= "From: ".$email."\n";


mail($email,$sujet,$contentmsg,$headers);
mail($mail,$sreception,$creception,$headers2);

?>