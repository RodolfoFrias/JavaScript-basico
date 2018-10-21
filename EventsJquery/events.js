'use strict'

$(document).ready(function(){

    var caja = $("#cuadro");

    /*caja.mouseover(function(){
        $(this).css("background", "blue");
    });

    caja.mouseout(function(){
        $(this).css("background", "red");
    });*/

    //Funciones que serán paramétro para la función Hover
    function Azul(){
        $(this).css("background", "blue");
    }

    function Rojo(){
        $(this).css("background", "red");
    }

    //Funcion Hoverhace lis mismo que la primera forma
    caja.hover(Azul, Rojo);

    //Click
    caja.click(function(){
        $(this).css("background", "gray");
    });

    //Doble click
    caja.dblclick(function(){
        $(this).css("background", "purple");
    });

    var inp = $("#in");
    var datos = $("#data");
    //Focus
    inp.focus(function(){
        $(this).css("border", "2px solid red");
    });

    //Blur
    inp.blur(function(){
        $(this).css("border", "1px solid #ccc")
        datos.text($(this).val()).show();
    });

    //Mousemove
    $(document).mousemove(function(event){
        $("body").css("cursor", "none");
        $("#followme").css("left", event.clientX)
                      .css("top", event.clientY);
    });




});