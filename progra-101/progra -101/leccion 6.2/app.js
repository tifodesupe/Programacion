
class Carro{

constructor(marca, tipo, puertas){ 
this.tipo = tipo
this.marca = marca
this.puertas = puertas
this.carroEnsendido = false
this.creadoen = "hoy"
this.gasolina = 100
}
ensenderCarro(){
    if(this.carroEnsendido){
        this.carroEnsendido = false
        console.error("El carro está no ensensido")
    }
    else{
    this.carroEnsendido = true
 
    console.log("El carro está ensensido")
}
}
realisarViaje(consumo){
    if(this.carroEnsendido = false){
        console.error("El carro está apagado")
    }
    else{
    if (consumo > this.gasolina){
    console.error ("NO PUEDES HACER ESE VIAJE")
    }
    else{
this.gasolina = this.gasolina - consumo
return "Le quedan " + this.gasolina + " de gasolina"    
    }

}
}
}



let carro2 = new Carro("hyundai","sedan",200,)
