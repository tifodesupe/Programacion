function aleatorio(min, maxi) {
    var resutado;
    resutado = Math.floor(Math.random()*(maxi-min +1)) + min
    return resutado;
}
const numUsuario = document.querySelector("#numeroUsuario")
const formulario = document.querySelector("#formulario")
const lasReglas = document.querySelector("#las_reglas")
const mostrarIntentos = document.querySelector("#intentos")
const boton = document.querySelector("#boton")
const botonReiniciar = document.querySelector("#boton-reiniciar")
let gameOver = false
let intentos = 0
let numero = aleatorio(1023, 9876) 
let numeroStr = numero.toString()
let tiempo = 0;
let temporizador = setInterval(function() {
    if(gameOver) {
        clearInterval(temporizador);
    }
    document.getElementById("tiempo").innerHTML = ++tiempo;
} , 1000);
while (true){
    if (numeroStr[0] == numeroStr[1] || 
            numeroStr[0] == numeroStr[2] || 
            numeroStr[0] == numeroStr[3] || 
            numeroStr[1] == numeroStr[2] || 
            numeroStr[1] == numeroStr[3] || 
            numeroStr[2] == numeroStr[3]) {
        numero = aleatorio(1023, 9876) 
        numeroStr = numero.toString()
        continue
    }
    break
}

formulario.addEventListener("submit", event=>{
    event.preventDefault()
    if(gameOver){
        return
    }
    let entradaStr = numUsuario.value
    let entrada = parseInt(numUsuario.value)
    if(entrada < 1023 || entrada >9876 || entradaStr[0] == entradaStr[1] || 
        entradaStr[0] == entradaStr[2] || 
        entradaStr[0] == entradaStr[3] || 
        entradaStr[1] == entradaStr[2] || 
        entradaStr[1] == entradaStr[3] || 
        entradaStr[2] == entradaStr[3]){
        alert("Por favor ingrese un número de 4 dígitos sin repetidos")
        return
    }
        mostrarIntentos. innerHTML = ++intentos
        if(entrada == numero){
            alert("Ganaste")
            gameOver = true
            boton.classList.add("oculto")
            botonReiniciar.classList.remove("oculto")
            return
        }
        let fijas = 0
    let picas = 0
    for(let i =0;i < 4;i++){
        if(entradaStr[i] == numeroStr[i]){
            fijas++
        }
        for (let j = 0; j < 4; j++) {
            if(entradaStr[i] == numeroStr[j] && i != j)
            picas++
        }
    }
    
    alert(`tiene ${fijas} fija(s) y ${picas} pica(s)`)
})

botonReiniciar.addEventListener("click", ()=>{
    window.location.reload()
})