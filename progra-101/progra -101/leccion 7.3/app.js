
  function numero$ (numeroz){
   let maximo = numeroz[0]
   for (let i = 0; i < numeroz.length; i++){ 
       if(numeroz[i] > maximo){

        maximo = numeroz[i]
       }
   }
   return maximo
  }



