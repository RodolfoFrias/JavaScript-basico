'use strict'

if(Storage !== 'undefined'){
    console.log("Local storage ON")
}else{
    console.log("Local storage OFF")
}

var datos = {

    Nombre: "Rodolfo",
    Apellido: "Frías",
    Edad: 21

}

//Guarda datos en local storage
localStorage.setItem("Datos", JSON.stringify(datos));
//Obtener datos del local storage
console.log(JSON.parse(localStorage.getItem("Datos"))); 
//Remueve elemento
localStorage.removeItem("item");
//Borra todos los elementos
localStorage.clear();
