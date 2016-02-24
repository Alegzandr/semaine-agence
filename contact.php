<?php
header('content-type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');


$valid = true;
$errors = [];

$user = htmlentities($_POST['user']);
$mail = htmlentities($_POST['mail']);
$message = htmlentities($_POST['message']);

if (!isset($user) || empty($user)) {
    $errors['user'] = '<span class="errors">Non saisi</span>';
    $valid = false;
}

if (!isset($mail) || empty($mail)) {
    $errors['mail'] = '<span class="errors">Non saisi</span>';
    $valid = false;
} elseif (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
    $errors['mail'] = '<span class="errors">Format incorrect</span>';
    $valid = false;
}

if ($message === 'Votre message.' || !isset($message) || empty($message)) {
    $errors['message'] = '<br><span class="errors">Non saisi</span>';
    $valid = false;
}

$errors['valid'] = $valid;

if ($valid) {
    // Send email
} else {
    echo(json_encode($errors));
}
