const casillas = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
]
const enemigos = document.querySelectorAll("#enemigos")
const jugadorColor = document.querySelector("#jugador")
let dondeJugador = 12
let jugador = casillas[dondeJugador]
let casillaActual = dondeJugador
let casilla =  document.getElementById(casillaActual.toString())


let mover;
function control(evento){
    if (evento.keyCode === 39) {
      mover = derecha //derecha
    }
    if (evento.keyCode === 38) {
      mover = ariba //ariba
    } 
    if (evento.keyCode ===40) {
      mover = abajo //abajo
    }
    if (evento.keyCode === 37) {
      mover = izquierda //izquierda
    }   
}
document.addEventListener('keyup', control)
botonArriba.addEventListener("click", ()=> {
control({keyCode: 38})
})
botonAbajo.addEventListener("click", ()=> {
control({keyCode: 40})
})
botonIzquierda.addEventListener("click", ()=> {
control({keyCode: 37})
})
botonDerecha.addEventListener("click", ()=> {
})
if (mover == derecha) {
  jugador
  jugador = [dondeJugador - 1]
  jugador
}
if (mover == izquierda) {
  jugador
  jugador = [dondeJugador + 1]
  jugador
}
if (mover == arriba) {
  jugador
  jugador = [dondeJugador + 5]
  jugador
}
if (mover == abajo) {
  jugador
  jugador = [dondeJugador - 5]
  jugador
}