var numero = 1:

switch (numero) {
    case 1:
        console.log("Soy un uno");
    case 10:
        console.log("Soy un 10");
    case 100:
        console.log("Soy un cien");
    default:
        console.log("soy un numero que no es 1, 10 o 100")
}


//EJERCICIO: piedra papel o tijeras
var a = "tijera"
var b = "papel"
var c = "piedra"

var usuario = a
var cpu = b

switch (true){
    case (usuario === cpu):
        console.log("EMPATE");
        break;
    case (usuario === a && cpu === b):
        console.log("Ganaste usando " + a);
        break;
    case (usuario === b && cpu === c):
        console.log("Ganaste usando " + b);
        break;
    case (usuario === c && cpu === a):
        console.log("Ganaste usando " + a);
        break;
    default:
        console.log("PERDISTE")
}

if (false === !true){
    console.log(false == true)
} else {
    console.log(true === !false)
}