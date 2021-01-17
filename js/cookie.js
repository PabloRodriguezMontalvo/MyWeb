
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
$(document).ready(function(){
var result="";
var x="";
var req1 =  $.getJSON("https://jsonip.com/?callback=?", function (data) {
      
        result=data.ip;
    });
  
$.when(req1).done(function(){
x =Cookies.get(result);
if (x=="si")
    {
    // $( "#adver" ).removeClass( "rm-back" );
    // $( "#adver" ).removeClass( "page" );
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
    // $( "#resume" ).addClass( "rm-back" );
    // $( "#resume" ).addClass( "page" );
    // $( "#resume" ).removeClass( "rm-back2" );
           
    //   $( "#adver" ).removeClass( "rm-back" );
    //   $( "#adver" ).addClass( "rm-back2" );
    //   $( "#adver" ).removeClass( "page" );
      
    //   $( "#portfolio" ).addClass( "rm-middle" );
    // $( "#portfolio" ).removeClass( "rm-middle2" );

    $(window).trigger('resize');
    }
else
    {


//    $( "#adver" ).addClass( "rm-back" );
//     $( "#adver" ).addClass( "page" );
//     $( "#adver" ).removeClass( "rm-back2" );
//      $("#adver").show();
//      $("#adver").attr('style', 'display: inherit !important;' );
 
//       $( "#resume" ).removeClass( "rm-back" );
//       $( "#resume" ).addClass( "rm-back2" );
//       $( "#resume" ).removeClass( "page" );
//  $("#resume").hide();
//     // $( "#adver" ).addClass( "rm-back" );
//     // $( "#adver" ).addClass( "page" );
//       $( "#portfolio" ).addClass( "rm-middle2" );
//     $( "#portfolio" ).removeClass( "rm-middle" );
        $(window).trigger('resize');
    // $("#adver").show();
   

    }
});


    });