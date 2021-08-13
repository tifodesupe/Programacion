var popo = require("express")
var app = popo()
app.get("/", inicio)
app.get("/girar", girar)

var jonili_sin_culo = require('johnny-five');
var circuitonto = new jonili_sin_culo.Board();
var lefini
var motorola;

function inicio(peticion, resultado) {
  resultado.send(`
    <form method="get" action="/girar">
    <input type="number" name="angulo" value="37" />
      <button type="submit">Girar</button>
    </form>
  `)
}

function girar(peticion, resultado) {
  resultado.send('girado ' + peticion.query.angulo)
  console.log(peticion.query.angulo)
  motorola.on(parseInt(peticion.query.angulo, 10))
}

function girar2(peticion, resultado) {
  resultado.send('girado2')
  motorola.to(90)
}

function giroCompleto(peticion, resultado) {
  resultado.send('girado3')
  motorola.to(180)
}

circuitonto.on("ready", function() {
  lefini = new jonili_sin_culo.Led(13)
  lefini.blink(100)
  motorola = new jonili_sin_culo.Servo(9)
  motorola.to(37)

  app.listen(8989)
})
