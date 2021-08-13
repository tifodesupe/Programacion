document.addEventListener('DOMContentLoaded', () => {
  const cuadrados = document.querySelectorAll('.grid div')
  const botonMover = document.querySelectorAll('.boton-mover')
  const tiempo = document.querySelector('#tiempo-restante')
  const resultado = document.querySelector('#resultado')
  const botonIniciar = document.querySelector('#boton')
  const botonPausar = document.querySelector('#botonP')
  const carrosIz = document.querySelectorAll('.carro-iz')
  const logIz = document.querySelectorAll('.tronco-iz')
  const carrosDe = document.querySelectorAll(".carro-de")
  const logDe = document.querySelectorAll(".tronco-de")
  let  tiempoRestante = 10
  const ancho = 9
  let indiceActual = 76
  let tiempoId;
  let seMovioRana = false

  function dibujarRana(){
    cuadrados[indiceActual].classList.add("frog")
  }
  function borrarRana(){
    cuadrados[indiceActual].classList.remove("frog")
  }
  dibujarRana()

  function moverRana(evento){
    borrarRana()
    if (evento.keyCode === 39 && indiceActual % ancho !== ancho - 1) {
      indiceActual += 1 //derecha
    }
    if (evento.keyCode === 38 && indiceActual + -ancho >= 0) {
      indiceActual -= ancho //ariba
    } 
    if (evento.keyCode ===40 && indiceActual + ancho < ancho*ancho) {
      indiceActual += ancho //abajo
    }
    if (evento.keyCode === 37 && indiceActual % ancho !== 0) {
      indiceActual -= 1 //izquierda
    }
    dibujarRana()
    if(cuadrados[indiceActual].classList.contains("meta")){
      ganaste()
      return
    }
    perder()
  }
  function ganaste(){
    alert("ganaste")
    resultado.innerHTML = "ganaste"
    desactivarMovimiento()
    clearInterval(tiempoId)
    clearInterval(logId)
  }
  


  function carroAutomatico() {
    carrosIz.forEach(carroIz => moverCarroIz(carroIz))
    carrosDe.forEach(carroDe => moverCarroDe(carroDe))
  }


  function moverCarroIz(carro){
    if(carro.classList.contains("c1")){
      carro.classList.remove("c1")
      carro.classList.add("c2")
      return
    }
    if(carro.classList.contains("c2")){
      carro.classList.remove("c2")
      carro.classList.add("c3")
      return
    }
    if(carro.classList.contains("c3")){
      carro.classList.remove("c3")
      carro.classList.add("c1")
      return
    }
  }

  function moverCarroDe(carro){
    if(carro.classList.contains("c1")){
      carro.classList.remove("c1")
      carro.classList.add("c3")
      return
    }
    if(carro.classList.contains("c2")){
      carro.classList.remove("c2")
      carro.classList.add("c1")
      return
    }
    if(carro.classList.contains("c3")){
      carro.classList.remove("c3")
      carro.classList.add("c2")
      return
    }
  }

  botonIniciar.addEventListener('click', () => {
    if (tiempoId) {
      window.location.reload()
      return
    }
    botonIniciar.innerHTML = "REINICIAR"
    botonPausar.classList.remove("oculto")
    activarMovimiento()
    tiempoId = setInterval(()=>{
      tiempoRestante--
      tiempo.innerHTML = tiempoRestante
      carroAutomatico()
      moverLogs()
      perder()
    },1000)
  })
  botonPausar.addEventListener('click', () => {
    if (tiempoId) {
      clearInterval(tiempoId)
      desactivarMovimiento()  
      botonPausar.innerHTML = "PAUSAR"
      tiempoId = null
      return
    }
    botonPausar.innerHTML = "DESPAUSAR"
    activarMovimiento()
    tiempoId = setInterval(()=>{
      tiempoRestante--
      tiempo.innerHTML = tiempoRestante
      carroAutomatico()
      moverLogs()
      perder()
    },1000)
  })
  

  function moverLogs(){
    seMovioRana = false
    logIz.forEach(logIz => moverlogIz(logIz))
    logDe.forEach(logDe => moverlogDe(logDe))
  }

  function moverlogIz(log){
    if(log.classList.contains("l1")){
      log.classList.remove("l1")
      log.classList.add("l2")
      moverRanaConLogIz(log)
      return
    }
    if(log.classList.contains("l2")){
      log.classList.remove("l2")
      log.classList.add("l3")
      moverRanaConLogIz(log)
      return
    }
    if(log.classList.contains("l3")){
      log.classList.remove("l3")
      log.classList.add("l4")
      moverRanaConLogIz(log)
      return
    }
    if(log.classList.contains("l4")){
      log.classList.remove("l4")
      log.classList.add("l5")
      moverRanaConLogIz(log)
      return
    }
    if(log.classList.contains("l5")){
      log.classList.remove("l5")
      log.classList.add("l1")
      moverRanaConLogIz(log)
      return
    }
  }
  function moverlogDe(log){

    if(log.classList.contains("l1")){
      log.classList.remove("l1")
      log.classList.add("l5")
      moverRanaConLogDe(log)
      return
    }
    if(log.classList.contains("l2")){
      log.classList.remove("l2")
      log.classList.add("l1")
      moverRanaConLogDe(log)
      return
    }
    if(log.classList.contains("l3")){
      log.classList.remove("l3")
      log.classList.add("l2")
      moverRanaConLogDe(log)
      return
    }
    if(log.classList.contains("l4")){
      log.classList.remove("l4")
      log.classList.add("l3")
      moverRanaConLogDe(log)
      return
    }
    if(log.classList.contains("l5")){
      log.classList.remove("l5")
      log.classList.add("l4")
      moverRanaConLogDe(log)
      return
    }
  }
  function moverRanaConLogIz(log){
    if(seMovioRana){
      return
    }
    if(log.classList.contains("frog") &&  indiceActual % ancho !== 0){
      seMovioRana = true
      borrarRana()
      indiceActual--
      dibujarRana()
    }
  }
  function moverRanaConLogDe(log){
    if(seMovioRana){
      return
    }
    if(log.classList.contains("frog") &&  indiceActual % ancho !== ancho - 1){
      seMovioRana = true
      borrarRana()
      indiceActual++
      dibujarRana()
    }
  }

  function perder(){
    if(!tiempoRestante ||cuadrados[indiceActual].classList.contains("c1") 
    || cuadrados[indiceActual].classList.contains("l4")
    || cuadrados[indiceActual].classList.contains("l5")){
      alert("Perdiste")
      resultado.innerHTML = "perdiste"
      desactivarMovimiento()
      clearInterval(tiempoId)
    }
  }

  function moverConBotones(event) {
    moverRana({keyCode: parseInt(event.target.dataset.key)})
  }

  function activarMovimiento() {
    for(let i = 0; i < botonMover.length; i++) {
      const element = botonMover[i]
      element.addEventListener('click', moverConBotones)
    }
    document.addEventListener('keyup', moverRana)
  }

  function desactivarMovimiento() {
    for(let i = 0; i < botonMover.length; i++) {
      const element = botonMover[i]
      element.removeEventListener('click', moverConBotones)
    }
    document.removeEventListener('keyup', moverRana)
  }

})