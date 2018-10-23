$(document).ready(function(){

    var datos = $("#datos");

    //Load
    //datos.load("https://reqres.in/api/users?page=2");

    //GET
    $.get("https://reqres.in/api/users?page=2", {page:4}, function(resp){
        resp.data.forEach((element, index) => {
            datos.append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });
    });

    //POST
    $("#formulario").submit(function(event){
        event.prevenDefault();

        var usuario = {
            nombre: $('input[name="nombre"]').val(),
            edad: $('input[name="edad"]').val(),
            carrera: $('input[name="carrera"]').val()
        }

        /*$.post($(this).attr("action"), usuario, function(resp){
            console.log(resp);
        }).done(function(){
            alert("Agregado");
        });*/


        //Método Ajax
        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario...");
            },
            success: function(response){
                console.log(response);
            },
            error: function(e){
                console.log("A ocurrido un error ", e);
            },
            timeout: 1000
        });

        return false;
    });




});