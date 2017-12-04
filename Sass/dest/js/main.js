onmouseover

$(document).ready(function()
{
	$("button").click(function()
	{
		$("p").fadeToggle(400 , function(){$("button").fadeOut(200)});
	});
});

$(document).ready(function(){
	$(".fa-bars").click(function(){
		$(".down").fadeIn(600);
		// $(".down").css("display","block")
	});
});















































// $(function(){
// 	$(document).ready(function(){
// 	    $("#demo").hover(function(){
// 	        $(this).css("opacity", ".5");
// 	        }, function(){
// 	        $(this).css("opacity", "1");
// 	    });
// 	});
// });
