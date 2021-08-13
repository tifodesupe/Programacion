function kilometrosAmillas(kilometros){
    let millas = kilometros / 0.62
        millas = Math.round(millas)
    return millas
}

let entradakilometros = document.getElementById("kilometros")
let salidakilometros = document.getElementById("salida-kilometros")
let salidamillas = document.getElementById("salida-millas")

entradakilometros.onchange = function () {
    salidakilometros.innerText = entradakilometros.value
    salidamillas.innerText = kilometrosAmillas(entradakilometros.value)
}


