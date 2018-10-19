'use strict'

$(document).ready(function(){
    console.log("OK!!")

    var verde = $("#verde");
    var blanco = $("#blanco");
    var rojo = $("#rojo");

    //ID
    verde.css("background", "green")
               .css("color", "white");

    blanco.css("background", "white");

    rojo.css("background", "red")
              .css("color", "white");
    
    //Class
    var clase = $(".rayas");
    
    clase.click(function(){
        var cl = $(this);

        if (cl.hasClass("rayas")) {
            cl.removeClass("rayas");
        }else{
            cl.addClass("rayas");
        }

    });

    clase.mouseover(function(){
        $(this).css("background", "blue");     
    });

    verde.mouseout(function(){
        verde.css("background", "green")
        .css("color", "white");
    });

    blanco.mouseout(function(){
        $(this).css("background", "white")
        .css("color", "black");
    });

    rojo.on("mouseout",function(){
        $(this).css("background", "red")
        .css("color", "black");
    });


});