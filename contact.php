<?php
header('content-type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');


$valid = true;
$errors = [];

$user = htmlentities($_POST['user']);
$mail = htmlentities($_POST['mail']);
$message = htmlentities($_POST['message']);


if (!isset($_POST['type']) || empty($_POST['type'])) {
    $errors['type'] = '<span class="errors">Non sélectionné</span>';
    $valid = false;
}
if (!isset($user) || empty($user)) {
    $errors['user'] = '<span class="errors">Non saisi</span>';
    $valid = false;
} elseif (strlen($user) < 2) {
    $errors['user'] = '<span class="errors">Trop court</span>';
    $valid = false;
} elseif (strlen($user) > 128) {
    $errors['user'] = '<span class="errors">Trop long</span>';
    $valid = false;
}

if (!isset($mail) || empty($mail)) {
    $errors['mail'] = '<span class="errors">Non saisi</span>';
    $valid = false;
} elseif (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
    $errors['mail'] = '<span class="errors">Format incorrect</span>';
    $valid = false;
}

if (!isset($message) || empty($message)) {
    $errors['message'] = '<br><span class="errors">Non saisi</span>';
    $valid = false;
} elseif (strlen($message) < 4) {
    $errors['message'] = '<span class="errors">Trop court</span>';
    $valid = false;
} elseif (strlen($message) > 256) {
    $errors['message'] = '<span class="errors">Trop long</span>';
    $valid = false;
}

$errors['valid'] = $valid;
echo(json_encode($errors));

if ($valid) {
    // Send email (doesn't work on local servers)
    $headers = 'From: messages@productshow.io' . "\r\n" .
        'Reply-To: messages@productshow.io' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail('contact@productshow.io', $type . ' of ' . $user, $message, $headers);
}
