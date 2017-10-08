 var Lugar="";
            var ClienteFinal="";
            var Teletrabajo="";
            var Posicion="";
            var Parking="";
            var Salario="";
             var SalarioVariable="";
$(document).ready(function(){
    
    $('#envioPreguntas').click(function(){
        let puntos=0;
        puntos+=getPuntosLugar();
        puntos+=getPuntosSubcontratacion();
        puntos+=getPuntosTeleTrabajar();
        puntos+=getPuntosParking();
        puntos+=getPuntosPosicion();
        puntos+=getPuntosSalario();

          resolver(puntos);

    });
  });
function resolver(puntos)
{
    if(puntos>5)
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
 var req2 =$.getJSON("http://jsonip.com/?callback=?", function (data) {
      
        ip=data.ip;
    });

    $.when(req2).done(function(){
 Cookies.set(ip, 'si', { expires: 7 , path: '' });
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
                "message" : "Lugar:"+ Lugar +"\n\n Cliente Final:" +ClienteFinal+"\n\n Teletrabajo:" +Teletrabajo +"\n\Parking:" + Parking +"\n\nPosicion:" + Posicion+"\n\nPuntos:" + puntos,
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
            return 1;
            Lugar="Madrid Sur";
        }
        else
            {
                return 0;
                Lugar="No es Madrid sur";
            }
  }

  function getPuntosSubcontratacion()
  {
       var $input = $('#fs2');
      if  ($input.prop( "checked" )==true)
        {
            return 1;
            ClienteFinal="Sí";

        }
        else
            {
                return 0;
                ClienteFinal="No";

            }
  }  function getPuntosTeleTrabajar()
  {
       var $input = $('#fs3');
      if  ($input.prop( "checked" )==true)
        {
            return 1;
                        Teletrabajo="Sí";

        }
        else
            {
                return 0;
                            Teletrabajo="No";
            }
  }
        function getPuntosParking()
  {
       var $input = $('#fs4');
      if  ($input.prop( "checked" )==true)
        {
            return 1;
            Parking="Sí";
        }
        else
            {
                return 0;
                Parking="No";
            }
  }

       function getPuntosPosicion()
  {
       var $input = $('#posicion');
      if  ($input.val()=="jun")
        {
            return 0;
             Posicion="Junior";
        }
        else if ($input.val()=="sen")
            {
                return 1;
                 Posicion="Senior";
            }

               else if ($input.val()=="anal")
            {
                return 2;
                 Posicion="Analista";
            }
               else if ($input.val()=="full")
            {
                return 2;
                 Posicion="FullStack";
            }
            else
                {
                    return 1;
                     Posicion="Otro";
                }
  }

     function getPuntosSalario()
  {
       var $input = $('#Salario');
      if  ($input.val()=="20")
        {
            return 0;
            Salario="20.000";
        }
        else if ($input.val()=="25")
            {
                return 1;
                Salario="25.000";
            }

               else if ($input.val()=="30")
            {
                return 2;
                Salario="30.000";
            }
               else if ($input.val()=="35")
            {
                return 3;
                Salario="35.000";
            }
            else
                {
                    return 0;
                    Salario="Segun valía";
                }
  }
   function getPuntosSalarioVariable()
  {
       var $input = $('#variable');
      if  ($input.val()=="NoVariable")
        {
            return 0;
            SalarioVariable="No variable";
        }
        else if ($input.val()=="10Variable")
            {
                return 1;
                SalarioVariable="10%";
            }

               else if ($input.val()=="20Variable")
            {
                return 2;
                SalarioVariable="20%";
            }
               else if ($input.val()=="30Variable")
            {
                return 3;
                SalarioVariable="30%";
            }
            else
                {
                    return 0;
                    SalarioVariable="Por encima";
                }
  }