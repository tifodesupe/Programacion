import Game from "./game.js"
import Swipe from "./swipe.js"
const game = new Game()
const numbers = document.querySelectorAll(".grid_principal div")
const puntos = document.querySelector("#puntos")
const derecha = document.querySelector("#derecha")
const izquierda = document.querySelector("#izquierda")
const abajo = document.querySelector("#abajo")
const arriba = document.querySelector("#arriba")
let dosMilCuarentaYOcho = false
function paintGame(){
    let posicion = 0
    puntos.innerHTML = game.compute_points()
    for(let i = 0; i< game.status.length; i++){
        let row = game.status[i]
        for (let x = 0; x < row.length; x++) {
            const element = row[x];
            numbers[posicion].innerHTML = element ? element : ""
            numbers[posicion].className = "number" + element
            if(numbers[posicion].classList.contains("number2048") && !dosMilCuarentaYOcho){
                alert("que pro")
                dosMilCuarentaYOcho = true
            }
            posicion++
        }
    }
}
paintGame()
function control(evento){
    if(game.game_over){
        return
    }

    if (evento.keyCode === 39) {
        game.move("r") //derecha
    }
    if (evento.keyCode === 38) {
        game.move("u")//arriba
    } 
    if (evento.keyCode ===40) {
        game.move("d") //abajo
    }
    if (evento.keyCode === 37) {
        game.move("l") //izquierda
    }
    if(game.game_over && game.compute_points() < 500){
        alert("game over perdedor")
    }
    else if(game.game_over && game.compute_points() > 3000){
        alert("game over pro")
    }
    else if(game.game_over && game.compute_points() > 30000){
        alert("game over hacker")
    }
    else if(game.game_over){
    alert("game over")
    }
    paintGame()
}
document.addEventListener('keyup', control)

// Use class to get element by string.
let swiper = new Swipe(document);
swiper.onLeft(function() {
    control({keyCode: 37})
});
swiper.onRight(function() {
    control({keyCode: 39})
});
swiper.onUp(function() {
    control({keyCode: 38})
});
swiper.onDown(function() {
    control({keyCode: 40})
});
swiper.run();