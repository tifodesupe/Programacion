// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Get the modal
var modales = document.getElementById("Modal");

let espan  = document.getElementById ("cerrar")

espan.onclick = function() {
  modales.style.display = "none";
}

// Get the button that opens the modal
let reglas = document.getElementById("reglas")



const carita = 'emoji-sin.png'
const casillaInicial = 61
const casillaFinal = 10

let ganaste = false
let casillaActual = casillaInicial
let arriba = document.getElementById("arriba")
let abajo = document.getElementById("abajo")
let izquierda = document.getElementById("izquierda")
let derecha = document.getElementById("derecha")
let casilla =  document.getElementById(casillaActual.toString())
let  reiniciar =  document.getElementById("reiniciar")

function botonReiniciar() {
  window.location.reload()
}

function botonArriba () {
  casilla.innerHTML = ``
  casilla.className = 'boton'
    if (ganaste == false){
  if(casillaActual > 10){
   casillaActual = casillaActual - 10
   
  }
}
if(casillaActual === 10){
  ganaste =true
  modal.style.display = "block";
 
 }
    
  casilla =  document.getElementById(casillaActual.toString())
  casilla.innerHTML = `<img src=${carita} />  `
}
function botonAbajo () {  
  casilla.innerHTML = ``
  casilla.className = 'boton'
  if (ganaste == false){
if(casillaActual < 61){
  casillaActual = casillaActual + 10
 }
}
if(casillaActual === 10){
  ganaste =true
  modal.style.display = "block";
 
 }
casilla =  document.getElementById(casillaActual)
casilla.innerHTML = `<img src=${carita} />`
}
function botonIzquierda () {
  casilla.innerHTML = ``
  casilla.className = 'boton'
  if (ganaste == false){
  if(casillaActual%10 !== 1 ){
    casillaActual = casillaActual - 1
   }
  }
  if(casillaActual === 10){
    ganaste =true
    modal.style.display = "block";
   
   }
 
casilla =  document.getElementById(casillaActual)
casilla.innerHTML = `<img src=${carita} />`
  }
function botonDerercha () {
  casilla.innerHTML = ``
  casilla.className = 'boton'
  if (ganaste == false){
if(casillaActual % 10){
  casillaActual = casillaActual + 1
 }
}
 if(casillaActual === 10){
   ganaste =true
   modal.style.display = "block";
  
  }
casilla =  document.getElementById(casillaActual)
casilla.innerHTML = `<img src=${carita} />`
}

function mostrarReglas () {
  modales.style.display = "block";
}


casilla.innerHTML = `<img src=${carita} />`
arriba.onclick = botonArriba
abajo.onclick  =  botonAbajo
izquierda.onclick = botonIzquierda
derecha.onclick = botonDerercha
reiniciar.onclick = botonReiniciar
reglas.onclick = mostrarReglas