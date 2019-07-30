$(function() {

	$(".lbt_bottom li:nth-of-type(1) a").css("opacity", "0");

	var index = 0;
	//左侧按钮
	$(".lbt_left").click(function() {
		index--;
		if (index < 0) {
			index = 7;
		}
		$(".lbt_top li a").css("background", "url(img/SP_tp" + (index + 1) + ".jpg");
		$(".lbt_bottom li:nth-of-type(" + (index + 1) + ") a").css("opacity", "0");

		if (index == 0) { //当index等于第一张图时，设置透明度，否则还原
			$(".lbt_bottom li:nth-of-type(1) a").css("opacity", "0");
		} else if (index != 0) {
			$(".lbt_bottom li:nth-of-type(1) a").css("opacity", "0.3");
		}

		$(".lbt_bottom li:nth-of-type(" + (index + 2) + ") a").css("opacity", "0.3"); //当前这张图片的上一张，设置透明度

	});

	//右侧按钮
	$(".lbt_right").click(function() {
		index++;
		if (index > 7) {
			index = 0;
		}
		$(".lbt_top li a").css("background", "url(img/SP_tp" + (index + 1) + ".jpg");
		$(".lbt_bottom li:nth-of-type(" + (index + 1) + ") a").css("opacity", "0");


		if (index == 0) { //当index等于第一张图时，设置透明度，否则还原
			$(".lbt_bottom li:nth-of-type(1) a").css("opacity", "0");
		} else if (index != 0) {
			$(".lbt_bottom li:nth-of-type(1) a").css("opacity", "0.3");
		}

		if (index == 7) { //当index等于第8张图时，设置透明度，否则还原
			$(".lbt_bottom li:nth-of-type(8) a").css("opacity", "0");
		} else if (index != 7) {
			$(".lbt_bottom li:nth-of-type(8) a").css("opacity", "0.3");
		}

		$(".lbt_bottom li:nth-of-type(" + index + ") a").css("opacity", "0.3"); //当前这张图片的上一张，设置透明度									 	
	});

	
	$(".lbt_bottom li a").each(function(i) {
		$(this).mousemove(function() {
			$(".lbt_top li a").css("background", "url(img/SP_tp" + (i + 1) + ".jpg");

		});
	});


	//定时滚动
	var runId = " ";

	function run() {
		runId = setInterval(function() {
			index++;
			if (index > 7) {
				index = 0;
			}
			$(".lbt_top li a").css("background", "url(img/SP_tp" + (index + 1) + ".jpg");
			$(".lbt_bottom li:nth-of-type(" + (index + 1) + ") a").css("opacity", "0");

			if (index == 0) { //当index等于第一张图时，设置透明度，否则还原
				$(".lbt_bottom li:nth-of-type(1) a").css("opacity", "0");
			} else if (index != 0) {
				$(".lbt_bottom li:nth-of-type(1) a").css("opacity", "0.3");
			}

			if (index == 7) { //当index等于第8张图时，设置透明度，否则还原
				$(".lbt_bottom li:nth-of-type(8) a").css("opacity", "0");
			} else if (index != 7) {
				$(".lbt_bottom li:nth-of-type(8) a").css("opacity", "0.3");
			}

			$(".lbt_bottom li:nth-of-type(" + index + ") a").css("opacity", "0.3"); //当前这张图片的上一张，设置透明度	
		}, 1500);
	};

	run();
	//移入暂停和移出恢复定时滚动
	$(".lbt_top li a").mousemove(function() {
		clearInterval(runId);
	}).mouseout(function() {
		run();
	});



	$(".lbt_bottom li a").mousemove(function() {
		$(this).css("opacity", "0");
	}).mouseout(function() {
		$(this).css("opacity", "0.3");
	});


});
