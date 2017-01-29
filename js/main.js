// Loader

window.onload = function () {
	var loader = $('#loader');
	var tl = new TimelineMax();

	tl.to(loader, 1, {opacity: 0, ease:Power2.easeInOut}, 2)
	.to(loader, 0, {zIndex: -99999});
}

$(document).ready(function () {

	// Nav desktop

	$('.nav-desktop .hamburger').click(function(){
		if ($(".nav-desktop .hamburger").hasClass("hamburger-open")) {
			$(".nav-desktop .hamburger").removeClass("hamburger-open");
			$(".nav-desktop").removeClass("nav-desktop-open");
			$(".nav-desktop .nav-elements").removeClass("nav-elements-open");
		}
		else {
			$(".nav-desktop .hamburger").addClass("hamburger-open");
			$(".nav-desktop").addClass("nav-desktop-open");
			$(".nav-desktop .nav-elements").addClass("nav-elements-open");
		}
	});

	// Nav mobile

	$('.nav-mobile .hamburger').click(function(){
		if ($(".nav-mobile .hamburger").hasClass("hamburger-open")) {
			$(".nav-mobile .hamburger").removeClass("hamburger-open");
			$(".nav-mobile").removeClass("nav-mobile-open");
			$( ".nav-mobile .nav-elements" ).removeClass( "animated" );
		    $( ".nav-mobile .nav-elements" ).removeClass( "bounceInDown" );
		    $( ".nav-mobile .footer" ).removeClass( "animated" );
		    $( ".nav-mobile .footer" ).removeClass( "bounceInDown" );
		    $( ".nav-mobile .footer" ).css( "display", "none");
		}
		else {
			$(".nav-mobile .hamburger").addClass("hamburger-open");
			$(".nav-mobile").addClass("nav-mobile-open");
			$( ".nav-mobile .nav-elements" ).addClass( "animated" );
		    $( ".nav-mobile .nav-elements" ).addClass( "bounceInDown" );
		    $( ".nav-mobile .footer" ).css( "display", "block");
		    $( ".nav-mobile .footer" ).addClass( "animated" );
		    $( ".nav-mobile .footer" ).addClass( "bounceInDown" );

		}
	});

	// Клик вне меню

	$(document).mouseup(function (e) {
		if ($(".nav-desktop").has(e.target).length === 0){
			$(".nav-desktop .hamburger").removeClass("hamburger-open");
			$(".nav-desktop").removeClass("nav-desktop-open");
			$(".nav-desktop .nav-elements").removeClass("nav-elements-open");
		}
	});
});