$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		nav: true,
		margin: 20,
		dots: true,
		dotsEach: true,
		center: true,
		autoplay: true,
		autoplayTimeout: 10000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});
});