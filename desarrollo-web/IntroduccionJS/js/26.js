const producto = {
    nombre:"tv de 20 pulgadas",
    precio: 1000,
    disponible: true,
    info:  ()=>{
        console.log(`El nombre del producto es: ${this.nombre} y vale: ${this.precio}`);
    }
}

