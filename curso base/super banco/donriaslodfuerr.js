class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

var imagenes = [];
imagenes[200] = "Billete200.jpeg";
imagenes[100] = "Billete100.jpeg";
imagenes[50] = "Billete50.jpeg";
imagenes[20] = "Billete20.jpeg";
imagenes[10] = "Billete10.jpeg";
imagenes[5] = "Billete5.jpeg";

function entregarDinero()
{
  var entregado = [];
  var t = document.getElementById("operacion");
  dinero = parseInt(t.value);
  if (dinero > efectivoT)
  {
    resultado.innerHTML += "No hay tanto efectivo. <br/>";
  }
  else if ( dinero % caja[caja.length -1].valor != 0)
  {
    resultado.innerHTML += "Escribe una cantidad multiplo de " + caja[caja.length -1].valor + " <br/>";
  }
  else
  {
    efectivoT = efectivoT - dinero;
    mostrarEfectivo.innerHTML = "Maximo en efectivo: " + efectivoT + "€" + "<br/>" ;

    for(var b of caja)
    {
      if (dinero > 0)
      {
        div = Math.floor(dinero / b.valor);
        if (div > b.cantidad)
        {
          papeles = b.cantidad;
        }
        else
        {
          papeles = div;
        }
        entregado.push(new Billete(b.valor, papeles));
        dinero = dinero - (b.valor * papeles);
        b.cantidad = b.cantidad - papeles;
      }
    }

    for(var e of entregado)
    {
      if(e.cantidad>0)
      {
        resultado.innerHTML += e.cantidad + " billetes de " + e.valor + "€" + "<br/>";
        resultado.appendChild(e.imagen);
        resultado.innerHTML += "</br>";
      }
    }
  }

  resultado.innerHTML += "<hr/>";
}

var caja = [];
caja.push(new Billete(200, 5));
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 20));
caja.push(new Billete(20, 50));
caja.push(new Billete(10, 100));
caja.push(new Billete(5, 200));

var dinero = 0;
var div = 0;
var papeles = 0;
var efectivoT =0;

for(var b of caja)
{
  var efectivo = b.valor * b.cantidad;
  efectivoT = efectivoT + efectivo;
}

var resultado = document.getElementById("resultado");
var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);

entregarDinero.innerHTML = "Maximo en efectivo: " + efectivoT + "€" + "<br/>" ;
