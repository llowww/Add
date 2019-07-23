$(function(){
	$("#yhh").mouseover(function(){
		$(".yh").show();		
		$(".My_yh").addClass("My_yh2")
		$("#yhh").css("background","#eaeceb")
	}).mouseout(function(){
		$(".yh").hide();	
		$(".My_yh").removeClass("My_yh2")
		$("#yhh").removeAttr("style"," ")     
	}) 
	
	
	
	$("#khh").mouseover(function(){
		$(".kh").show();		
		$(".My_yh3").addClass("My_yh4")
		$("#khh").css("background","#eaeceb")
	}).mouseout(function(){
		$(".kh").hide();	
		$(".My_yh3").removeClass("My_yh4")
		$("#khh").removeAttr("style"," ")     
	}) 
		
});

