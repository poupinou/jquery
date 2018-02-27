// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

var $carrousel = $('#carrousel'),
$img = $('#carrousel img'),
indexImg = $img.length - 1,
i = 0,
$currentImg = $img.eq(i);

$img.css('display', 'none');
$currentImg.css('display', 'block');

$carrousel.append('<div class="controls"> <span class="prev">precedent</span> <span class="next">suivant</span> </div>');


$('.next').click(function(){

	i++;
	if( i<= indexImg){
	$img.css('display', 'none');
	$currentImg = $img.eq(i);
	$currentImg.css('display', 'block');
}
else{
	i = indexImg;
}

});

$('.prev').click(function(){

	i--;
	if(i>= 0){
	$img.css('display', 'none');
	$currentImg = $img.eq(i);
	$currentImg.css('display', 'block');
}
else{
	i = 0;
}

});

function slideImg(){
	setTimeout(function(){

		if(i < indexImg){
			i++;
		}

		else{
			i = 0;
		}

		$img.css('display', 'none');

		$currentImg = $img.eq(i);
		$currentImg.css('display', 'none');

		slideImg();

	}, 7000);

}

slideImg();

