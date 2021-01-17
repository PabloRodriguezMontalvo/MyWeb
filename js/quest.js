var Lugar="";
var ClienteFinal="";
var Teletrabajo="";
var Posicion="";
var Parking="";
var Salario="";
var SalarioVariable="";
var Justificacion="";
var Otros="";
$(document).ready(function(){
    
    $('#envioPreguntas').click(function(){
        let puntos=0;
        puntos+=getPuntosLugar();
        puntos+=getPuntosSubcontratacion();
        puntos+=getPuntosTeleTrabajar();
        puntos+=getPuntosParking();
        puntos+=getPuntosPosicion();
        puntos+=getPuntosSalario();
        getTextoJustificacion();
        getTextoOtros();
        resolver(puntos);

    });
  });
function resolver(puntos)
{
    if(puntos>4)
        {
            desbloqueaCV();
        }
        else
            {
            niegaEntrada();
            }

            envioMail(puntos);
}

function desbloqueaCV()
{ 
    var ip="";
 var req2 =$.getJSON("https://jsonip.com/?callback=?", function (data) {
      
        ip=data.ip;
    });

    $.when(req2).done(function(){
 Cookies.set(ip, 'si', { expires: 7 , path: '' });
});
$( "#resume" ).empty();
 $.get('resume.html')
             .success(function(data) {
                 $('#resume').html(data);
             });
// $('#resume').load("resume.html",function(){ $('#resume').trigger('create'); });

$( "#portfolio" ).empty();

// $('#preguntas').load("portfolio.html",function(){ $('#preguntas').trigger('create'); });
 $.get('portfolio.html')
             .success(function(data) {
                 $('#portfolio').html(data);
             });
 }
  function niegaEntrada()

  {
           var ip="";
 var req2 =$.getJSON("http://jsonip.com/?callback=?", function (data) {
      
        ip=data.ip;
    });

   $.when(req2).done(function(){
 Cookies.set(ip, 'no', { expires: 7 , path: '' });
    });
  }

 function envioMail(puntos)

  {

      var parametros = {
                "message" : "Lugar:"+ Lugar +"\n\n Cliente Final:" +ClienteFinal+"\n\n Teletrabajo:" +Teletrabajo +"\n\Parking:" + Parking +"\n\nPosicion:" + Posicion+"\n\nPuntos:" + puntos +"\n\Justificación:" + Justificacion+"\n\nOtras cosas:" + Otros,
                "subject":"Cuestionario mi WEB",
                "name":"Test",
                "email":"Trabajo@MiWeb.com"
               
        };
$.ajax({
    
  type: "POST",
  url: "send-mail.php",
  cache: false,
  data:  parametros,

 error: function(XMLHttpRequest, textStatus, errorThrown) { 
                    alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                },       
                success:  function (response) {
                        $("#resultado").html(response);
                              location.reload(true);
                }        }); 
                  

  }
  function getPuntosLugar()
  {
       var $input = $('#fs1');
      if  ($input.prop( "checked" )==true)
        {
                        Lugar="Madrid Sur";

            return 1;
        }
        else
            {
                                Lugar="No es Madrid sur";

                return 0;
            }
  }

  function getPuntosSubcontratacion()
  {
       var $input = $('#fs2');
      if  ($input.prop( "checked" )==true)
        {
                        ClienteFinal="Sí";

            return 1;

        }
        else
            {
                                ClienteFinal="No";

                return 0;

            }
  }  function getPuntosTeleTrabajar()
  {
       var $input = $('#fs3');
      if  ($input.prop( "checked" )==true)
        {
                                    Teletrabajo="Sí";

            return 1;

        }
        else
            {
                                            Teletrabajo="No";

                return 0;
            }
  }
        function getPuntosParking()
  {
       var $input = $('#fs4');
      if  ($input.prop( "checked" )==true)
        {
                        Parking="Sí";

            return 1;
        }
        else
            {
                                Parking="No";

                return 0;
            }
  }

       function getPuntosPosicion()
  {
       var $input = $('#posicion');
      if  ($input.val()=="jun")
        {
                         Posicion="Junior";

            return 0;
        }
        else if ($input.val()=="sen")
            {
                                 Posicion="Senior";

                return 1;
            }

               else if ($input.val()=="anal")
            {
                                 Posicion="Analista";

                return 2;
            }
               else if ($input.val()=="full")
            {
                                 Posicion="FullStack";

                return 2;
            }
            else
                {
                                         Posicion="Otro";

                    return 1;
                }
  }

     function getPuntosSalario()
  {
       var $input = $('#Salario');
      if  ($input.val()=="20")
        {
                        Salario="20.000";

            return 0;
        }
        else if ($input.val()=="25")
            {
                                Salario="25.000";

                return 1;
            }

               else if ($input.val()=="30")
            {
                                Salario="30.000";

                return 2;
            }
               else if ($input.val()=="35")
            {
                                Salario="35.000";

                return 3;
            }
            else
                {
                                        Salario="Segun valía";

                    return 0;
                }
  }
   function getPuntosSalarioVariable()
  {
       var $input = $('#variable');
      if  ($input.val()=="NoVariable")
        {
                        SalarioVariable="No variable";

            return 0;
        }
        else if ($input.val()=="10Variable")
            {
                                SalarioVariable="10%";

                return 1;
            }

               else if ($input.val()=="20Variable")
            {
                                SalarioVariable="20%";

                return 2;
            }
               else if ($input.val()=="30Variable")
            {
                                SalarioVariable="30%";

                return 3;
            }
            else
                {
                                        SalarioVariable="Por encima";

                    return 0;
                }
  }
             function getTextoJustificacion()
  {
       Justificacion = $('#Just').val();
 
  }

             function getTextoOtros()
  {
       Otros = $('#OtrosC').val();
 
  }