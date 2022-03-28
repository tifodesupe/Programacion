/////// *******|¬
//for// **¬¬¬¬*|°
/////// 0*****0|
function CuentaRegresiva(para) {
  for (let i = 10; i > 0; i--) {
    console.log("faltan " + i + " para " + para)  
  }
}
function numerosPares(hasta) {
  for(let i = 0; i <= hasta; i++){
    if (i % 2 === 0) {
      console.log("el numero "+ i +" es par");
    }else{
      console.log("el numero " + i + " es inpar");
    }
  }
}







/////////
//while//
/////////


let i = 0

while (i < 100) {
if (i % 2 === 0) {
    console.log("el numero "+ i +" es par");
  }else{
    console.log("el numero " + i + " es inpar");
  }
}