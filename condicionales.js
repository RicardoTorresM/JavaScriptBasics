var opc1 = "tijera"
var opc2 = "papel"
var opc3 = "piedra"

var user = opc1
var cpu = opc2

if(user === cpu){
    console.log("Empate");
} else if (user === opc1 && cpu === opc2){
    console.log("Has ganado usando " + opc1);
} else if (user === opc2 && cpu === opc3){
    console.log("Has ganado usando " + opc2);
} else if (user === opc3 && cpu === opc1){
    console.log("Has ganado usando " + opc3)
} else {
    console.log("Has perdido")
}