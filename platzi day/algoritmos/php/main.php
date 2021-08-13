<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>hola mundo php</title>
</head>

<body>
  <?php

  function h($c = "", $p = "")
  {
    $clima =  array("Bogotá" => "frio", "Paris" => "caliente", "La Luna" => "templado");
    $ubicacion = array("Cartajena" => "Colombia", "Nueva York" => "EEUU", "La Luna" => "muy lejos");
    $turismo = array("Santa Marta" => "Mar", "Tokio" => "Super Nintendo world", "La Luna" => "El espacio");
    switch ($c) {
      case 'clima':
        echo array_search($p, $clima);
        break;
      case 'ubicacion':
        echo array_search($p, $ubicacion);
        break;
      case 'turismo':
        echo array_search($p, $turismo);
        break;
      default:
        echo "La Luna";
        break;
    }
  }
  h()
  ?>
</body>

</html>