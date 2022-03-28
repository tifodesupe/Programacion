// poo



const producto = {
    nombre:"tv de 20 pulgadas",
    precio: 1000,
}


function Producto(name, precio) {
    this.name = name
    this.precio = precio
}
const producto2 = new Producto("tablet", 500);
const producto3 = new Producto("legos", 500);

function formatearProducto(producto) {
    return`El producto ${producto.name} vale: ${producto.precio}` 
}
console.log(producto);
console.log(producto2);
console.log(producto3);


