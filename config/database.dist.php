<?php
$config = [
    'host' => 'mysql:host=127.0.0.1;dbname=mydbname',
    'user' => 'username',
    'password' => 'password',
];

global $config;
$pdo = new PDO($config['host'],
    $config['user'],
    $config['password']);
return $pdo;
