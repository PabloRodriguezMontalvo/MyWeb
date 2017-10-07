var x =Cookies.get('desbloqueado');

if (x=="si")
    {
          $( "#adver" ).removeClass( "rm-back page" );
      $("#adver").hide();
    
     
        $( "#resume" ).addClass( "rm-back page" );
    $("#resume").show();
    }
else
    {
        
    }

   