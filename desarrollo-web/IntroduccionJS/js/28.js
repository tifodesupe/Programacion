//class

class Producto{
    constructor(name, precio){
        this.name = name
        this.precio = precio
    }
    formatearProducto() {
        return`El producto ${this.name} vale: ${this.precio} dolares` 
    }
}

const producto = new Producto("no","infinito");

class Libro extends Producto{
    constructor(name,precio,id){
        super(name, precio);
        this.id = id
    }
    formatearLibro() {
        return`${super.formatearProducto} y tiene el id ${this.id}` 
    } 
}
const libro = new Libro("JavaScript para principiantes", 100,1745204729457300119485);
console.log(libro.formatearLibro());