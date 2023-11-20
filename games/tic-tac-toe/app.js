const botones = document.querySelectorAll('button')
const accion = document.querySelector('#accion')
const nombre = document.querySelector('#nombre')
const idSala = document.querySelector('#id-sala')


for (let i = 0; i < botones.length; i++) {
  const boton = botones[i];
  boton.addEventListener("click", evento => {
    if(!nombre.value){
      alert("Escribe tu nombre antes de jugar")
      evento.preventDefault()
      return
    }
    if(boton.name == "unirse" && !idSala.value) {
      alert("Escribe el id de la sala")
      evento.preventDefault()
      return
    }
    accion.value = boton.name
  })
}