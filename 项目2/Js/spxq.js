$(function() {
	$(".t1_xt1").hover(function() {
		$(this).css("border", "2px solid black");
		$(".sptp_t1 ul li").css("background","url(img/spxx_tp4.jpg) no-repeat");
		$(".sptp_t1 ul li").css("background-size","420px 565px");
	}, function() {
		$(this).css("border", "2px solid transparent");	

	});
	
	
	$(".t1_xt2").hover(function() {
		$(this).css("border", "2px solid black");
		$(".sptp_t1 ul li").css("background","url(img/spxx_tp5.jpg) no-repeat");
		$(".sptp_t1 ul li").css("background-size","420px 565px");
	}, function() {
		$(this).css("border", "2px solid transparent");	
	
	});
	
		$(".t1_xt3").hover(function() {
		$(this).css("border", "2px solid black");
		$(".sptp_t1 ul li").css("background","url(img/spxx_tp14.jpg) no-repeat");
		$(".sptp_t1 ul li").css("background-size","420px 565px");
	}, function() {
		$(this).css("border", "2px solid transparent");	
	
	});
	
	
		$(".t1_xt4").hover(function() {
		$(this).css("border", "2px solid black");
		$(".sptp_t1 ul li").css("background","url(img/spxx_tp6.jpg) no-repeat");
		$(".sptp_t1 ul li").css("background-size","420px 565px");
	}, function() {
		$(this).css("border", "2px solid transparent");	
	
	});
	
	//点击变色
	$(".sp_ycs .ys").click(function(){
		$(this).css("border","1px solid #000000").siblings().css("border","");
	});
	
	$(".sp_ycs .huas").click(function(){
		$(this).css("border","1px solid #000000").siblings().css("border","");	
	});
	
	$(".sp_ycs .fsl").click(function(){
		$(this).css("border","1px solid #000000").siblings().css("border","");	
	});
		
	
	$(".sp_ycs .cm").click(function(){
		$(this).toggleClass("cm_bjs").siblings().removeClass("cm_bjs");
	});
	
   //隔行变色
	$(".cmbg tr:odd").css("background", "#f9f9f9");


	$(".h31").click(function() {
		$(this).toggleClass("h33");
		$(".h32").toggleClass("h34");
        $(".sppj_fx_none2").css("display","none");
		$(".sppj_fx_none").css("display","block");

	});

	$(".h32").click(function() {
		$(this).toggleClass("h34");
		$(".h31").toggleClass("h33");				
		$(".sppj_fx_none").css("display","none");
		$(".sppj_fx_none2").css("display","block");
	});






	$(".shfw2").click(function() {
		$(".shfw").toggleClass("shfw3");
		$(".xia").toggleClass("shang");
		$(".xt_cn").toggleClass("xs");
	});



});

