//funciones
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function sumar(num1,num2) {
  console.log(num1 + num2)
  return num1 + num2
}

function sumaAleatoria(){
  numero1 = aleatorio(0,10000)
  numero2 = aleatorio(0,10000)
  sumar(numero1,numero2)
}


sumaAleatoria()