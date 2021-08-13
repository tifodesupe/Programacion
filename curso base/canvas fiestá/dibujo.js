var texto = document.getElementById("texto_ lineas")
var bonton = document.getElementById("botoncito")
bonton.addEventListener("click", divujoPorCklic)
var d = document.getElementById("divujito")
var ancho = d.width
var lienzo = d.getContext("2d");


function dibujoDeLineas (color, x_inicial, y_inicial, x_final, y_final) {

lienzo.beginPath();
lienzo.strokeStyle = color
lienzo.moveTo(x_inicial, y_inicial)
lienzo.lineTo(x_final, y_final)
lienzo.stroke();
lienzo.closePath();
}

function divujoPorCklic (){
  var lineas = parseInt(texto.value);
  var l = 0
  var yi, xf;
  var colorcito = "red"
  var color2 = "blue"
  var espacio = ancho / lineas

  for (l = 0; l < lineas; l++){
    yi = espacio * l
    xf = espacio * (l + 1)
    dibujoDeLineas (colorcito, 0, yi, xf, 300)
  }
  dibujoDeLineas (color2, 1, 1, 1, 300)
  dibujoDeLineas (color2, 1, 300, 299, 299)
}
