$(document).ready(function() {
	$(".post-title").fitText();

	$(window).on('scroll', function(event) {
		if ($(window).scrollTop() >= $('.post-header').height() + 50) {
			$('body').addClass('scrolled');
		} else {
			$('body').removeClass('scrolled');
		}
	  event.preventDefault();
	});
});

