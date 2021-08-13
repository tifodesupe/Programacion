
let persona ={
  nombre : "Matías",
  edad : 9,
  altura:  1.31

}

alert(JSON.stringify(persona.nombre))
console.log(persona.altura)

function describirPersona ( p ) {
    console.log(`${p.nombre} es muy lindo`)
}

describirPersona(persona);
