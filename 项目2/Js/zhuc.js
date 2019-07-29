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
	
	//点击图片旋转
	var r = 0;
	$(".yz_tp ul li").click(function() {
		r += 90;       //设点图片旋转度
		$(this).css("transform", "rotate(" + r + "deg)");
	})
	
	
	//短信验证码
	 var Dx=document.getElementById("yzma");
	 Dx.onclick=function(){
		 $(".yzan").css("background","#999999")
		 Dx.disabled=true;  //当点击倒计时后不能点击此按钮
		 var time=60;
		 var timer=setInterval(Djs,1000);	  //设置定时器 
		 function Djs(){
			 time--;
			 if(time>0){
				 Dx.innerHTML=time+"s后重新发送";
			 }else{
				 Dx.innerHTML="重新发送验证码";
				 Dx.disabled=false;   //当点击倒计时后不能点击此按钮
				 clearTimeout(timer);  //清除定时器
				 time=5;  //设置循环重新开始条件 
				 $(".yzan").css("background","#ff1901")
			 }
		 }
	 }
	
});