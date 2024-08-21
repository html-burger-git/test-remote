function fixedHeader() {
	const $header = $('.header');

	if ($(window).scrollTop() > 0) {
		$header.addClass('is-fixed')
	} else {
		$header.removeClass('is-fixed')
	}
}

$(window).on('load scroll', function () {
	fixedHeader()
})