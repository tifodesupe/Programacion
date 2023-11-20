function aleatorio(min, maxi) {
  var resutado;
  resutado = Math.floor(Math.random()*(maxi-min +1)) + min
  return resutado;
}

let historialDeTiradasArray = []
const mostrarHistorial = document.querySelector('#historial')
const BotonesDados = document.querySelectorAll('.dado')
const mostrarResultado = document.querySelector('#resultado')
const historialDeTiradas = localStorage.getItem("Historial")
const borrarHistorial = document.querySelector('#no-historial')

borrarHistorial.addEventListener("click", ()=> {
  if(!confirm("¿Estas seguro de que quieres eliminar el historial?")){
    return
  }

  localStorage.clear() 
  historialDeTiradasArray = []

  mostrarHistorial.innerHTML = ""
  mostrarResultado.innerHTML = "-"
})

if(historialDeTiradas){
  historialDeTiradasArray = JSON.parse(historialDeTiradas)
}
for (let i = 0; i < historialDeTiradasArray.length; i++) {
  const element = historialDeTiradasArray[i];
  const dado = element[1]
  const registro = document.createElement('tr')
  const registroHora = document.createElement('td')
  registroHora.innerHTML = element[0]
  registroHora.classList.add("border")
  const registroDado = document.createElement('td')
  registroDado.innerHTML = dado
  registroDado.classList.add("border")
  const registroLanzamiento = document.createElement('td')
  const lanzamiento = element[2]
  registroLanzamiento.innerHTML = lanzamiento
  registroLanzamiento.classList.add("border")
  mostrarResultado.innerHTML = lanzamiento
  registro.appendChild(registroHora)
  registro.appendChild(registroDado)
  registro.appendChild(registroLanzamiento)
  mostrarHistorial.appendChild(registro)
  
}

function oprimirBoton(){
  const dado = parseInt(this.dataset.numeros)
  let contador = 0
  const intervalo = setInterval(()=>{
    const lanzamiento = aleatorio(1, dado)
    mostrarResultado.innerHTML = lanzamiento
    if(contador++ < 10){
      return
    }
    clearInterval(intervalo)
    const registro = document.createElement('tr')
    const ahora = new Date()
    const registroHora = document.createElement('td')
    registroHora.innerHTML = ahora.getHours() + ":" + ahora.getMinutes().toString().padStart(2, "0")
    registroHora.classList.add("border")
    const registroDado = document.createElement('td')
    registroDado.innerHTML = dado
    registroDado.classList.add("border")
    const registroLanzamiento = document.createElement('td')
    registroLanzamiento.innerHTML = lanzamiento
    registroLanzamiento.classList.add("border")
    registro.appendChild(registroHora)
    registro.appendChild(registroDado)
    registro.appendChild(registroLanzamiento)
    mostrarHistorial.appendChild(registro)
    const datosLanzamiento = [registroHora.innerHTML, dado, lanzamiento]
    historialDeTiradasArray.push(datosLanzamiento)
    const historialStr = JSON.stringify(historialDeTiradasArray)
    localStorage.setItem("Historial", historialStr)
  }, 50)  
}

for (let i = 0; i < BotonesDados.length; i++) {
  const boton = BotonesDados[i];
  boton.addEventListener("click", oprimirBoton)
}