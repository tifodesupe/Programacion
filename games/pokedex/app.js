document.addEventListener('DOMContentLoaded', async () =>  {

  const results = document.querySelector('#resulta2')
  const inputResultado = document.querySelector('#input')
  const botonResultado = document.querySelector('#boton')
  const pokemonSeleccionado = document.querySelector('#pokemon-seleccionado')
  const botonSiguiente = document.querySelector('#boton2')
  const botonAnterior = document.querySelector('#boton1')
  const direccionInicial = "https://pokeapi.co/api/v2/pokemon/"

  async function mostrarImgPokemon (url){
    pokemonSeleccionado.innerHTML = ""
    try{
      const pokeRequest =  await fetch(url)
      const pokeDatos = await pokeRequest.json();
      
      const divNuevo = document.createElement('div');
      const pokeImg = document.createElement('img');
      pokeImg.src = pokeDatos.sprites.front_default
      divNuevo.appendChild(pokeImg)
      pokemonSeleccionado.appendChild(divNuevo)
    }
    catch{
      alert(404 + " pokemon no encontrado")
    }
  }
  
mostrarPokemon(direccionInicial)
async function mostrarPokemon (direccion){  
  const request =  await fetch(direccion)
  
  const datos = await request.json();
  
  results.innerHTML = ""
  
  for(let i = 0;i < datos.results.length; i++){
    const poke = datos.results[i]
    console.log(poke)
    const pokediv = document.createElement('div');
    pokediv.onclick = () => mostrarImgPokemon(poke.url)
      
      pokediv.classList.add("pokemon")
      pokediv.innerHTML = poke.name
      results.appendChild(pokediv)
  }

    function siguientePagina() {
      if(!datos.next){
        return
      }
      botonSiguiente.removeEventListener("click",siguientePagina)
      botonAnterior.removeEventListener("click",anteriorPagina)
      mostrarPokemon(datos.next)
    }

    function anteriorPagina() {
      if(!datos.previous){
        return
      }
      botonSiguiente.removeEventListener("click",siguientePagina)
      botonAnterior.removeEventListener("click",anteriorPagina)

      mostrarPokemon(datos.previous)
    }

    botonSiguiente.addEventListener("click",siguientePagina)
    botonAnterior.addEventListener("click",anteriorPagina)

    console.log(datos);
  
  }

  botonResultado.addEventListener("click", ()=>{
    let pokemonBuscado = inputResultado.value
    pokemonBuscado = pokemonBuscado.toLowerCase()
    mostrarImgPokemon(direccionInicial + pokemonBuscado)
  })


})