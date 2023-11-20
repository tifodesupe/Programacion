export class Bloon{
    static arrayBloon = [
        [0,2],
        [1,2], 
        [1,1],
        [1,0],
        [2,0],
        [3,0],
        [3,1],
        [3,2],
        [3,3],
        [3,4],
        [3,5],
        [2,5],
        [1,5],
        [1,6],
        [1,7],
        [2,7],
        [3,7],
        [4,7],
        [5,7],
        [6,7],
        [6,6],
        [6,5],
        [6,4],
        [6,3],
        [7,3],
        [8,3],
        [8,4],
        [8,5],
        [9,5],
    ];
    static casillas = document.querySelectorAll(".grid_principal div");
    constructor(bloon, velocidad){
        this.posicion = 0;
        this.primeraIteracion = true;
        this.moverBloon = setInterval(() => {
            if(this.primeraIteracion){
                const posicionActual = Bloon.arrayBloon[this.posicion];
                this.casillaActual = Bloon.casillas[posicionActual[1] * 10 + posicionActual[0]];
                this.casillaActual.innerHTML = `<img src='${bloon}-bloon.png'>`;
                this.primeraIteracion = false;
                return
            }
            const posicionAnterior = Bloon.arrayBloon[this.posicion];
            const casillaAnterior = Bloon.casillas[posicionAnterior[1] * 10 + posicionAnterior[0]];
            casillaAnterior.innerHTML = ``;
            casillaAnterior.classList.remove("bloon");
    
            this.posicion++;        
            if(this.posicion >= Bloon.arrayBloon.length) {
                clearInterval(this.moverBloon);
                return
            }
            const posicionActual = Bloon.arrayBloon[this.posicion];
            this.casillaActual = Bloon.casillas[posicionActual[1] * 10 + posicionActual[0]];
            this.casillaActual.classList.add("bloon");
            this.casillaActual.innerHTML = `<img src='${bloon}-bloon.png'>`;
        }, velocidad)
    }
}