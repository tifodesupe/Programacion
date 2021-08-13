var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa =  "tile.png";
var vaca = {
  url: "vaca.png",
  cargaOk: false
}
var fondo = {
  url: "tile.png",
  cargaOk: false
}
var cerdo = {
  url: "cerdo.png",
  cargaOk: false
}
var pollo = {
  url: "pollo.png",
  cargaOk: false
}
var cantidad = aleatorio(0, 10);
var cantidadC = aleatorio(0, 10);
var cantidadP = aleatorio(0, 10);

fondo.imagen = new Image();
fondo.imagen.src = mapa;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen =  new Image();
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener("load", cargarVacas)

cerdo.imagen =  new Image();
cerdo.imagen.src = cerdo.url
cerdo.imagen.addEventListener("load", cargarCerdos)

pollo.imagen =  new Image();
pollo.imagen.src = pollo.url
pollo.imagen.addEventListener("load", cargarPollos)

function cargarFondo() {
  fondo.cargaOk = true
  dibujar();
}

function cargarVacas() {
  vaca.cargaOk = true
  dibujar();
}

function cargarCerdos() {
  cerdo.cargaOk = true
  dibujar();
}

function cargarPollos() {
  pollo.cargaOk = true
  dibujar();
}

function dibujar() {
  var x, y
  if (fondo.cargaOk) {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if (vaca.cargaOk) {
    console.log(cantidad);
    for (var v = 0; v < cantidad; v++) {
      x = aleatorio(0, 7)
      y = aleatorio(0, 7)
      x = x * 60
      y = y * 60
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if (cerdo.cargaOk) {
    console.log(cantidadC);
    for (var c = 0; c < cantidad; c++) {
      x = aleatorio(0, 7)
      y = aleatorio(0, 7)
      x = x * 60
      y = y * 60
      papel.drawImage(cerdo.imagen, x, y);

  }
}

if (pollo.cargaOk) {
  console.log(cantidadP);
  for (var p = 0; p < cantidad; p++) {
    x = aleatorio(0, 7)
    y = aleatorio(0, 7)
    x = x * 60
    y = y * 60
    papel.drawImage(pollo.imagen, x, y);
  }
}

}
function aleatorio(min, maxi) {
  var resutado;
  resutado = Math.floor(Math.random()*(maxi-min +1)) + min
  return resutado;
}
