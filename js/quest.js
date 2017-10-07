  $(document).ready(function(){
    $('#envioPreguntas').click(function(){
        let puntos=0;
        puntos+=getPuntosLugar();
           puntos+=getPuntosSubcontratacion();
           puntos+=getPuntosTeleTrabajar();
           puntos+=getPuntosParking();
         puntos+=  getPuntosPosicion();
          puntos+=  getPuntosSalario();

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

            envioMail();
}

function desbloqueaCV()
{
    Cookies.set('desbloqueado', 'si', { expires: 7 , path: '' });
}

  function niegaEntrada()

  {
          Cookies.set('desbloqueado', 'no', { expires: 7, path: '' });

  }

 
  function getPuntosLugar()
  {
       var $input = $('#fs1');
      if  ($input.prop( "checked" )==true)
        {
            return 1;
        }
        else
            {
                return 0;
            }
  }

  function getPuntosSubcontratacion()
  {
       var $input = $('#fs2');
      if  ($input.prop( "checked" )==true)
        {
            return 0;
        }
        else
            {
                return 1;
            }
  }  function getPuntosTeleTrabajar()
  {
       var $input = $('#fs3');
      if  ($input.prop( "checked" )==true)
        {
            return 1;
        }
        else
            {
                return 0;
            }
  }
        function getPuntosParking()
  {
       var $input = $('#fs4');
      if  ($input.prop( "checked" )==true)
        {
            return 1;
        }
        else
            {
                return 0;
            }
  }

       function getPuntosPosicion()
  {
       var $input = $('#posicion');
      if  ($input.val()=="jun")
        {
            return 0;
        }
        else if ($input.val()=="sen")
            {
                return 1;
            }

               else if ($input.val()=="anal")
            {
                return 2;
            }
               else if ($input.val()=="full")
            {
                return 2;
            }
            else
                {
                    return 1;
                }
  }

     function getPuntosSalario()
  {
       var $input = $('#Salario');
      if  ($input.val()=="20")
        {
            return 0;
        }
        else if ($input.val()=="25")
            {
                return 1;
            }

               else if ($input.val()=="30")
            {
                return 2;
            }
               else if ($input.val()=="35")
            {
                return 3;
            }
            else
                {
                    return 0;
                }
  }
