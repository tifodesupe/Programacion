import { Bloon } from "./bloon.js";
import {Torre } from "./torre.js";
const ancho = 10;
function adyacentes(casilla) {
    numeroCasilla = parseInt(casilla);
    const adyacentes = [];
    const noBordeIzquierdo= numeroCasilla % ancho != 0;
    const noBordeDerecho = numeroCasilla % ancho != ancho - 1;
    const noBordeSuperior = numeroCasilla > ancho - 1;
    const noBordeInferior = numeroCasilla < casillas.length - ancho;
    if(noBordeIzquierdo) {
        adyacentes.push(numeroCasilla - 1);
    }
    if(noBordeDerecho) {
        adyacentes.push(numeroCasilla + 1);
    }
    if(noBordeSuperior) {
        adyacentes.push(numeroCasilla - ancho);
    }
    if(noBordeInferior) {
        adyacentes.push(numeroCasilla + ancho);
    }
    if(noBordeIzquierdo && noBordeSuperior) {
        adyacentes.push(numeroCasilla - ancho - 1);
    }
    if(noBordeIzquierdo && noBordeInferior) {
        adyacentes.push(numeroCasilla + ancho - 1);
    }
    if(noBordeDerecho && noBordeSuperior) {
        adyacentes.push(numeroCasilla - ancho + 1);
    }
    if(noBordeDerecho && noBordeInferior) {
        adyacentes.push(numeroCasilla + ancho + 1);
    }
    return adyacentes;
}
const buyTower = document.querySelectorAll(".buy-tower");
const canTower = document.querySelectorAll(".can-tower");
const canBallon = document.querySelectorAll(".can-ballon");
const casillas = document.querySelectorAll(".grid_principal div");
const info = document.querySelector("#info");
const nombreTorre = document.querySelector("#nombre")
const precioTorre = document.querySelector("#precio")
const dinero = document.querySelector("#dinero")
const empezarRonda = document.querySelector("#empezar-ronda")
let i = 0;
let ronda = 1;
const torres = [];
casillas.forEach(casilla => {
    casilla.dataset.numero = i++;
})

window.arrayBloons = [];
window.dineroActual = 450;
let moverBloon;

let puttingTower = false;
let selectedTower = null;
const precios = {
    "dart-monke": 250,
    "tack-shoter": 400,
    "bomb-tower": 800,
    "ice-tower": 700,
    "super-monkey": 4000,
}

buyTower.forEach(function(tower) {
    tower.addEventListener("click", function() {
        selectedTower = tower.dataset['tower']
        nombreTorre.innerHTML = selectedTower
        precioTorre.innerHTML = precios[selectedTower]
        info.classList.remove("hidden");
        if (!selectedTower){
            return
        }
        if (dineroActual < precios[selectedTower]){
            alert("You don't have enough money")
            return
        }
        dineroActual = dineroActual - precios[selectedTower]
        dinero.innerHTML = dineroActual
        alert("were do you want to put it down?  (click on the map)");
        puttingTower = true;
    })
})


canTower.forEach(element => {
    element.addEventListener("click", function() {
        if(!puttingTower || !selectedTower || element.classList.contains("tower")) {
            return
        }
        
        element.innerHTML = `<img src='${selectedTower}.png'>`;
        element.classList.add("tower");
        torres.push(element.dataset.numero);

        

       puttingTower = false;
    })
}); 

let posicion = 0;
let primeraIteracion = true;
function moverElBloon (bloon, velocidad) {
    new Bloon(bloon, velocidad)
}
empezarRonda.addEventListener("click", function() {
    if (ronda == 1){
        for (let i = 0; i < 10; i++) {
            moverElBloon("red", 1000);       
        }
        ronda = 2;
        return;
    }
    if (ronda == 2){
        for (let i = 0; i < 10; i++) {
            moverElBloon("blue", 800);
        }
        ronda = 3;
        return;
    }
    if (ronda == 3){
        for (let i = 0; i < 10; i++) {
            moverElBloon("green", 700);
        }
        ronda = 4;
        return;
    }
    if (ronda == 4){
        for (let i = 0; i < 10; i++) {
            moverElBloon("yellow", 500);
        }
        ronda = 5;
        return;
    }
    if (ronda == 5){
        for (let i = 0; i < 10; i++) {
            moverElBloon("black", 600);
            moverElBloon("white", 600);
        };
        ronda = 1
        return;
    }    
    
})