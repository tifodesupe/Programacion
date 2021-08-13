let dia = -5; // 1= lunes, 2= martes.....
// 0 es el domingo


if (dia === 0) {
    console.log('domingo...');
}


switch (dia) {

    case 0:
        alert ('Eres domingo');
        break;

    case 1:
       alert ('Eres lunes');
        break;

    case 2:
         alert('Eres martes');
        break;

    case 3:
       alert('Es miércoles');
        break;

    case 4:
         alert('Es jueves');
        break;

    case 5:
        alert('Es viernes');
        break;

    case 6:
         alert('Es sábado');
        break;

    default:
        alert('El día ingresado no es permitido');
}
