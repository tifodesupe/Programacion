function aleatorio(min, maxi) {
    var resutado;
    resutado = Math.floor(Math.random()*(maxi-min +1)) + min
    return resutado;
}
let gameOver = false;
let tiempo = 0;
let temporizador = setInterval(function() {
    if(gameOver) {
        clearInterval(temporizador);
    }
    document.getElementById("tiempo").innerHTML = tiempo++;
} , 1000);
const minas = document.querySelector("#minas");
const ancho = 8;
const grid = document.querySelector(".grid");
const casillas = document.querySelectorAll(".grid div");
const arrayMinas = [];
while (arrayMinas.length < 10) {
    var numeroAleatorio = aleatorio(0, casillas.length-1);
    if (arrayMinas.indexOf(numeroAleatorio) === -1) {
        arrayMinas.push(numeroAleatorio);
    }
}
function revelarBombas() {
    for(var i = 0; i < arrayMinas.length; i++) {
        casillas[arrayMinas[i]].innerHTML = "💣";
    }
}
function revelar(numeroCasilla, yaRevelado=[]) {
    if(yaRevelado.indexOf(numeroCasilla) != -1) {
        return;
    }
    yaRevelado.push(numeroCasilla);
    const casilla = casillas[numeroCasilla];
    if (casilla.classList.contains("bandera"))  return;
    if (gameOver) return;
    if (arrayMinas.indexOf(numeroCasilla) != -1) {
        casilla.classList.add("mina");
        revelarBombas();
        gameOver = true;
        alert("Perdiste");
    } else {
        const minasAdyacentes = contarMinasAdyacentes(numeroCasilla);
        if (minasAdyacentes > 0) {
            casilla.innerHTML = minasAdyacentes;
        }else{
            casilla.innerHTML = "";
            const casillasAdyacentes = adyacentes(numeroCasilla);
            casillasAdyacentes.forEach(function(casillaAdyacente) {
                revelar(casillaAdyacente, yaRevelado);
            });
        }
        casilla.classList.add("revelado");
        const casillasReveladas = document.querySelectorAll(".revelado");
        if(casillas.length - casillasReveladas.length == arrayMinas.length) {
            alert("Ganaste en " + tiempo + " segundos");
            gameOver = true
        }
    }
}
for (let i = 0; i < casillas.length; i++) {
    casillas[i].addEventListener("click", function() {
        revelar(i)
    });
    casillas[i].addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        if (gameOver) return;
        if (casillas[i].classList.contains("revelado"))  return;
        if (casillas[i].classList.contains("bandera")) {
            casillas[i].classList.remove('bandera');
            casillas[i].innerHTML = "";
            minas.innerHTML = parseInt(minas.innerHTML) + 1;
        } else {
            casillas[i].classList.add('bandera');
            casillas[i].innerHTML = "🚩";
            minas.innerHTML = parseInt(minas.innerHTML) - 1;
        }
    }, false);
}
function adyacentes(numeroCasilla) {
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
function contarMinasAdyacentes(numeroCasilla) {
    const minasAdyacentes = adyacentes(numeroCasilla);
    let contador = 0;
    minasAdyacentes.forEach(function(adyacente) {
        if(arrayMinas.indexOf(adyacente) != -1) {
            contador++;
        }
    });
    return contador;
}