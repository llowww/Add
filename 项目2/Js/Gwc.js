$(function() {
	$(".sp1 .xux").mouseover(function() {
		$(this).css({
			"border": "1px dashed #d0021b ",
			"background": "url(img/tp89.gif)right no-repeat",
			"background-size": "14px 14px"
		});
	}).mouseout(function() {
		$(this).css({
			"border": "",
			"background": ""
		});
	})


	$("#yhh").mouseover(function() {
		$(".yh").show();
		$(".My_yh").addClass("My_yh2")
		$("#yhh").css("background", "#eaeceb")
	}).mouseout(function() {
		$(".yh").hide();
		$(".My_yh").removeClass("My_yh2")
		$("#yhh").removeAttr("style", " ")
	});



	$("#khh").mouseover(function() {
		$(".kh").show();
		$(".My_yh3").addClass("My_yh4")
		$("#khh").css("background", "#eaeceb")
	}).mouseout(function() {
		$(".kh").hide();
		$(".My_yh3").removeClass("My_yh4")
		$("#khh").removeAttr("style", " ")
	});





	//全选
	$(".checkbox").click(function() {
		if (this.checked) {
			$("[type=checkbox]").prop("checked", true);
		} else {
			$("[type=checkbox]").prop("checked", false);
		}
	});


	//全选
	$(".checkbox4").click(function() {
		if (this.checked) {
			$("[type=checkbox]").prop("checked", true);
		} else {
			$("[type=checkbox]").prop("checked", false);
		}
	});


	//删除商品
	$(".remove_sc").on("click", "a", function() {
		$(this).parents("li").remove();
		spsl();
		zoja();
	})


	//复选框删除商品
	$("#del").click(function() {
		$(".gwc_sp1 li").each(function() {
			if ($(".gwc_sp1 .checkbox3").prop("checked")) {
				$(this).remove();              
			}

		});
		$(".q_jis").toggleClass("jis_ys");
		$("input[type=checkbox]").removeAttr("checked");		
		spsl();
		zoja();
	});

	 $(".checkbox3").click(function(){
		 $(".q_jis").addClass("jis_ys");
	 })



	//减
	$("[name=minus]").click(function() {
		var a = parseInt($(this).next().val()); //拿到数量的值
		a = a - 1;
		$(this).next().val(a); //数量减1
		if (a < 1) {
			a = 1;
			$(this).next().val(a);
		}
		zoja();
		spsl();

	});

	//加
	$("[name=plus]").click(function() {
		var b = parseInt($(this).prev().val()); //拿到数量的值
		b = b + 1;
		$(this).prev().val(b); //数量加1
		/* if (b > 20) {
			b = 20;
			$(this).prev().val(b);
			alert("最多只能选购买20件商品哦*^____^*");
		} */
		zoja();
		spsl();
	});


	//计算总价
	zoja();

	function zoja() {
		var money = 0;
		$(".gwc_sp_li").each(function(i, dom) { //循环li
			var shul = $(dom).find(".shul").val(); //拿到数量值
			var xiaoji = shul * $(dom).find(".price").text(); //拿到商品原单价，与数量相乘
			$(dom).find(".price2").text(parseInt(xiaoji)); //拿到商品相乘的单价
			money += xiaoji; //进行相加
		});
		$("#totalPrice").html(money); //把值放入总价
	}


	spsl();

	function spsl() {
		var a = 0;
		$(".gwc_sp_li").each(function(i, dom) { //循环li
			var num = $(dom).find(".shul").val(); //拿到数量值
			a += parseInt(num); //先加数量一遍，随后等于
		});
		$("#sl").text(a); //把值放入数量里
	}


});
