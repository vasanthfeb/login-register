
$("#reg").hide();
$("#regbtn").hide();
$("#box1").hide();
$("#box2").hide();
$("#log-1").hide();


$("#hide").click(function(){
$("#box1").show();
$("#box2").show();
$("#reg").show();
$("#regbtn").show();
$("#log-1").show();
$("#log").hide();
$("#logbtn").hide();
$("#fp").hide();
$("#reg-1").hide();
}); 


$(document).ready(function(){
$("#hide-2").click(function(){
$("body").css("background", "url(./img/login.jpg) no-repeat");  

});
});



$("#hide-2").click(function(){
$("#box1").hide();
$("#box2").hide();
$("#reg").hide();
$("#log-1").hide();
$("#regbtn").hide();
$("#log").show();
$("#fp").show();
$("#reg-1").show();
$("#logbtn").show();

}); 


$(document).ready(function(){
$("#hide").click(function(){
$("body").css("background", "url(./img/register.jpg) no-repeat");  

// $("body").css({"background": "url(./img/two.jpeg) no-repeat", "min-height": "100vh", "background-size":"cover","justify-content":"center","display":"flex" ,"background-position":"center" ,"align-items":"center"});
});
});


