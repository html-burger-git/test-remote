
$('.js-burger').on('click', function (e) {
	e.preventDefault();

	$(this).toggleClass('is-active');
	$('.header__aside').toggleClass('is-active')
})

$('.js-table thead').on('click', function (e) {
	e.preventDefault();
	const $this = $(this);

	$this.parent().find('tbody').slideToggle().toggleClass('is-visible')
})

$('.dropdown-toggle').on('click', function (e) {
	e.preventDefault();
	const $this = $(this);

	if ($(window).width() <= 767) {
		$this.next().slideToggle()


		$this.parent().toggleClass('is-active');

		$this.parent().siblings().removeClass('is-active');
		$this.parent().siblings().find('.dropdown-menu').slideUp();
	}
 

})

$('.js-tab').on('click', function(){
	$($(this).data('image-id')).addClass('is-active').siblings().removeClass('is-active')
	$(this).addClass('is-active').siblings().removeClass('is-active')
})

