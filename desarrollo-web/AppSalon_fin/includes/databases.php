<?php

$db = mysqli_connect("Localhost", "root", "NewPassword", "appsalon");

if(!$db){
    echo "Error en la conexion";
    exit;
}
