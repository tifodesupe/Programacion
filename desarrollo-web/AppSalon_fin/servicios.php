<?php

require "includes/funciones.php";

$sercicios = obtenerServicios();

echo json_encode($sercicios);