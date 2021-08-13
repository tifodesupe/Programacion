

var d = document.getElementById('dibujito');
var lienzo = d.getContext('2d');

//Boton Limpiar Canvas
var boton5 = document.getElementById('LimpiarLineas');
boton5.addEventListener("click", cleanCanvas);

//EVENTOS BORDE IZQUIERDO
var lineasIzquierdo1 = document.getElementById('txt_lineasIzquierdo');
lineasIzquierdo1.addEventListener("select", seleccionarLineasIzquierdo);  //Detecta seleccionar
lineasIzquierdo1.addEventListener("click", clickLineasIzquierdo);         //Detecta click
lineasIzquierdo1.addEventListener("input", clickLineasIzquierdo);         //Detecta cambios
lineasIzquierdo1.addEventListener("keypress", clickLineasIzquierdo);      //Detecta cualquier tecla
lineasIzquierdo1.addEventListener("paste", clickLineasIzquierdo);         //Detecta pegar
lineasIzquierdo1.addEventListener("cut", clickLineasIzquierdo);           //Detecta cortar
var boton1 = document.getElementById('dibujoIzquierdo')
boton1.addEventListener("click", dibujoIzquierdoPorClick);
boton1.disabled = true;
//EVENTOS BORDE INFERIOR
var lineasInferior2 = document.getElementById('txt_lineasInferior');
lineasInferior2.addEventListener("select", seleccionarLineasInferior);  //Detecta seleccionar
lineasInferior2.addEventListener("click", clickLineasInferior);         //Detecta click
lineasInferior2.addEventListener("input", clickLineasInferior);         //Detecta cambios
lineasInferior2.addEventListener("keypress", clickLineasInferior);      //Detecta cualquier tecla
lineasInferior2.addEventListener("paste", clickLineasInferior);         //Detecta pegar
lineasInferior2.addEventListener("cut", clickLineasInferior);           //Detecta cortar
var boton2 = document.getElementById('dibujoInferior');
boton2.addEventListener("click", dibujoInferiorPorClick);
boton2.disabled = true;
//Click event DERECHO
var lineasDerecho3 = document.getElementById('txt_lineasDerecho');
lineasDerecho3.addEventListener("select", seleccionarLineasDerecho);  //Detecta seleccionar
lineasDerecho3.addEventListener("click", clickLineasDerecho);         //Detecta click
lineasDerecho3.addEventListener("input", clickLineasDerecho);         //Detecta cambios
lineasDerecho3.addEventListener("keypress", clickLineasDerecho);      //Detecta cualquier tecla
lineasDerecho3.addEventListener("paste", clickLineasDerecho);         //Detecta pegar
lineasDerecho3.addEventListener("cut", clickLineasDerecho);           //Detecta cortar
var boton3 = document.getElementById('dibujoDerecho');
boton3.addEventListener("click", dibujoDerechoPorClick);
boton3.disabled = true;
//Click event SUPERIOR
var lineasSuperior4 = document.getElementById('txt_lineasSuperior');
lineasSuperior4.addEventListener("select", seleccionarLineasSuperior);  //Detecta seleccionar
lineasSuperior4.addEventListener("click", clickLineasSuperior);         //Detecta click
lineasSuperior4.addEventListener("input", clickLineasSuperior);         //Detecta cambios
lineasSuperior4.addEventListener("keypress", clickLineasSuperior);      //Detecta cualquier tecla
lineasSuperior4.addEventListener("paste", clickLineasSuperior);         //Detecta pegar
lineasSuperior4.addEventListener("cut", clickLineasSuperior);           //Detecta cortar
var boton4 = document.getElementById('dibujoSuperior');
boton4.addEventListener("click", dibujoSuperiorPorClick);
boton4.disabled = true;

//Obtener los colores para los bordes
var color1 = document.getElementById('color1_s'); //izquierdo
var color2 = document.getElementById('color2_s'); //inferior
var color3 = document.getElementById('color3_s'); //derecho
var color4 = document.getElementById('color4_s'); //superior

function cleanCanvas()
{
 d.width=d.width
}

//Función LIMPIAR DIBUJO
function myFunction()
{
document.getElementById("formulario").reset();
}

//Función dibujar línea
function dibujarLinea(color, x_i, y_i, x_f, y_f)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(x_i, y_i);
lienzo.lineTo(x_f, y_f);
lienzo.stroke();
lienzo.closePath();
}

//DIBUJAR EL BORDE IZQUIERDO
function dibujoIzquierdoPorClick()
{
var lineas1 = parseInt(lineasIzquierdo1.value);  //Asegura solo numeros enteros
dibujoIzquierdo.disabled = true;

if (lineas1 <= 1000)                    //Límite de 1000
{
 var escala1 = d.width/lineas1;         //Factor de escala
 var l1 = 0;
}
else                                      // ALERTA si se ponen más de 1000 lineas
{
 alert("POR FAVOR ELIGE UN NÚMERO IGUAL O MENOR A 1000");
};

for (l1 = 0; l1 < lineas1; l1++)
{
 dibujarLinea(color1.value, 0, escala1*l1, escala1*l1, 300); //DIBUJA Borde derecho
 dibujoIzquierdo.disabled = true;
};
}
//VOLVER A DIBUJAR EL BORDE IZQUIERDO
function redibujarIzquierdo()
{
var lineas1 = parseInt(lineasIzquierdo1.value);  //Asegura solo numeros enteros

if (lineas1 <= 1000)                    //Límite de 1000
{
 var escala1 = d.width/lineas1;         //Factor de escala
 var l1 = 0;
}

for (l1 = 0; l1 < lineas1; l1++)
{
 dibujarLinea(color1.value, 0, escala1*l1, escala1*l1, 300); //DIBUJA Borde derecho
 boton1.disabled = false;
};
}
//AL SELECCIONAR LINEAS IZQUIERDO
function seleccionarLineasIzquierdo()
{
boton1.disabled = true;
}
//AL HACER CLICK/EVENTOS EN LINEAS IZQUIERDO
function clickLineasIzquierdo()
{
boton1.disabled = false;
}

//DIBUJAR EL BORDE INFERIOR
function dibujoInferiorPorClick()
{
var lineas2 = parseInt(lineasInferior2.value);  //Asegura solo numeros enteros

if (lineas2 <= 1000)                    //Límite de 1000
{
 var escala2 = d.width/lineas2;         //Factor de escala
 var l2 = 0;
}
else                                      // ALERTA si se ponen más de 1000 lineas
{
 alert("POR FAVOR ELIGE UN NÚMERO IGUAL O MENOR A 1000");
};

for (l2 = 0; l2 < lineas2; l2++)
{
 dibujarLinea(color2.value, 0 + escala2*l2, 300, 300, 300 - escala2*l2); //DIBUJA Borde inferior
 boton2.disabled = true;
};
}
//VOLVER A DIBUJAR EL BORDE INFERIOR
function redibujarInferior()
{
var lineas2 = parseInt(lineasInferior2.value);  //Asegura solo numeros enteros

if (lineas2 <= 1000)                    //Límite de 1000
{
 var escala2 = d.width/lineas2;         //Factor de escala
 var l2 = 0;
}

for (l2 = 0; l2 < lineas2; l2++)
{
 dibujarLinea(color2.value, 0 + escala2*l2, 300, 300, 300 - escala2*l2); //DIBUJA Borde inferior
 boton2.disabled = false;
};
}
//AL SELECCIONAR LINEAS INFERIOR
function seleccionarLineasInferior()
{
dibujoInferior.disabled = true;
}
//AL HACER CLICK/EVENTOS EN LINEAS INFERIOR
function clickLineasInferior()
{
boton2.disabled = false;
}

//DIBUJAR EL BORDE DERECHO
function dibujoDerechoPorClick()
{
var lineas3 = parseInt(lineasDerecho3.value);  //Asegura solo numeros enteros

if (lineas3 <= 1000)                    //Límite de 1000
{
 var escala3 = d.width/lineas3;         //Factor de escala
 var l3 = 0;
}
else                                      // ALERTA si se ponen más de 1000 lineas
{
 alert("POR FAVOR ELIGE UN NÚMERO IGUAL O MENOR A 1000");
};

for (l3 = 0; l3 < lineas3; l3++)
{
 dibujarLinea(color3.value, 300, 300 - escala3*l3, 300 - escala3*l3, 0); //DIBUJA Borde derecho
 dibujoDerecho.disabled = true;
};
}
//VOLVER A DIBUJAR EL BORDE DERECHO
function redibujarDerecho()
{
var lineas3 = parseInt(lineasDerecho3.value);  //Asegura solo numeros enteros

if (lineas3 <= 1000)                    //Límite de 1000
{
 var escala3 = d.width/lineas3;         //Factor de escala
 var l3 = 0;
}

for (l3 = 0; l3 < lineas3; l1++)
{
 dibujarLinea(color3.value, 300, 300 - escala3*l3, 300 - escala3*l3, 0); //DIBUJA Borde derecho
 boton3.disabled = false;
 };
}
//AL SELECCIONAR LINEAS DERECHO
function seleccionarLineasDerecho()
{
boton3.disabled = true;
}
//AL HACER CLICK/EVENTOS EN LINEAS DERECHO
function clickLineasDerecho()
{
boton3.disabled = false;
}

//DIBUJAR EL BORDE SUPERIOR
function dibujoSuperiorPorClick()
{
var lineas4 = parseInt(lineasSuperior4.value);  //Asegura solo numeros enteros

if (lineas4 <= 1000)                    //Límite de 1000
{
 var escala4 = d.width/lineas4;         //Factor de escala
 var l4 = 0;
}
else                                      // ALERTA si se ponen más de 1000 lineas
{
 alert("POR FAVOR ELIGE UN NÚMERO IGUAL O MENOR A 1000");
};

for (l4 = 0; l4 < lineas4; l4++)
{
 dibujarLinea(color4.value, 300 - escala4*l4, 0, 0, 0 + escala4*l4); //DIBUJA Borde superior
 dibujoSuperior.disabled = true;
};
}
//VOLVER A DIBUJAR EL BORDE SUPERIOR
function redibujarSuperior()
{
var lineas4 = parseInt(lineasSuperior4.value);  //Asegura solo numeros enteros

if (lineas4 <= 1000)                    //Límite de 1000
{
 var escala4 = d.width/lineas4;         //Factor de escala
 var l4 = 0;
}

for (l4 = 0; l4 < lineas4; l4++)
{
 dibujarLinea(color4.value, 300 - escala4*l4, 0, 0, 0 + escala4*l4); //DIBUJA Borde superior
 boton4.disabled = false;
};
}
//AL SELECCIONAR LINEAS SUPERIOR
function seleccionarLineasSuperior()
{
boton4.disabled = true;
}
//AL HACER CLICK/EVENTOS EN LINEAS SUPERIOR
function clickLineasSuperior()
{
boton4.disabled = false;
}
