const metodoPago = "bitcoin"

switch (metodoPago) {
  case "tarjeta":
    console.log("pagaste con tarjeta");
    break;
  case "bitcoin":
    console.log("pagaste con bitcoin");
    break;

  default:
    console.log("pagaste con efectivo");
    break;
}