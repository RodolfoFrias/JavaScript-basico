$(document).ready(function(){

    var caja = $(".caja");
    var lista = $(".lista");

    //Mueve elemento por la página
    caja.draggable();

    //Redimencionar los elementos
    caja.resizable();

    //Seleccionar elementos
    //lista.selectable();

    //Ordenar elementos
    lista.sortable({
        update: function(event){
            console.log("Cambio!!")
        }
    });

    //Dropable
    $("#dos").droppable({
        drop: function(){
            console.log("Dentro");
        }
    });

    //Tooltip
    $(document).tooltip();

    //Cuadro de dialogo
    $("#box").on('click', function(){
        $("#dial").dialog();
    });

    //Calendanrio
    $("#calendario").datepicker();

    //Tabs
    $("#pestanas").tabs();
});