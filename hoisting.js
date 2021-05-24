// CON VARIABLES -------------------------------------------

console.log("Hola " + name) //llamamos a una variable que no ha sido declarada y le pedimos al navegador que nos lo imprima en la consola antecedido por el string "Hola "

var name = "Ricardo" //Definimos el valor de la variable despues.

//El resultado de correr estas lineas de codigo en el navegador va a ser que nos va a imprimir en la consola el string ("Hola " + el valor UNDEFINED) asi: "Hola undefined"
 
//¿por qué pasa esto? = esto es debido a que el navegador al encontrarse con la peticion de imprimir una variable que no tiene valos definido, el mismo la declara encima de todo el codigo y le asigna el valor "undefined", es decir, el navegador lo entiende asi:

var name; // Ya esta declarada pero ya que no tiene valor, le pongo este "undefined"

console.log("Hola " + name) //ahora si te imprimo, toma:
"Hola undefined" // :D

var name = "Ricardo" // ok de aqui en adelante a name le doy el valor de "Ricardo" (Y)

// CON FUNCIONES --------------------------------------------

saludo()

function saludo(){
    var nombre = "Ricardo"
    console.log("Hola " + nombre)
}

// con funciones pasa algo distinto, las funciones se pueden ejecutar antes de declararlas, porque el navegador siempre las va mover a la parte inicial del codigo

// en este caso el navegador hiso lo siguiente:

function saludo(){         //envió la funcion arriba
    var nombre = "Ricardo"
    console.log("Hola " + nombre)
}

saludo()         // la ejecuto y lanzo el valor producto

"Hola Ricardo"

// ¿QUE PASA SI NO DECLARAMOS LA VARIABLE ANTES DE LA FUNCIÓN?

saludo()
function saludo(){
    console.log("Hola " + nombre)
}
var nombre = "Ricardo"

            //el navegador lo organiza enviando las funciones hasta arriba y las variables (pero estas sin contenido porque aun no ha llegado a el)

var nombre; // Ya esta declarada pero ya que no tiene valor, le pongo este "undefined"
function saludo(){
    console.log("Hola " + nombre)
}  // ok aqui esta la funcion
saludo() //ejecuto la funcion y te mando "Hola undefined"
var nombre = "Ricardo" //ok si querias que te imprimiera este lo hubieras dicho antes (por antes me refiero al inicio) porque ya te mande el resultado de la funcion.