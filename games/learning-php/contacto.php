<?php
session_start();

$todo_ok = true;

# echo var_dump($_SESSION);
if (!isset($_POST["nombre"]) || $_POST["nombre"] == "") {
  echo "no escribiste tu nombre";
  $_SESSION["nombre"] = "no escribiste tu nombre";
  header('Location: /learning-php/index.php');
  $todo_ok = false;
}

# echo var_dump($_SESSION);
if (!isset($_POST["email"]) || $_POST["email"] == "") {
  echo "no escribiste tu email";
  $_SESSION["email"] = "no escribiste tu email";
  header('Location: /learning-php/index.php');
  $todo_ok = false;
}

# echo var_dump($_SESSION);
if (!isset($_POST["telefono"]) || $_POST["telefono"] == "") {
  echo "no escribiste tu telefono";
  $_SESSION["telefono"] = "no escribiste tu telefono";
  header('Location: /learning-php/index.php');
  $todo_ok = false;
}

if ($todo_ok) {
  # echo json_encode($_POST);
  $data_json = json_encode($_POST);
  file_put_contents("data.json", $data_json);
}
