document.addEventListener('DOMContentLoaded', async () =>  {

  const results = document.querySelector('#resulta2')

  const request =  await fetch("https://pokeapi.co/api/v2/pokemon/")
  
  const datos = await request.json();

  for(let i = 0;i < datos.results.length;i++){
    const poke = datos.results[i]
    console.log(poke)
    const pokediv = document.createElement('a');
    pokediv.href = poke.url
    pokediv.classList.add("pokemon")
    pokediv.innerHTML = poke.name
    results.appendChild(pokediv)
  }

  console.log("hola");
})