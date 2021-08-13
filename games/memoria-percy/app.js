document.addEventListener("DOMContentLoaded", () =>{
  function aleatorio(min, maxi) {
    var resutado;
    resutado = Math.floor(Math.random()*(maxi-min +1)) + min
    return resutado;
  }
  alert("Bienvenido a la prueba en la que determinaremos tu padre o madre del Olimpo")
  const cardArray = [
    {
      name: "annabeth",
      img: "image-nes/annabeth2.jpg"
    },
    {
      name: "atenea",
      img: "image-nes/atenea.jpg"
    },
    {
      name: "dionisio",
      img: "image-nes/dionisio.jpg"
    },
    {
      name: "grover",
      img: "image-nes/grover.jpg"
    },
    {
      name: "hades",
      img: "image-nes/hades.jpg"
    },
    {
      name: "minotauro",
      img: "image-nes/minotauro.jpg"
    },
    {
      name: "annabeth",
      img: "image-nes/annabeth2.jpg"
    },
    {
      name: "atenea",
      img: "image-nes/atenea.jpg"
    },
    {
      name: "dionisio",
      img: "image-nes/dionisio.jpg"
    },
    {
      name: "grover",
      img: "image-nes/grover.jpg"
    },
    {
      name: "hades",
      img: "image-nes/hades.jpg"
    },
    {
      name: "minotauro",
      img: "image-nes/minotauro.jpg"
    },   
    {
      name: "percy",
      img: "image-nes/percy.jpg"
    },
    {
      name: "poseidon",
      img: "image-nes/poseidon.jpg"
    },
    {
      name: "quiron",
      img: "image-nes/quiron.jpg"
    },
    {
      name: "percy",
      img: "image-nes/percy.jpg"
    },
    {
      name: "poseidon",
      img: "image-nes/poseidon.jpg"
    },
    {
      name: "quiron",
      img: "image-nes/quiron.jpg"
    },
    {
      name: "zeus",
      img: "image-nes/zeus.jpg"
    },
    {
      name: "zeus",
      img: "image-nes/zeus.jpg"
    },
    
  ]

  const informacion = {
    "zeus": "Zeus: Dios del rayo",
    "hades":"Hades: Dios del inframundo",
    "annabeth":"Annabeth: Amiga de Percy, hija de Atenea",
    "atenea":"Atenea: Diosa de la estrategia",
    "quiron":"Quiron: Centauro, maestro de Percy",
    "dionisio":"Dioniso: Señor D, dios del vino, director del Campamento Mestizo",
    "grover":"Grover: Sátiro, amigo De Percy",
    "percy":"Percy: Es el protagonista, hijo de Poseidón",
    "minotauro":"Minotauro: Ataco a Percy y casi mato a Grover",
    "poseidon":"Poseidon: Dios del mar"
  }

  cardArray.sort(() => 0.5 - Math.random())

  var cartasSeleccionadas = []
  var cartasSeleccionadasId = []
  var cartasGanadas = []
  var dioses = ["Poseidon","Zeus","Ares","Atenea","Dioniso","Hefesto","Hades","Hermes","Afrodita","Hera"]
  var dios = aleatorio(0,10)
  var fallos = 0
  var resultado = document.querySelector("#puntos")
  var errores = document.querySelector("#fallos")
  const grid = document.querySelector('.grid')
  const info2 = document.querySelector('#info')
  function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
      var card = document.createElement("img");
      card.setAttribute("src", "image-nes/blank.png")
      card.setAttribute("data-id", i)    
      card.addEventListener("click", flipcard)
      grid.appendChild(card)
    }
  
  }


  function iguales(){
    var cartas = document.querySelectorAll("img")
    const opcion1 = cartasSeleccionadasId[0]
    const opcion2 = cartasSeleccionadasId[1]
    if(cartasSeleccionadas[0] === cartasSeleccionadas[1]){
      alert("Tu encontraste dos cartas iguales")
      let info = informacion[cartasSeleccionadas[0]]
      info2.textContent = info
      cartas[opcion1].setAttribute("src", "image-nes/white.png")
      cartas[opcion1].removeEventListener('click', flipcard)
      cartas[opcion2].setAttribute("src", "image-nes/white.png")
      cartas[opcion2].removeEventListener('click', flipcard)

      cartasGanadas.push(cartasSeleccionadas)
    }else{
      for (let i = 0; i < cartas.length; i++) {
        const element = cartas[i];
        element.removeEventListener('click', flipcard)
      }
      fallos += 1
      errores.textContent = fallos
      setTimeout(() =>{
        if(fallos === 10){ return }

        for (let i = 0; i < cartas.length; i++) {
          const element = cartas[i];
          if (element.getAttribute("src") === "image-nes/white.png") {
            continue
          }
          element.addEventListener('click', flipcard)
        } 
        cartas[opcion1].setAttribute("src", "image-nes/blank.png")
        cartas[opcion2].setAttribute("src", "image-nes/blank.png") 
      }, 1000)
    }
    cartasSeleccionadas = []
    cartasSeleccionadasId = []
    resultado.textContent = cartasGanadas.length
    if(cartasGanadas.length === cardArray.length/2){
      resultado.textContent = "Ganaste"
      alert("Tu padre o madre del Olimpo es " + dioses[dios ])
    }
    if(fallos === 10){
      resultado.textContent = "Perdiste"
      for(let i = 0; i < cartas.length;i++){
        cartas[i].removeEventListener("click", flipcard)
      }
    }
  }


  function flipcard(){
    var cardID = this.getAttribute("data-id")
    if (cartasSeleccionadasId.length === 1 && cartasSeleccionadasId[0] === cardID) {
      return
    }
    cartasSeleccionadas.push(cardArray[cardID].name)
    cartasSeleccionadasId.push(cardID)
    this.setAttribute("src", cardArray[cardID].img)
    if(cartasSeleccionadas.length === 2){
      setTimeout(iguales, 200)
    }
  }


  createBoard()
})
