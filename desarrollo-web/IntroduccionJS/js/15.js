//Aun más arrays
const meses =["Enero", "Febrero","Marzo","Abril", "Mayo"]
const carrito = [
  {nonbre: "tv 20 pulgadas",precio:500},
  {nonbre: "tv 50 pulgadas",precio:700},
  {nonbre: "Ipad gamer de ultima generacion",precio:800},
  {nonbre: "teclado y mouse gamers inalambricos",precio:600},
  {nonbre: "audifonos gamer",precio:550}
]

//metodos para arrays

//1. forEach
meses.forEach(mes => {
  if(mes == "Marzo"){
    console.log("Marzo si es un mes")
  }
});
//2.includes
const marzoEsRealONo = meses.includes("Marzo")
console.log(marzoEsRealONo)