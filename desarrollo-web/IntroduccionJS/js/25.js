const carrito = [
    {nonbre: "tv 20 pulgadas",precio:500},
    {nonbre: "tv 50 pulgadas",precio:700},
    {nonbre: "Ipad gamer de ultima generacion",precio:800},
    {nonbre: "teclado y mouse gamers inalambricos",precio:600},
    {nonbre: "audifonos gamer",precio:550}
]

let i = 0
const precioTotal = []
carrito.forEach(producto => {
    i++
    precioTotal.push(producto.precio)
    if (i === 5) {
        precioTotalSum = precioTotal[0] + precioTotal[1] + precioTotal[2] + precioTotal[3] + precioTotal[4]
        console.log("total a pagar = " + precioTotalSum)
    }
});
