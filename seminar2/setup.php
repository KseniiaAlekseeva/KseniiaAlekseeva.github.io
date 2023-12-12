<?php

$pdo = new PDO('sqlite:chat.db');
// $pdo->exec('DROP TABLE messages');
$pdo->exec('CREATE TABLE messages (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, message VARCHAR(250))');