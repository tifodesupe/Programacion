document.addEventListener('DOMContentLoaded', () => {
  function aleatorio(min, maxi) {
    var resutado;
    resutado = Math.floor(Math.random()*(maxi-min +1)) + min
    return resutado;
  }

  const squares = document.querySelectorAll('.grid div')
  const previewSquares = document.querySelectorAll('.preview-grid div')
  const lines = document.querySelector('#lineas')
  const levelDisplay = document.querySelector('#nivel')
  const botonIzquierda = document.querySelector('#izquierda')
  const botonDerecha = document.querySelector('#derecha')
  const botonRotar = document.querySelector('#rotar')
  const botonAbajo = document.querySelector('#abajo')
  const width  = 10
  const height = 20
  let currentPosition = 4
  let linesCount = 0
  let nivel = 0
  let moveDownId;
  let gameOver = false
  let speed = 1000
  const actionButtons = event => {
    if(gameOver){
      return
    }
    const isAtRightBorder = () => current.some(index => (currentPosition + index) % width === width - 1)
    const isAtLeftBorder = () => current.some(index => (currentPosition + index) % width === 0)
    if (event.code === 'Space'){
      erase()
      if(currentRotation < 3){
        currentRotation++
      }else{
        currentRotation = 0
      }
      current = allTetrominos[random] [currentRotation]
      while (isAtRightBorder() && isAtLeftBorder()) {
        currentPosition--
      }
      if(conflict()){
        if(currentRotation){
          currentRotation--
        }else{
          currentRotation = 3
        }

        current = allTetrominos[random] [currentRotation]
      }
      draw()
    }

    if(event.code === 'ArrowRight'  && !isAtRightBorder()){
      erase()
      currentPosition++
      if(conflict()){
        currentPosition--
      }
      draw()
    }

    if(event.code === 'ArrowLeft' && !isAtLeftBorder()){
      erase()
      currentPosition--
      if(conflict()){
        currentPosition++
      }
      draw()
    }

    if(event.code === 'ArrowDown'){
      moveDown()
    } 
  }
  

  function generateTetrominos(ancho) {
    const lTetromino = [
      [0, ancho,ancho*2,1],
      [ancho, ancho+1, ancho+2,ancho*2+2],
      [1, ancho+1, ancho*2,ancho*2+1],
      [ancho, ancho*2, ancho*2+1,ancho*2+2],
    ]
    const zTetromino = [
      [0,ancho,ancho+1,ancho*2+1],
      [1,2,ancho,ancho+1],
      [0,ancho,ancho+1,ancho*2+1],
      [1,2,ancho,ancho+1],
    ]
    const tTetromino = [
      [0,ancho,ancho+1,ancho*2],
      [1,ancho,ancho+1,ancho+2],
      [1,ancho,ancho+1,ancho*2+1],
      [ancho,ancho+1,ancho+2,ancho*2+1],
    ] 
    const oTetromino = [
      [0,1,ancho, ancho+1],
      [0,1,ancho,ancho+1],
      [0,1,ancho,ancho+1],
      [0,1,ancho,ancho+1]
    ]
    const iTetromino = [
      [0,ancho,ancho*2,ancho*3],
      [0,1,2,3],
      [0,ancho,ancho*2,ancho*3],
      [0,1,2,3],
    ]

    const sTetromino = [
      [1,ancho,ancho+1,ancho*2],
      [0,1,ancho+1,ancho+2],
      [1,ancho,ancho+1,ancho*2],
      [0,1,ancho+1,ancho+2],
    ]

    const jTetromino = [
      [1, ancho+1,ancho*2+1,0],
      [ancho, ancho+1, ancho+2,2],
      [0, ancho, ancho*2,ancho*2+1],
      [ancho, ancho+1, ancho+2,ancho*2],
    ]

    return [
      lTetromino,
      zTetromino,
      tTetromino,
      oTetromino,
      iTetromino,
      sTetromino,
      jTetromino
    ]
  }

  const allTetrominos = generateTetrominos(width)
  const smallTetrominos = generateTetrominos(4)

  let random
  let randomNext = aleatorio(0,allTetrominos.length-1)
  let currentRotation =  0
  let current
  let next = smallTetrominos[randomNext] [currentRotation]
  nexTetromino()

  

  function draw(clas){
    if(!clas){
      clas="block"
    }
    current.forEach( index =>(
      squares[currentPosition + index].classList.add(clas)
    ))
  }

  function erase(){
    current.forEach( index =>(
      squares[currentPosition + index].classList.remove("block")
    ))
  }
  draw()

  document.addEventListener('keyup', actionButtons)

  function moveDown() {
    erase()
    currentPosition += width
    draw()
   freeze()
  }
  moveDownId = setInterval(moveDown,speed)
  
  function conflict() {
    return current.some(index => squares[currentPosition + index].classList.contains("block2"))
  }

  function nexTetromino() {
    next.forEach( index =>(
      previewSquares[index].classList.remove("block")
    ))
    currentPosition = 4
    random = randomNext
    randomNext = aleatorio(0,allTetrominos.length-1)
    next = smallTetrominos[randomNext] [currentRotation]
    current = allTetrominos[random] [currentRotation]
    next.forEach( index =>(
      previewSquares[index].classList.add("block")
    ))
    draw()
    perder()
  }

  function freeze(){
    if(current.some(index => squares[currentPosition + index].classList.contains("block2"))){
      erase()
      currentPosition -= width
      draw("block2")
      addLines()
      nexTetromino()
    }
  }


  function addLines(){
    const linesRemoved = []
    for(let line = 0; line < height; line++){
      let isline = true
      for(let i = 0; i < width; i++){
        if(!squares[line*width + i].classList.contains("block2")){
          isline = false
          break
        }

      }
      if(isline){
        linesRemoved.push(line)
        lines.innerHTML = ++linesCount
        if(!(linesCount % 10)){
          speed *= 0.7
          levelDisplay.innerHTML = ++nivel
          clearInterval(moveDownId)
          moveDownId = setInterval(moveDown,speed)
        }
        for(let i = 0; i < width; i++){
          squares[line*width + i].classList.remove("block2")
        }
      }
    }
    for (let index = 0; index < linesRemoved.length; index++) {
      const element = linesRemoved[index];
      for(let x = element*width; x >= 0 ; --x){
        if(squares[x].classList.contains("block2")){
          squares[x+width].classList.add("block2")
          squares[x].classList.remove("block2")
        }
      }
    }
  }

  function perder(){
    if(conflict()){
      gameOver = true
      alert("Perdiste")
      clearInterval(moveDownId)
    }
  }

  botonRotar.addEventListener("click", ()=> {
    actionButtons({code: 'Space'})
  })
  botonAbajo.addEventListener("click", ()=> {
    actionButtons({code: 'ArrowDown'})
  })
  botonIzquierda.addEventListener("click", ()=> {
    actionButtons({code: 'ArrowLeft'})
  })
  botonDerecha.addEventListener("click", ()=> {
    actionButtons({code: 'ArrowRight'})
  })
}) 