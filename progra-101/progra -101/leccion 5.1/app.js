function imprimirtabla(tabla, limite){
    for (let i = 1; i<=limite; i++){
        let respuesta = tabla*i
        alert(tabla + " x " + i + "=" + respuesta)
    }
}
    imprimirtabla(9, 10);
    imprimirtabla(3, 3);
    imprimirtabla(2, 10);