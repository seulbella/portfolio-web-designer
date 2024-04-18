var header = 0;
var speed = 1500; /* 자동 스크롤링 부드럽게 */


$(window).load(function () {	    

	$('*[data-button]').click(function() {
		$('html, body').animate({
		scrollTop: $('*[data-section="'+$(this).attr('data-button')+'"]').offset().top},speed);

}); });