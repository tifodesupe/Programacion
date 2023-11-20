const div1 = document.querySelector('#uno')
const div2 = document.querySelector('#dos')
const div3 = document.querySelector('#tres')
const div4 = document.querySelector('#cuatro')
const div5 = document.querySelector('#cinco')
const div6 = document.querySelector('#seis')
const div7 = document.querySelector('#siete')
const div8 = document.querySelector('#ocho')
const div9 = document.querySelector('#nueve')
let jugador = 1

div1.addEventListener("click", ()=>{
  if(div1.classList.contains("x") || div1.classList.contains("o")){
    return
  }
  if(jugador == 1){
    div1.classList.add("x")
    jugador = 2
    gano("x")
    empate()
    return
  }
  if(jugador == 2){
    div1.classList.add("o")
    gano("o")
    empate()
    jugador = 1
    return
  }
})
div2.addEventListener("click", ()=>{
  if(div2.classList.contains("x") || div2.classList.contains("o")){
    return
  }
  if(jugador == 1){
    div2.classList.add("x")
    jugador = 2
    gano("x")
    empate()
    return
  }
  if(jugador == 2){
    div2.classList.add("o")
    gano("o")
    empate()
    jugador = 1
    return
  }
})
div3.addEventListener("click", ()=>{
  if(div3.classList.contains("x") || div3.classList.contains("o")){
    return
  }
  if(jugador == 1){
    div3.classList.add("x")
    jugador = 2
    gano("x")
    empate()
    return
  }
  if(jugador == 2){
    div3.classList.add("o")
    gano("o")
    empate()
    jugador = 1
    return
  }
})
div4.addEventListener("click", ()=>{
  if(div4.classList.contains("x") || div4.classList.contains("o")){
    return
  }
  if(jugador == 1){
    div4.classList.add("x")
    jugador = 2
    gano("x")
    empate()
    return
  }
  if(jugador == 2){
    div4.classList.add("o")
    gano("o")
    empate()
    jugador = 1
    return
  }
})
div5.addEventListener("click", ()=>{
  if(div5.classList.contains("x") || div5.classList.contains("o")){
    return
  }
  if(jugador == 1){
    div5.classList.add("x")
    jugador = 2
    gano("x")
    empate()
    return
  }
  if(jugador == 2){
    div5.classList.add("o")
    gano("o")
    empate()
    jugador = 1
    return
  }
})
div6.addEventListener("click", ()=>{
  if(div6.classList.contains("x") || div6.classList.contains("o")){
    return
  }
  if(jugador == 1){
    div6.classList.add("x")
    jugador = 2
    gano("x")
    empate()
    return
  }
  if(jugador == 2){
    div6.classList.add("o")
    gano("o")
    empate()
    jugador = 1
    return
  }
})
div7.addEventListener("click", ()=>{
  if(div7.classList.contains("x") || div7.classList.contains("o")){
    return
  }
  if(jugador == 1){
    div7.classList.add("x")
    jugador = 2
    gano("x")
    empate()
    return
  }
  if(jugador == 2){
    div7.classList.add("o")
    gano("o")
    empate()
    jugador = 1
    return
  }
})
div8.addEventListener("click", ()=>{
  if(div8.classList.contains("x") || div8.classList.contains("o")){
    return
  }
  if(jugador == 1){
    div8.classList.add("x")
    jugador = 2
    gano("x")
    empate()
    return
  }
  if(jugador == 2){
    div8.classList.add("o")
    gano("o")
    empate()
    jugador = 1
    return
  }

})
div9.addEventListener("click", ()=>{
  if(div9.classList.contains("x") || div9.classList.contains("o")){
    return
  }
  if(jugador == 1){
    div9.classList.add("x")
    jugador = 2
    gano("x")
    empate()
    return
  }
  if(jugador == 2){
    div9.classList.add("o")
    gano("o")
    empate()
    jugador = 1
    return
  }
})




function gano(clase){
  const posibilidad1 = div1.classList.contains(clase) && div2.classList.contains(clase) && div3.classList.contains(clase)
  const posibilidad2 = div1.classList.contains(clase) && div4.classList.contains(clase) && div7.classList.contains(clase)
  const posibilidad3 = div4.classList.contains(clase) && div5.classList.contains(clase) && div6.classList.contains(clase)
  const posibilidad4 = div2.classList.contains(clase) && div5.classList.contains(clase) && div8.classList.contains(clase)
  const posibilidad5 = div7.classList.contains(clase) && div8.classList.contains(clase) && div9.classList.contains(clase)
  const posibilidad6 = div1.classList.contains(clase) && div5.classList.contains(clase) && div9.classList.contains(clase)
  const posibilidad7 = div3.classList.contains(clase) && div6.classList.contains(clase) && div9.classList.contains(clase)
  const posibilidad8 = div3.classList.contains(clase) && div5.classList.contains(clase) && div7.classList.contains(clase)
  if(posibilidad1 || posibilidad2 || posibilidad3 || posibilidad4 || posibilidad5 || posibilidad6 || posibilidad7 || posibilidad8){
    alert("Gano jugador " + clase.toUpperCase())
    jugador = 3
    return true
  }
  return false
}
function empate(){
  if(jugador == 3){
    return
  }
  const oArray = document.querySelectorAll('.o')
  const xArray = document.querySelectorAll('.x')
  if(oArray.length + xArray.length == 9){
    alert("Hubo un empate")
    jugador = 3
    return true
  }
  return false
}