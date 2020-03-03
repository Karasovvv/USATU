
$(function() {

	$('.bars, .canel').on('click', function(){
		$('.menu-list').slideToggle();
	})

    $('.slider').slick({
		infinite: true,
		arrows: false,
		autoplay: false,
		dots: true,
	});
      
});
