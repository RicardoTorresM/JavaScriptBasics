//USO DE FOR

var estudiantes = ["Carlos", "Maria", "Pedro", "Angela", "Mario", "Paula", "Andres", "Daniel"];

function saludar(estudiante){
    console.log(`Hola, ${estudiante} ¿como estas?`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludar(estudiantes[i]);
}

// resultado tras ejecutar:

// Hola, Carlos ¿como estas?
// Hola, Maria ¿como estas?
// Hola, Pedro ¿como estas?
// Hola, Angela ¿como estas?
// Hola, Mario ¿como estas?
// Hola, Paula ¿como estas?
// Hola, Andres ¿como estas?
// Hola, Daniel ¿como estas?




//USO DE "FOR/OF"

var estudiantes = ["Carlos", "Maria", "Pedro", "Angela", "Mario", "Paula", "Andres", "Daniel"];

function saludar(estudiante){
    console.log(`Hola, ${estudiante} ¿como estas?`);
}
for(var estudiante of estudiantes){
    saludar(estudiante)
}

// resultado tras ejecutar:

// Hola, Carlos ¿como estas?
// Hola, Maria ¿como estas?
// Hola, Pedro ¿como estas?
// Hola, Angela ¿como estas?
// Hola, Mario ¿como estas?
// Hola, Paula ¿como estas?
// Hola, Andres ¿como estas?
// Hola, Daniel ¿como estas?




//USO DE "WHILE"

var estudiantes = ["Carlos", "Maria", "Pedro", "Angela", "Mario", "Paula", "Andres", "Daniel"];

function saludar(estudiante){
    console.log(`Hola, ${estudiante} ¿como estas?`);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludar(estudiante);
}

// resultado tras ejecutar:

// (8) ["Carlos", "Maria", "Pedro", "Angela", "Mario", "Paula", "Andres", "Daniel"]
// Hola, Carlos ¿como estas?
// (7) ["Maria", "Pedro", "Angela", "Mario", "Paula", "Andres", "Daniel"]
// Hola, Maria ¿como estas?
// (6) ["Pedro", "Angela", "Mario", "Paula", "Andres", "Daniel"]
// Hola, Pedro ¿como estas?
// (5) ["Angela", "Mario", "Paula", "Andres", "Daniel"]
// Hola, Angela ¿como estas?
// (4) ["Mario", "Paula", "Andres", "Daniel"]
// Hola, Mario ¿como estas?
// (3) ["Paula", "Andres", "Daniel"]
// Hola, Paula ¿como estas?
// (2) ["Andres", "Daniel"]
// Hola, Andres ¿como estas?
// ["Daniel"]
// Hola, Daniel ¿como estas?