document.addEventListener('DOMContentLoaded', () => {
  const cuadrados = document.querySelectorAll('.grid div')
  const mostrarResultado = document.querySelector('#puntos')
  const botonIz = document.querySelector('#boton-iz')
  const botonDe = document.querySelector('#boton-de')
  const botonDi = document.querySelector('#boton-di')
  const ancho = 15
  const aliensCaidos = []
  const invasores = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
  ]
  
  let indiceActualNave = 202
  let indiceActualInvasor = 0
  let resultado = 0
  let direccion = 1
  let idInvasor;
  dibujar()
  // Dibuja el jugador
  cuadrados[indiceActualNave].classList.add("nave")
  
  function control(evento){
    cuadrados[indiceActualNave].classList.remove("nave")
    
    if (evento.code === 'ArrowRight' && indiceActualNave % ancho != ancho - 1){
      //derecha
      indiceActualNave++
    }
    if (evento.code === 'ArrowLeft' && indiceActualNave % ancho) {
      //izquierda
      --indiceActualNave
    }
    
    // Dibuja el jugador
    cuadrados[indiceActualNave].classList.add("nave")
  }
  document.addEventListener('keydown', control)
  
  function moverAliens() {
    const bordeIzquierdo = invasores[0] % ancho === 0
    const bordederecho = invasores[invasores.length -1] % ancho === ancho-1
    
    if((bordeIzquierdo && direccion === -1) ||( bordederecho && direccion === 1 )){
      direccion = ancho
    }else if(direccion === ancho){
      direccion = bordeIzquierdo ? 1 : -1
    }
    for (let i = 0; i < invasores.length; i++) {
      if(invasores[i] >= ancho*ancho){
        continue
      }
      cuadrados[invasores[i]].classList.remove("invader")
    } 
    for (let i = 0; i < invasores.length; i++) {
      invasores[i] += direccion
    }

    dibujar()
    if ( cuadrados[indiceActualNave].classList.contains("invader") ) {
      mostrarResultado.textContent = "GAME OVER"
      alert("game over")
      cuadrados[indiceActualNave].classList.add("boom")
      clearInterval(idInvasor)
      document.removeEventListener('keydown', control)  
      document.removeEventListener('keyup', disparar)
      botonDi.classList.add('hidden')
      botonIz.classList.add('hidden')
      botonDe.classList.add('hidden')
    }
  }
  idInvasor = setInterval(moverAliens, 500)
  
  function disparar(evento){
    let idLaser;
    let indiceActualLaser =  indiceActualNave
    
    function moverLaser() {
      cuadrados[indiceActualLaser].classList.remove("laser")
      indiceActualLaser -= ancho
      cuadrados[indiceActualLaser].classList.add("laser")
      if(cuadrados[indiceActualLaser].classList.contains("invader")){
        cuadrados[indiceActualLaser].classList.remove("invader") 
        cuadrados[indiceActualLaser].classList.remove("laser")
        cuadrados[indiceActualLaser].classList.add("boom")
        
        setTimeout(() => cuadrados[indiceActualLaser].classList.remove("boom"), 1000)
        clearInterval(idLaser)
        
        const alienCaido = invasores.indexOf(indiceActualLaser)
        aliensCaidos.push(alienCaido)
        if(aliensCaidos.length === invasores.length){
          alert("ganaste")
          document.removeEventListener('keydown', control)
          clearInterval(idInvasor)
        }
        mostrarResultado.textContent = ++resultado
      }
      
      if(indiceActualLaser < ancho){
        clearInterval(idLaser)
        setTimeout(() => cuadrados[indiceActualLaser].classList.remove("laser"), 100)
      }
    }
    if (evento.code === 'Space') {
      idLaser = setInterval(moverLaser, 100)
    }
  }
  document.addEventListener('keyup', disparar)

  function dibujar () {
    // Dibuja los invasores
    for(let posicion = 0;posicion<invasores.length;posicion++){
      if(aliensCaidos.includes(posicion)){
        continue
      }
      if ((invasores[posicion] + indiceActualInvasor) >= ancho*ancho) {
        mostrarResultado.textContent = "GAME OVER"
        alert("game over")
        cuadrados[indiceActualNave].classList.add("boom")
        clearInterval(idInvasor)
        document.removeEventListener('keydown', control)  
        document.removeEventListener('keyup', disparar)
        botonDi.classList.add('hidden')
        botonIz.classList.add('hidden')
        botonDe.classList.add('hidden')
        return
      }
      cuadrados[invasores[posicion] + indiceActualInvasor].classList.add("invader")
    }
  }
  botonDi.addEventListener("click", ()=>disparar({code:"Space"}))
  botonIz.addEventListener("click", ()=>control ({code:"ArrowLeft"}))
  botonDe.addEventListener("click", ()=>control ({code:"ArrowRight"}))
})