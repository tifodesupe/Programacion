function masLargo(herues){
 
  let nombreLargo = ""
 
  
  for(let i = 0; i < herues.length; i ++){
    let nombre = herues[i]
    if (nombre.length >= nombreLargo.length){
      nombreLargo = nombre;
    }
  }
 
 
  
 
 
  
  

 
  
  
 

 
 
 return nombreLargo 
}
let heroes = ["mega man", "super mario", "wario-man", "master hand"];
let heroeLargo = masLargo( heroes );
console.log( heroeLargo ); // master hand 