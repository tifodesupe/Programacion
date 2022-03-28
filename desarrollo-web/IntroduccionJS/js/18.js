function sumar3(num1=1,num2=2,num3=3) {
  return num1 + num2 + num3
}

const resultado = sumar3(111,222,333)
console.log(resultado);


let total = 0

function agredgarCarrito(precio) {
  return total += precio
}

total = agredgarCarrito(400)

console.log("El total es $" + total);