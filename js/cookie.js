
// function DameIP()
// {

//     var result;
//     $.ajax({
//         type:'GET',
//         url:'http://jsonip.com/?callback=?',
//         dataType:'json',
//         async:false,
//         success:function(data){
//             result = data.ip;
//         }
//     });
//     return result;


// }
var result="";
var x="";
var req1 =  $.getJSON("http://jsonip.com/?callback=?", function (data) {
      
        result=data.ip;
    });
  
$.when(req1).done(function(){
x =Cookies.get(result);
if (x=="si")
    {
    // $( "#adver" ).removeClass( "rm-back" );
    // $( "#adver" ).removeClass( "page" );
  
    $( "#resume" ).addClass( "rm-back" );
    $( "#resume" ).addClass( "page" );
    $( "#resume" ).removeClass( "rm-back2" );
           
      $( "#adver" ).removeClass( "rm-back" );
      $( "#adver" ).addClass( "rm-back2" );
      $( "#adver" ).removeClass( "page" );
      
      $( "#portfolio" ).addClass( "rm-middle" );
    $( "#portfolio" ).removeClass( "rm-middle2" );

    $(window).trigger('resize');
    }
else
    {
   $( "#adver" ).addClass( "rm-back" );
    $( "#adver" ).addClass( "page" );
    $( "#adver" ).removeClass( "rm-back2" );
     $("#adver").show();
     $("#adver").attr('style', 'display: inherit !important;' );
 
      $( "#resume" ).removeClass( "rm-back" );
      $( "#resume" ).addClass( "rm-back2" );
      $( "#resume" ).removeClass( "page" );
 $("#resume").hide();
    // $( "#adver" ).addClass( "rm-back" );
    // $( "#adver" ).addClass( "page" );
      $( "#portfolio" ).addClass( "rm-middle2" );
    $( "#portfolio" ).removeClass( "rm-middle" );
        $(window).trigger('resize');
    // $("#adver").show();
   

    }
});


   