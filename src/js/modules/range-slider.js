

import 'jquery-ui';

function handleRangeSlider() {
	const $rangeSlider = $('.slider-range');

	$rangeSlider.each(function (i, el) {
		const $range = $(this).data('range');
		
		$(this).slider({
		  range: "min",
		  value: $range,
		  min: 1,
		  max: 500,
		  slide: function( event, ui ) {
	        $(this).parent().find('.form-control').val(ui.value);
	      }
		});
		
	})
}

$(window).on('load', function (e) {
	handleRangeSlider()
})
