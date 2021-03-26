$('.bars-wrapper').click(function(e) {
	$('.monavi-wrapper').toggleClass('active')
})

$('.tour-wrapper .bt-buy').click(function(e) {
	$('.modal-wrapper').addClass('active')
	$('.modal-wrapper > .modal-wrap').css('transform')
	$('.modal-wrapper > .modal-wrap').css('transform', 'translateY(0)')
})

$('.modal-wrapper, .modal-wrapper .bt-close').click(function(e) {
	$('.modal-wrapper').removeClass('active')
	$('.modal-wrapper > .modal-wrap').css('transform', 'translateY(-100vh)')
})

$('.modal-wrapper .modal-wrap').click(function(e) {
	e.stopPropagation()
})

var swiper = new Swiper('.main-wrapper .swiper-container', {
	loop: true,
	effect: 'fade',
	speed: 1000,
	autoplay: { delay: 5000, disableOnInteraction: false },
	navigation: {
		nextEl: '.main-wrapper .bt-next',
		prevEl: '.main-wrapper .bt-prev',
	},
})