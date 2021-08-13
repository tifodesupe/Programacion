function calcularNota (nota){
    let notaletra = ''

    if (nota <= 100 && nota >= 90) {
        notaletra = 'A'
        alert ("No tonto")
    } else if (nota < 90 && nota >= 80 ) {
        notaletra = "B"
        alert ("No tonto")
    }
    else if (nota < 80 && nota >=70 ){
        notaletra = "C"
        alert ("No tonto")
    }
    else if (nota < 70 && nota >=60 ){
        notaletra = "D"
        alert ("No tonto")
    }
    else if (nota < 60){
        notaletra = "F"
        alert ("tonto")
    }
    
    alert("nota: "+ notaletra)
}
calcularNota(100);
calcularNota(80);
calcularNota(59);