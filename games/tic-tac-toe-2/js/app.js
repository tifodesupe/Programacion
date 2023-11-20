const uno = document.querySelector("#uno")
const dos = document.querySelector("#dos")
const tres = document.querySelector("#tres")
const cuatro = document.querySelector("#cuatro")
const cinco = document.querySelector("#cinco")
const seis = document.querySelector("#seis")
const siete = document.querySelector("#siete")
const ocho = document.querySelector("#ocho")
const nueve = document.querySelector("#nueve")
const colocarFicha = document.querySelectorAll(".colocar-ficha")
const mostrarJugador = document.querySelector("#jugador")
let jugador =1 
let gameOver = false

for (let i = 0; i < colocarFicha.length; i++) {
    const element = colocarFicha[i];
    element.addEventListener("click",()=>{
        if(!element.classList.contains("x") &&!element.classList.contains("o") &&!gameOver){

            if(jugador === 1){
                jugador = 2
                element.classList.add("x")
            }
            else{
                jugador = 1
                element.classList.add("o")
            }
            if(gano("x")){
                gameOver = true
                return
            }
            if(gano("o")){
                gameOver = true
                return
            }
            if(empate()){
                gameOver = true
                return
            }
        }
        console.log(jugador);
        mostrarJugador.innerHTML = jugador
    })
}


function gano(clase){
    const posibilidad1 = uno.classList.contains(clase) && dos.classList.contains(clase) && tres.classList.contains(clase)
    const posibilidad2 = uno.classList.contains(clase) && cuatro.classList.contains(clase) && siete.classList.contains(clase)
    const posibilidad3 = cuatro.classList.contains(clase) && cinco.classList.contains(clase) && seis.classList.contains(clase)
    const posibilidad4 = dos.classList.contains(clase) && cinco.classList.contains(clase) && ocho.classList.contains(clase)
    const posibilidad5 = siete.classList.contains(clase) && ocho.classList.contains(clase) && nueve.classList.contains(clase)
    const posibilidad6 = uno.classList.contains(clase) && cinco.classList.contains(clase) && nueve.classList.contains(clase)
    const posibilidad7 = tres.classList.contains(clase) && seis.classList.contains(clase) && nueve.classList.contains(clase)
    const posibilidad8 = tres.classList.contains(clase) && cinco.classList.contains(clase) && siete.classList.contains(clase)
    if(posibilidad1 || posibilidad2 || posibilidad3 || posibilidad4 || posibilidad5 || posibilidad6 || posibilidad7 || posibilidad8){
      alert("Gano jugador " + clase.toUpperCase())
      jugador = 3
      return true
    }
    return false
}

function empate(){
    if(jugador == 3){
      return
    }
    const oArray = document.querySelectorAll('.o')
    const xArray = document.querySelectorAll('.x')
    if(oArray.length + xArray.length == 9){
      alert("Hubo un empate")
      jugador = 3
      return true
    }
    return false
}