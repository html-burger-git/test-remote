
import 'slick-carousel';

function initSlider() {
	$('.js-slider .slider__slides').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		centerMode: true,
		centerPadding: '0',
		responsive: [
		    {
		      breakpoint: 1023,
		      settings: {
		        slidesToShow: 2,
		        centerMode: false,
		      }
		    },

		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
	  	]
	})

	$('.js-slider-secondary .slider__slides').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		dots: false,
	})
}

$(window).on('load', function (e) {
	initSlider();
})
