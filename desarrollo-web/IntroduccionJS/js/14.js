//mas arrays

const numeros = [101,230,320,490,570]
const numeros2 = [101,230,320,490,570]

numeros.push(666) 
numeros.unshift(99) 
//numeros.pop()
//numeros.shift()
//numeros2.splice(2,  1) quita uno o varios elementos del array sin quitar los de al lado
console.table(numeros)
console.table(numeros2)
const nuevoArray = [...numeros2, 666,734,842,983,1352]
console.table(nuevoArray)