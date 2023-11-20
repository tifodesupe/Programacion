class Torre{
    static dinero = document.querySelector("#dinero")
    constructor(rango, damage, proyectil, ubicacion, velocidad){
        this.rango = rango
        this.damage = damage
        this.proyectil = proyectil
        this.proyectil = proyectil
        this.ubicacion = ubicacion
        this.velocidad = velocidad

        this.disparar = setInterval(()=>{
            for (let i = 0; i < window.arrayBloons; i++) {
                const bloon = window.arrayBloons[i];
                const cuadrosAdyacentes = this.adyacentes()
                const numeroCasilla = parseInt(bloon.casillaActual.dataset.numero)
                if(cuadrosAdyacentes.includes(numeroCasilla)) {
                    bloon.casillaActual.innerHTML = ``;
                    bloon.casillaActual.classList.remove("bloon");
                    alert("bloon destruido")
                    window.dineroActual = dineroActual + 50
                    Torre.dinero.innerHTML = dineroActual
                    clearInterval(bloon.moverBloon);
                    return  "a"
                }
            }
        }, velocidad)
    }
}