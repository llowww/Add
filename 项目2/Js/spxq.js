$(function(){
	$("#spxt_t1_xt img").mouseover(function(){
		$(this).css("border","2px solid black");
	}).mouseout(function(){
		$(this).css("border","2px solid transparent");
	})
	
    $(".cmbg tr:odd").css("background","#f9f9f9");
	
	
  	$(".h31").click(function(){
		$(this).toggleClass("h33");
		$(".h32").toggleClass("h34");
        $(".sppj_fx_none2").toggleClass("sppj_fx_none3");
		$(".sppj_fx_none").toggleClass("sppj_fx_block");

	});
	
	
	 $(".h32").click(function(){
		$(this).toggleClass("h34");
		$(".h31").toggleClass("h33");
		$(".sppj_fx_none").toggleClass("sppj_fx_none3");
		$(".sppj_fx_none2").toggleClass("sppj_fx_block");
	});
	

	

	
	$(".shfw2").click(function(){
		$(".shfw").toggleClass("shfw3");
		$(".xia").toggleClass("shang");
		$(".xt_cn").toggleClass("xs");
	})
	
	
	
})