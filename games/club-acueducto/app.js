document.addEventListener("DOMContentLoaded", ()=>{
    iniciarApp()
})

function iniciarApp() {
    crearGaleria()
}

function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes")

    for (let i = 1; i < 13 ; i++) {
        const imagen = document.createElement("picture")

        imagen.innerHTML = `
        <img loading="lazy" width="200" height="300" src="fotos-karate-miniatura/foto${i}_sm.jpeg" alt="imagen galeria">
        `;
        
        imagen.addEventListener("click", function(){
            mostrarImagen(i)
        })
        
        galeria.appendChild(imagen)
    }
}
function mostrarImagen(id){
    const imagen = document.createElement("picture")
    imagen.classList.add("picture-overlay")
    imagen.innerHTML = `          
    <img class="img-grande" loading="lazy" src="fotos-karate/foto${id}.jpeg" alt="imagen galeria">
    `;
    //crea el overlay con IMG
    const overlay = document.createElement("DIV")
    overlay.appendChild(imagen)
    overlay.classList.add("overlay")

    const cerrarModal = document.createElement("P")
    cerrarModal.textContent = "X"
    cerrarModal.classList.add("btn-cerrar")
    cerrarModal.addEventListener("click", function(){
        
        overlay.remove()
    })
    overlay.appendChild(cerrarModal)
    overlay.addEventListener("click", function(){
        overlay.remove()
    })

    //AÑADE AL html
    const body = document.querySelector("body")
    body.appendChild(overlay)
}