let persona1 ={
  nombre: "Matías",
  edad : 9
}
let persona2 ={
  nombre: "Liliam",
  edad : 34
}
let persona3 ={
  nombre: "Alejandro",
  edad : 33
}

let personas = [persona1, persona2, persona3]

console.log (personas)

for(let i = 0; i < personas.length; i++ ){
  let persona = personas[i]
  console.log(`${persona.nombre} -- ${persona.edad}`)
}


