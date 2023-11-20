document.addEventListener('DOMContentLoaded',  () => {
  function aleatorio(min, maxi) {
    var resutado;
    resutado = Math.floor(Math.random()*(maxi-min +1)) + min
    return resutado;
  }

  const direccionInicial = "https://pokeapi.co/api/v2/pokemon/"
  const divRespuestas = document.querySelector('#respuestas')
  const botonEmpezar = document.querySelector('#boton')
  const loadinGif = "<img src='img/loading.gif' />"
  const dibujo = document.querySelector('#dibujo')
  const mostrarFallos = document.querySelector('#fallos')
  const mostrarAciertos = document.querySelector('#aciertos')
  let aciertos = 0
  let fallos = -1
  let gameOver = false
  let respondido = false

  botonEmpezar.addEventListener("click", () => {
    if(gameOver){
      return
    }
    if(!respondido){
      mostrarFallos.innerHTML = ++fallos
    }
    imgPokemon()
    botonEmpezar.innerHTML = "Siguiente"
    
  })

  const cantidadPokemones = 898
  async  function imgPokemon() {
    dibujo.innerHTML = loadinGif
    respondido = false

    const numDelPokemon = aleatorio(1, cantidadPokemones)
    let nombreCorrecto;
    const urlPokemon = direccionInicial + numDelPokemon
    const respuestas = [numDelPokemon]
    while (respuestas.length < 5){
      const respuestaMal =  aleatorio(1, cantidadPokemones)
      if (!respuestas.includes(respuestaMal)) {
        respuestas.push(respuestaMal)
      }
    }
    respuestas.sort(() => 0.5 - Math.random())
    divRespuestas.innerHTML=""
    for (let index = 0; index < respuestas.length; index++) {
      const url = direccionInicial +  respuestas[index];
      const pokeRequest =  await fetch(url)
      const pokeDatos = await pokeRequest.json(); 
      console.log(pokeDatos.name)
      const pokediv = document.createElement('div');
      pokediv.classList.add("pokemon")
      pokediv.innerHTML = pokeDatos.name
      divRespuestas.appendChild(pokediv)
      pokediv.addEventListener("click", ()=>{
        if(respondido){
          return
        }
        respondido = true
        if (respuestas[index] == numDelPokemon) {
          mostrarAciertos.innerHTML = ++aciertos
          if(aciertos == 5){
            alert("Eres bueno")
            return
          }
          if(aciertos == 10){
            alert("Eres un fan de pokémon")
            return
          }
          if(aciertos == 15){
            alert("Que pro")
            return
          }
          if(aciertos == 20){
            alert("Ganaste.Eres un maestro pokémon")
            gameOver = true
            return
          }  
          alert("Acertaste")
        }else{
          mostrarFallos.innerHTML = ++fallos
          if(fallos == 10){
            alert("Perdiste, recarga la pagina para reintentar, era " + nombreCorrecto)
            gameOver = true
            return
          }  
          alert("Fallaste, era " + nombreCorrecto)
        }
      })
    }
  
    try{
      const pokeRequest =  await fetch(urlPokemon)
      const pokeDatos = await pokeRequest.json();
      setTimeout(() => console.log("Es " + pokeDatos.name), 6000)
      nombreCorrecto = pokeDatos.name
      
      const divNuevo = document.createElement('div');
      const pokeImg = document.createElement('img');
      pokeImg.src = pokeDatos.sprites.front_default
      dibujo.innerHTML=""
      divNuevo.appendChild(pokeImg)
      dibujo.appendChild(divNuevo)
    }
    catch{
      alert(numDelPokemon + " pokemon no encontrado")
    }


  }
  


})