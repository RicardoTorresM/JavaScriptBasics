var miPC = {
    tarjetaMadre: "Board Gigabyte B450 M",
	procesador: "Ryzen 5 3600",
	ram: "8gb blindada",
	grafica: "nVidia GTX 1660 6gb",
	discoDuro: "M.2 SSD 480gb + 1tb SATA3",
	chasis: "Iceberg Crystal G9",
	fuente: "Iceberg 600W 80 PLUS",
	detallePc: function(){
		console.log(`Pc nVidia BattleBox Essentials con ${this.procesador} una ${this.grafica} y ${this.ram} de ram.`)}
};


miPC.detallePc();
//lo que arroja:
    "Pc nVidia BattleBox Essentials con Ryzen 5 3600 una nVidia GTX 1660 6gb y 8gb blindada de ram."


//FUNCIÓN CONSTRUCTORA

function auto(marca, modelo, annio){    //establece la plantilla con la cual se construirán los nuevos objetos
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto (marca, modelo, annio);  //permite crear varias instancias (objetos decendientes) de la misma funcion

// Primero se declara la variable.
// new es un valor para crear nuevas instancias dirigida a función constructora.
// Se establece los valores de entrada para la creación del objeto.

var autoNuevo = new auto ("Marca 1", "Modelo 1", 2020);


//EJERCICIO

var autos = []

var marca = ["Marca 01", "Marca 02", "Marca 03"]
var modelo = ["Modelo 01", "Modelo 02", "Modelo 03"]
var annio = [1999, 2000, 2001]

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

for (var i = 0; i < marca.length; i++){
    var autoNuevo = new auto(marca[i], modelo[i], annio[i])
    console.log(autoNuevo)
    autos.push(autoNuevo)
}
