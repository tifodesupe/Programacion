var jonili_sin_culo = require('johnny-five');
var circuitonto = new jonili_sin_culo.Board();
var lefini
var motorola;
var celda
var turbo = 0
circuitonto.on("ready", function() {
  lefini = new jonili_sin_culo.Led(13)
  lefini.blink(100)
  let configuracion = {
    pin: "A0",
    freq: 50
  }
  celda = new jonili_sin_culo.Sensor(configuracion)
  motorola = new jonili_sin_culo.Servo(9)

  motorola.to(37)


    ondear()
})

console.log("NO soy un cacahuate NO")
function ondear() {
  console.log("La luz es = a:" + celda.value);
  var luz = celda.value
    if(luz > 800){
      if(turbo){
        turbo = 0
        motorola.to(180)
      }
      else {
        turbo = 1
      motorola.to(82)
      }
  }
  else {
    motorola.to(20)
  }
  setTimeout(ondear,  1000)
}
