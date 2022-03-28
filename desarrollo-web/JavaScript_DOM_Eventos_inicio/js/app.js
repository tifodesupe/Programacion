// const h2 = document.querySelector("#h2")
// h2.textContent= "hola"
// console.log(h2);
//all
// const array = document.querySelectorAll(".entrada")
// array[0].textContent = "bruh"
// array[0].classList.add("lol")
// console.log(array)





// const nuevoEnlace = document.createElement("a")


// nuevoEnlace.href = ""
// nuevoEnlace.textContent = "no"
// nuevoEnlace.classList.add("navegacion__enlace")
// const nav = document.querySelector(".navegacion")
// nav.appendChild(nuevoEnlace)





//window.onscroll = ()=> console.log("scroling")

// const btnEnviar = document.querySelector(".boton--primario")
// btnEnviar.addEventListener("click", e=> {
    //     console.log(e)
//     e.preventDefault()
//     console.log("enviando fomulario")

// })



const nombre = document.querySelector("#nombre")
const email = document.querySelector("#email")
const mensaje = document.querySelector("#mensaje")
const datos = {
    nombre:"",
    email:"",
    mensaje:"",
}    
nombre.addEventListener("input", leerTexto)
email.addEventListener("input", leerTexto)
mensaje.addEventListener("input", leerTexto)
const form = document.querySelector(".formulario")
form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const {nombre, email, mensaje} = datos


    if (nombre === ""|| email === "" || mensaje === "") {
        mostrarMensaje("Todos los campos son obligatorios", "error")
        return
    }
    mostrarMensaje("el mensaje ha enviado", "enviado")
})


function  leerTexto(e){
    console.log(e.target);
    
    
    datos[e.target.id] = e.target.value
}    



function mostrarMensaje(mensaje, clas) {
    const mensajeP = document.createElement("p")
    mensajeP.textContent = mensaje
    mensajeP.classList.add(clas)
    form.appendChild(mensajeP)

    setTimeout(()=>{
        mensajeP.remove()
    }, 5000)
}