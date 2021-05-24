// Tipos de funciones: DECLARATIVA
var usuario = {
    nombre: "Ricardo", edad: 26
}

function suma(a,b){
    return a + b;
}

suma(1,2)   //De esta manera de invoca la funcion para ejecutarla


//Tipos de funciones: EXPRESIVA

var resta = function(c,d){
    return c - d;
}

resta(4,3)   //De esta manera se invoca la variable que contiene dentro una funcion anonima (esto es porque la funcion no tiene nombre como tal, sino que es el nombre de la variable la que queda guardada como que contiene una funcion determinada en su interior)


//Ejercicio: realiza un saludo en el que contengas una plantilla de texto "hola, bienvenido ESTUDIANTE nos complace tenerte aqui de nuevo" mediante una funcion expresiva

var saludo = function(estudiante){
    return(`Hola, bienvenido ${estudiante} nos complace tenerte aqui de nuevo`)
}
//Probar ejecutarlo en el navegador
saludo("Ricardo")   //así lo invocamos