$(document).keydown(function(event){
		if($('#skieurImg').hasClass('right')){
			$('#skieurImg').removeClass('right');
			$('.footcontainer').removeClass('right');
		}
		if($('#skieurImg').hasClass('left')){
			$('#skieurImg').removeClass('left');
			$('.footcontainer').removeClass('left');
		}
	if(event.keyCode==37){
		$('#skieurImg').addClass('left');
		$('.footcontainer').addClass('left');
	}

	if(event.keyCode==39){
			$('#skieurImg').addClass('right');
			$('.footcontainer').addClass('right');
	}
});


//var percent=1;
//$(".sapin1").css('background-color:', "red");