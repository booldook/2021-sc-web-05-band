$('.bars-wrapper').click(function() {
	$('.monavi-wrapper').toggleClass('active')
})

var swiper = new Swiper('.main-wrapper .swiper-container', {
	loop: true,
	effect: 'fade',
	speed: 0,
	autoplay: { delay: 5000 },
	navigation: {
		nextEl: '.main-wrapper .bt-next',
		prevEl: '.main-wrapper .bt-prev',
	},
})