const producto = {
  nombre:"tv de 20 pulgadas",
  precio: 1000,
  disponible: true,
}
const masInfo = {
  stock: 30000,
  descripcion: "una television de 20 pulgada que puede correr en 4k, y es HD perfecta para ver una peli como en el cine",
  img: "lol.png"
}

const nuevoProducto = {...producto, ...masInfo}

console.log(nuevoProducto);
console.log(producto);
console.log(masInfo);