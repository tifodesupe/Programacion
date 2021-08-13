class billete{

  constructor(v, c){
    this.valor = v
    this.cantidad = c
  }

}
function entregarDinero(){
  var t = document.getElementById("dinero")
  dinero = parseInt(t.value)
  for (let bi of caja) {
    
    if(dinero > 0){
      div = Math.floor(dinero / bi.valor)
      if(div > bi.cantidad){
        papeles = bi.cantidad;
      }
      else{
        papeles = div;
      }
      entregado.push (new billete(bi.valor, papeles))
      dinero = dinero - (bi.valor * papeles)
    }
  }
  if (dinero > 0){
    resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :<("
  } else {
    for (let e of entregado) {
      if(e.cantidad > 0){   
      resultado.innerHTML += +  e.cantidad + " billetes de $" + e.valor + "<br />"
      }
    }
  } 
}

var caja = [] 
caja.push(new billete(200, 1000))
caja.push(new billete(100, 30))
caja.push(new billete(50, 1000))
caja.push(new billete(20, 100))
caja.push(new billete(10, 200))
caja.push(new billete(5, 1000))
var entregado = []
var dinero = 0
var div = 0
var papeles = 0
let resultado = document.getElementById("resultado")
var b = document.getElementById("extraer")
b.addEventListener("click", entregarDinero)