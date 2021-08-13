let jf = require("johnny-five")
let circuito = new jf.Board();

circuito.on("ready", function() {
  let leb = new jf.Led(6)
  let ns = new jf.Led(13)
    ns.blink(50)
    leb.blink(50)
    console.log("soy in-mortal")
})
