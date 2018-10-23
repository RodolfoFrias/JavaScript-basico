
    /*En hide, show, fadeIn y fadeOut
     puede ir como parámetro
     fast, slow y normal

     El fadeTo el segundo parámetro es
     la opacidad, va de 0 a

     slideUp para cerrar, slideDown para abrir.

    */

$(document).ready(function(){

    var mostrar = $("#mostrar");
    var ocultar = $("#ocultar");
    var caja = $("#caja");
    var anima = $("#anima");
    mostrar.hide();

    mostrar.click(function(){
        $(this).hide();
        ocultar.show();
        caja.fadeTo('slow', 1); 
        caja.fadeIn('slow');
        //caja.show('fast');
    });


    ocultar.click(function(){
        $(this).hide();
        mostrar.show();
        caja.fadeTo('slow', 0);
        caja.fadeOut('slow');
        //caja.hide('fast'); 
    });

    $("#accion").on('click', function(){
        //caja.toggle();
        //caja.fadeToggle();
        caja.slideToggle();
    });

    anima.on('click', function(){
        caja.animate({

            marginLeft: '400px',
            fontSize: '30px',
            width: '130px',
            borderRadius: '999px',
            padding: '20px'

        }, 'slow')

            .animate({
            
                marginTop: '200px',
                background: '#ccc'

            }, 'slow');
    });



});