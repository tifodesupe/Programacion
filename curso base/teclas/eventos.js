document.addEventListener("keyup", dibujar_teclado);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  G: 71,
  B: 66,
  R: 82,
};


function dibujoDeLineas (color, x_inicial, y_inicial, x_final, y_final, lienzo) {

lienzo.beginPath()
lienzo.strokeStyle = color
lienzo.lineWidth = 5
lienzo.moveTo(x_inicial, y_inicial)
lienzo.lineTo(x_final, y_final)
lienzo.stroke()
lienzo.closePath();
};

var colorcito = "porpel"
function dibujar_teclado(evento) {


var movimientos = 10
console.log(evento);

switch (evento.keyCode) {
  case teclas.UP:
  dibujoDeLineas(colorcito, x, y, x, y - movimientos, papel)
  y = y - movimientos
  break;
  case teclas.DOWN:
  dibujoDeLineas(colorcito, x, y, x, y + movimientos, papel)
  y = y + movimientos
break
case teclas.LEFT:
dibujoDeLineas(colorcito, x, y, x - movimientos, y, papel)
x = x - movimientos
  break;
  case teclas.RIGHT:
  dibujoDeLineas(colorcito, x, y, x + movimientos, y, papel)
  x = x + movimientos
    break;
    case teclas.G:
    colorcito = "green"
      break;
      case teclas.B:
        colorcito = "blue"
        break;
        case teclas.R:
        colorcito = "red"
          break;
default:
console.log("otra tecla");
break
}
};
