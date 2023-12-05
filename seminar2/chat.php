<?php
$file = fopen('chat.txt', 'a+');

if (isset($_GET['message'])) {
    $message = strip_tags($_GET['message']);
    fputs($file, $message . "\n");
    echo("ok");
    die();
}

//$messages = file_get_contents('chat.txt');
//echo $messages;

$strings = [];

while (!feof($file)) {
   $strings[] = fgets($file);
}

$array = array_reverse($strings);
for($i = 1; $i < 11; $i++) {
	echo $array[$i];
}


?>