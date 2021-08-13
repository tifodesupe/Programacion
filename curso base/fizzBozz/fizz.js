var numeros = 100
var divisible = false
var random = aleatorio(1, 2)
if(random == 1){
for (let i = 1; i <= 100; i++) {
var divisible = false
  if (esDivisible(i, 3)) {
    document.write("fizz");
    divisible = true
  }
  if (esDivisible(i,5)) {
    document.write("buzz");
    divisible = true
  }
  if(!divisible){
    document. write(i);
  }  
  document.write("<br/>");
}
}else{
  for (let i = 1; i <= 100; i++) {
  if (esDivisible(i, 3)) {
    document.write("fizz");
   
  }
  if (esDivisible(i,5)) {
    document.write("buzz");
   
  }
  if(!esDivisible(i, 3) && !esDivisible(i,5)){
    document. write(i);
  }  
  document.write("<br/>");
}
}
function aleatorio(min, maxi) {
  var resutado;
  resutado = Math.floor(Math.random()*(maxi-min +1)) + min
  return resutado;
}
function esDivisible(num, divisor){
  if(num % divisor == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}