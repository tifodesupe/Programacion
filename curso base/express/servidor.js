var popo = require("express")
var app = popo()
app.get("/", inicio)
app.get("/cursos", cursos)
function inicio(peticion, resultado) {
resultado.send("Este es el <strong>home<strong")
}
function cursos(peticion, resultado) {
resultado.send("Estos son los <strong>cursos<strong")
}
app.listen(8989)
