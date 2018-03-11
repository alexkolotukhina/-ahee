;(function($){


	$(document).ready(function(){

		$('.ba-menu').on('click', function(evt) {
			$('.ba-header__nav').toggleClass('ba-nav--open');
		})

		$(document).on('click', 'a[href^="#"]', function (event) {
		    event.preventDefault();

		    $('html, body').animate({
		        scrollTop: $($.attr(this, 'href')).offset().top
		    }, 500);
		});

	});
})(jQuery);