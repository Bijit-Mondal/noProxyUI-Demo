// Cookies with Dark Mode in localStorage

var darkmode = localStorage.getItem('darkmode');

if (darkmode === 'enabled') {
	$('body').addClass('dark');
	$('.theme-modes i').addClass('dark');
	localStorage.setItem('darkmode', 'enabled');
}

$('#app-theme').click(function () {

	var darkmode = localStorage.getItem('darkmode');

	if (darkmode !== 'enabled') {
		$('body').addClass('dark');
		$('.theme-modes i').addClass('dark');
		localStorage.setItem('darkmode', 'enabled');
	}
	else {
		$('body').removeClass('dark');
		$('.theme-modes i').removeClass('dark');
		localStorage.setItem('darkmode', null);
	}
});