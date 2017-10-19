<?php
$link = mysql_pconnect("localhost", "remake_wordpress", "15f976rr") or die("Could not connect");
mysql_select_db("remake_wordpress") or die("Could not select database");
 
$arr = array();
 
$rs = mysql_query("SELECT * FROM wp_options");
 
while($obj = mysql_fetch_object($rs)) {
$arr[] = $obj;
}
echo '{"members":'.json_encode($arr).'}';
die();
/*
//The json object is :
{"members":[{"id":"1","title":"Mr","firstname":"Peter","surname":"Ventouris"},{"id":"2","title":"Mr","firstname":"David","surname":"Dabel"},{"id":"3","title":"Mr","firstname":"John","surname":"Merkel"},{"id":"4","title":"Mr","firstname":"James","surname":"Eltons"}]}
*/
?>