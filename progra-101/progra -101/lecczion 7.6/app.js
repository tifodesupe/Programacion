

function max (a,b,c) {
  
  let mayor;
  if (a > b){
    
    if(a > c){
      mayor = a 
    }else{
      mayor = c 
    } 

    
  }else{
    if (b > c){
    mayor = b
    }else{
      mayor = c
    }
  }  
  
  
  console.log( mayor ); // 6
  return mayor

  }    
   

  let mayor = max( 6, 900, 6); 