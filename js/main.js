$(document).keydown(function(event){
		if($('#skieurImg').hasClass('right')){
			$('#skieurImg').removeClass('right')
		}
		if($('#skieurImg').hasClass('left')){
			$('#skieurImg').removeClass('left')
		}
	if(event.keyCode==37){
		$('#skieurImg').addClass('left');
	}

	if(event.keyCode==39){
			$('#skieurImg').addClass('right');
	}
});


var percent=1;
$(".sapin1").css('background-color:', "red");