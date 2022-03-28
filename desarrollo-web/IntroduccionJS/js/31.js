const botton = document.querySelector("#boton");

botton.addEventListener("click", ()=>{
    Notification.requestPermission()
        .then(resultado => console.log("El resultado es: " + resultado))
})
