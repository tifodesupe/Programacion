"use strict" //modo stricto
const producto = {
  nombre:"tv de 20 pulgadas",
  precio: 1000,
  disponible: true,
  stock: 30000,
  descripcion: "una television de 20 pulgada que puede correr en 4k, y es HD perfecta para ver una peli como en el cine",
  img: "lol.png"
}

Object.freeze(producto)//congela el objeto
console.log("esta conjelado: " + Object.isFrozen(producto));//mira si esta conjelado

producto.img = "l" //como el objeto esta conjelado no se pueden cambiar las propiedades ni añadirse más ni eliminarse

Object.seal(producto)//sella el objeto
console.log("esta sellado: " + Object.isSealed(producto));//mira si esta sellado

producto.img = "l" //como el objeto esta sellado si se pueden cambiar las propiedades pero no añadirse más ni eliminarse