$('#nav li a').mouseover(function(){
   $(this).css('background-color', 'red').css('color', 'white')
        .animate({"margin-top": "-10px"}, 100); 
}).mouseout(function(){
    $(this).css('background-color', 'white').css('color', 'black')
        .animate({"margin-top": "0px"}, 1000); 
});


$("#nav2,#nav3,#nav4").addClass('contentBox');

$("#nav1,#nav2,#nav3,#nav4").hide();

$('.button-color-1 a').click(function(){
   $('#nav1').show('slow');
   $("#nav2,#nav3,#nav4").hide();
});

$('.button-color-2 a').click(function(){
   $('#nav2').show('slow');
   $("#nav1,#nav3,#nav4").hide();
});

$('.button-color-3 a').click(function(){
   $('#nav3').show('slow');
   $("#nav1,#nav2,#nav4").hide();
});

$('.button-color-4 a').click(function(){
   $('#nav4').show('slow');
   $("#nav1,#nav2,#nav3").hide();
});

//Always use "" in JSON