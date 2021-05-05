// Preloader

$(window).on('load', function () {
	$('#preloader').css({
		'transform': 'translateY(-100%)',
		'transition-delay': '3.3s',
	});
	$('.loader img, .loader object').css({
		'transform': 'translateY(0)',
		'opacity': '1',
		'transition-delay': '0.6s',
	});
	$('.loader h2').css({
		'transform': 'translateY(0)',
		'opacity': '1',
		'transition-delay': '0.3s',
	}); 
});


// Theme Modes (Not Local Storage)
/*
$('#app-theme').click(function () {
	$('body').toggleClass('dark');
	$('.theme-modes i').toggleClass('dark');
});
*/


// Theme Modes (Local Storage)
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


// App Home

$('#app-home').click(function () {
	$('section.container-info').removeClass('show');
	$('section.container-searchcards').removeClass('show');
	$('section.container-searchfails').removeClass('show');
	$('section.container-mydwnlds').removeClass('show');
	$('section.container-about').removeClass('show');
});


// App Drawer

$('#app-menu').click(function () {
	$('section.container-drawer nav.app-drawer').addClass('show');
	$('#contents-body').addClass('show');
});

$('#app-drawer-close, #app-about').click(function () {
	$('section.container-drawer nav.app-drawer').removeClass('show');
	$('#contents-body').removeClass('show');
});


// App Info

$('#app-info').click(function () {
	$('section.container-info').toggleClass('show');
});

$('#app-drawer-close, #app-info-close').click(function () {
	$('section.container-info').removeClass('show');
});


// App Search

$('#app-search').click(function () {
	$('section.container-searchcards').addClass('show');
});

$('#app-drawer-close, #app-info, #app-search-close').click(function () {
	$('section.container-searchcards').removeClass('show');
});


// Search Failed

$('#app-search-fail').click(function () {
	$('section.container-searchfails').addClass('show');
});

$('#app-drawer-close, #app-info, #app-searchfail-close').click(function () {
	$('section.container-searchfails').removeClass('show');
});


// App My Downloads

$('#app-mydwnlds').click(function () {
	$('section.container-mydwnlds').addClass('show');
});

$('#app-drawer-close, #app-info, #app-mydwnlds-close').click(function () {
	$('section.container-mydwnlds').removeClass('show');
});


// App About Us

$('#app-about').click(function () {
	$('section.container-about').addClass('show');
	$('section.container-info').removeClass('show');
	$('section.container-searchcards').removeClass('show');
	$('section.container-searchfails').removeClass('show');
	$('section.container-mydwnlds').removeClass('show');
});

$('#app-about-close, #app-info, #app-info-close').click(function () {
	$('section.container-about').removeClass('show');
});