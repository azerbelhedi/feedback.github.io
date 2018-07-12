var a=5;
$("#b1").click(function(){
	$("img").attr("src","res/happy.gif");
	$("#msg").html("of course ");
	$(".lab").html("");
	$("#buttons").css("display","none");
	$("#feedbackarea").css("visibility","hidden");
	var audio=document.getElementById("happy");
	audio.currentTime=50;
	audio.play();
});

$("#b2").click(function(){
	$("img").attr("src","res/sad.gif");
	$("#msg").html("get out ");
	$(".lab").html("");
	$("#buttons").css("display","none");
	$("#feedbackarea").css("visibility","hidden");
	document.getElementById("sad").play();
});
