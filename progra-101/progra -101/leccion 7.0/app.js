function librasAKilogramos(libras){
    let kilogramos = libras / 2.205
    kilogramos = Math.round(kilogramos)
    return kilogramos
}

let entradaLibras = document.getElementById("libras")
let salidaLibras = document.getElementById("salida-libras")
let salidaKilogramos = document.getElementById("salida-kilogramos")

entradaLibras.onchange = function () {
    salidaLibras.innerText = entradaLibras.value
    salidaKilogramos.innerText = librasAKilogramos(entradaLibras.value)
}


