function filtrarPorLetra (arr,letra) {
  let nueboArr = []


  for (let i = 0; i < arr.length; i++ ) {
  
  let nombre = arr[i]
     if (nombre [0] === letra){
   nueboArr.push( nombre)
     
     }

   }



return nueboArr
}




















let heroes = ["Dr mario", "Dr. Strange", "Hukl", "Super Hulk", "Spiderman", "Captana Marvel"];
let  heroesCon = filtrarPorLetra( heroes, "D");
console.log( heroesCon ); // She Hulk, Spiderman