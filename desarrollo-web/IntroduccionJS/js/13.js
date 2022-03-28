// arrays
const d1 = document.querySelector('#d1')
const d2 = document.querySelector('#d2')
const d3 = document.querySelector('#d3')
const d4 = document.querySelector('#d4')
const d5 = document.querySelector('#d5')
const d6 = document.querySelector('#d6')
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function lanzarUnDado10Caras (){
  const numeros = [1,2,3,4,5,6,7,8,9,10]
  const aleatorio = getRandomInt(0, 9)
  alert("salio: " + numeros[aleatorio])
}
function lanzarUnDado4Caras (){
  const numeros = [1,2,3,4]
  const aleatorio = getRandomInt(0, 3)
  alert("salio: " + numeros[aleatorio])
}
function lanzarUnDado20Caras (){
  const numeros = [1,2,3,4,5,6,7,8,9,10,10,12,13,14,15,16,17,18,19,20]
  const aleatorio = getRandomInt(0, 10)
  alert("salio: " + numeros[aleatorio])
}
function lanzarUnDado6Caras (){
  const numeros = [1,2,3,4,5,6]
  const aleatorio = getRandomInt(0, 5)
  alert("salio: " + numeros[aleatorio])
}
function lanzarUnDado8Caras (){
  const numeros = [1,2,3,4,5,6,7,8]
  const aleatorio = getRandomInt(0, 7)
  alert("salio: " + numeros[aleatorio])
}
function lanzarUnDado12Caras (){
  const numeros = [1,2,3,4,5,6,7,8,9,10,11,12]
  const aleatorio = getRandomInt(0, 11)
  alert("salio: " + numeros[aleatorio])
}

d1.addEventListener("click", lanzarUnDado4Caras())
d2.addEventListener("click", lanzarUnDado6Caras())
d3.addEventListener("click", lanzarUnDado8Caras())
d4.addEventListener("click", lanzarUnDado10Caras())
d5.addEventListener("click", lanzarUnDado12Caras())
d6.addEventListener("click", lanzarUnDado20Caras())