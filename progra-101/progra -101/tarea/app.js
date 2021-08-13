function esPar(numero){
    return numero % 2 == 0
}
function puedeSalir(cedula){
    let hoy = new Date()
    let dia = hoy.getDate()
    if(esPar(dia) && esPar(cedula)){
        alert ("Hoy no puede comprar")
}
 if(!esPar(dia) && esPar(cedula)){

     alert ("Hoy puede comprar")
 }
 if(!esPar(dia) && !esPar(cedula)){

alert ("Hoy no puede comprar")
 }
 if(esPar(dia) && !esPar(cedula)){

 alert ("Hoy puede comprar")
 }
}

let inputCedula = document.getElementById("cedula")
inputCedula.onchange = function(){
    let cedulaDigitada = this.value
    if (cedulaDigitada != ''){
        puedeSalir(cedulaDigitada)
    }
}