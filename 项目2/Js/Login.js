$(function() {
	$(".check").click(function() {
		$(this).toggleClass("check2");
	});


	$("#yhh").mouseover(function() {
		$(".yh").show();
		$(".My_yh").addClass("My_yh2")
		$("#yhh").css("background", "#eaeceb")
	}).mouseout(function() {
		$(".yh").hide();
		$(".My_yh").removeClass("My_yh2")
		$("#yhh").removeAttr("style", " ")
	})



	$("#khh").mouseover(function() {
		$(".kh").show();
		$(".My_yh3").addClass("My_yh4")
		$("#khh").css("background", "#eaeceb")
	}).mouseout(function() {
		$(".kh").hide();
		$(".My_yh3").removeClass("My_yh4")
		$("#khh").removeAttr("style", " ")
	})


	//点击图片旋转
	var r = 0;
	$(".yz_tp ul li").click(function() {
		r += 90;       //设点图片旋转度
		$(this).css("transform", "rotate(" + r + "deg)");
	})
	
/* 	
 	//正则表达式，判断邮箱或者号码与密码是否正确
	$("#em_hm").blur(function(){
		 var em_hm=$(this).val();
		var $em_hm_ts=$("#em_hm_ts");
		var emhmBds= /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)||(13|15|17)\d{10}$/;
		if(emhmBds.test(em_hm)==false){
			$em_hm_ts.html("请输入正确的邮箱");
			return false;
		}
			$em_hm_ts.html(" ");
			return true; 
			
	}); */
	
	
	$(".d_l").click(function(){
		$.ajax({
			type:"get",
			url:"ajax/json.json",
			dateType;"JSON",
			success:function(resute){
				var yhm=resute[1].yhm;
				
			}
			
		});
	});
	  
});
