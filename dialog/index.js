(function() {
	$('#mask').css("display", "block");
	setTimeout(function() {
		$('.reback').click(function() {
			$('#mask,#pop').css("display", "none");
		});
	}, 1000);
})()