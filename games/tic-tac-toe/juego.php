<?php
##echo var_dump($_POST);
session_start();

if (!isset($_POST["nombre"])) {
  header('Location: index.html');
  exit();
}
if ($_POST["accion"] == "crear-id") {
  # code...
  $_SESSION["jugador"] = "1";
  $id = random_int(1, 100000000);
  #echo "creaste una sala " . $id;
  $data = ["j1" => $_POST["nombre"]];
  $data_json = json_encode($data);
  file_put_contents($id . ".json", $data_json);
}
if ($_POST["accion"] == "unirse") {
  # code...
  $_SESSION["jugador"] = "2";
  $filename = $_POST["id-sala"] . ".json";
  if (file_exists($filename)) {
    $data_json = file_get_contents($filename);
    $data = json_decode($data_json);
    ##echo var_dump($data);
    if (!isset($data->j2)) {
      $data->j2 = $_POST["nombre"];
      $data_json = json_encode($data);
      file_put_contents($filename, $data_json);
      #echo "Te uniste a la sala " . $_POST["id-sala"] . " contra: " . $data->j1;
    } else {
      #echo "sala llena";
    }
  } else {
    #echo "La sala no existe";
  }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Gluten:wght@400;700&display=swap" rel="stylesheet">
  <title>tic tac toe</title>
</head>

<body class="no-margin body">
  <header class="header no-margin">
    <h1 class="header__h1 texto-centrado no-margin">tic tac toe</h1>
  </header>
  <h2 class="texto-centrado">Tu nombre:</h2>
  <h3 class="texto-centrado"><?= $_POST["nombre"] ?></h3>
  <h2 class="texto-centrado">Tu oponente:</h2>
  <h3 class="texto-centrado"><?= $_SESSION["oponente"] ?></h3>
  <div class="grid no-pading">
    <div id="uno"></div>
    <div id="dos"></div>
    <div id="tres"></div>
    <div id="cuatro"></div>
    <div id="cinco"></div>
    <div id="seis"></div>
    <div id="siete"></div>
    <div id="ocho"></div>
    <div id="nueve"></div>
  </div>
  <script src="juego.js"></script>
</body>

</html>