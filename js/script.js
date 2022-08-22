// JavaScript Document
$(document).ready(function() {
	// Toggle Menu Start
	document.addEventListener('click',function(e){
		// Hamburger menu
		if(e.target.classList.contains('hamburger-toggle')){
		  e.target.children[0].classList.toggle('active');
		}
	});
	// Toggle Menu end

	// Customer Say
	$(".customers-say-carousel").slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left"></i></div>',
  		nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right"></i></div>',
		prevArrow: $(".customer-say__prev__arrow"),
		nextArrow: $(".customer-say__next__arrow"),
		responsive: [
		{
			breakpoint: 576,
			settings: {
				dots: true,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});
	// Customer Say

	// Our Heroes
	$(".our-heroes-carousel").slick({
		dots: false,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left"></i></div>',
  		nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right"></i></div>',
		prevArrow: $(".our-heroes__prev__arrow"),
		nextArrow: $(".our-heroes__next__arrow"),
	});
	// Our Heroes

	// Some Developers
	$(".some-developers-carousel").slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		// prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left"></i></div>',
  		// nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right"></i></div>',
		prevArrow: $(".some-developers__prev__arrow"),
		nextArrow: $(".some-developers__next__arrow"),
		responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});
	// Some Developers

	// counter
	// $('.counter span').counterUp({
	// 	delay: 10,
	// 	time: 1000,
	// 	// triggerOnce:true
	// });
	// counter

	// OFI Browser
	objectFitImages();
});

