var name = "Ricardo"

function fullname(){
    var lastname = "Torres Marquez"
    return name + lastname
}

fullname()  //Arrojara: RicardoTorres Marquez, para añadir el espacio podemos añadirlo en el texto asi:


function fullname(){
    var lastname = " Torres Marquez"
    return name + lastname
}

// o asi, para no ponerlo en el string:

function fullname(){
    var lastname = "Torres Marquez"
    return name + " " + lastname    // colocando un espacio de manera literal mediante strings
}

//Como hemos realizado, llamamos la variable GLOBAL "name" dentro del SCOPE LOCAL "fullname", pero si quisieramos llamar desde fuera del SCOPE LOCAL la variable interna de este "lastname"

lastname //simplemente nos lanzaria que no se ha declarado una variable como esta, porque desde el SCOPE GLOBAL no ingresara a los SCOPE LOCALES para buscar esta variable declarada