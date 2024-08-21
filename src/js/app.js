/**
 * SCSS.
 */
import '/scss/style.scss';


/*
 * Modules
 */

import 'bootstrap';
// import './modules/range-slider';
import './modules/fixedHeader';
import './modules/clickEvents';
import './modules/slider';
import './modules/chart';


$('img').each( function(){
	const $this = $(this);
	const thisSrc = $this.attr('src');

	if (thisSrc.split('.svg').length == 1) {
		$this.attr('src', $('.header').data('image-src') + thisSrc)
	} else {
		$this.attr('src', $('.header').data('svg-src') + thisSrc)
	}
})

$('div[style]').each( function(){
	const $this = $(this);
	var backgroundPath = $(this).attr('style').split('background-image: url(').pop()
	
	$(this).attr('style', 'background-image: url(' + $('.header').data('image-src') + backgroundPath)
})
