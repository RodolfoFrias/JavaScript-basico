'use strict'

function getInfo(){
    var info = {
        Nombre : "Juan",
        Apellido : "Perez",
        Edad : 22,
        Ocupacion : "Software developer"
    }

    return new Promise((solve, reject) => {
        var datos = JSON.stringify(info);

        if(typeof(datos) != 'string') return reject('Eror no es un string');
        return solve(datos);
    });

}
