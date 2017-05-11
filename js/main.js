//顶部导航栏的切换//

$(window).scroll(function() {
    if ($(".navbar").offset().top > 150) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// 页面滑动//
//jQuery for page scrolling feature - requires jQuery Easing plugin
//设置页面点击缓动到指定位置的效果
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//==================== Fullscreen Background slider ========================//
// supersized
jQuery(function($){
	$.supersized({
	// Functionality
	slide_interval          :   5000,		// Length between transitions
	transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed		:	1000,		// Speed of transition
											   
	// Components							
	slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
	slides 					:  	[			// Slideshow Images
										{image : 'demo/bg/1.jpg'},
										{image : 'demo/bg/2.jpg'},
										{image : 'demo/bg/3.jpg'}
	]
	});
});

//==================== Intro Text Slider ========================//
$(document).ready(function(){
	  $('#intro-slider').flexslider({
	    animation: "fade",
	    controlNav: false,
	    DirectionNav: false,
	   slideshowSpeed: 4000,        
	    animationSpeed: 600  
	  });
});

//==================== Testimonials Slider ========================//
$(document).ready(function(){
	  $('#quote-slider').flexslider({
	    animation: "slide",
	    controlNav: "thumbnails",
	    DirectionNav: "true"
	  });
});

//==================== Project Slider ========================//
$(document).ready(function(){
	  $('#project-slider').flexslider({
	    animation: "slide",
	    controlNav: "false",
	    DirectionNav: "true"
	  });
});

//==================== Animated Facts ========================//
jQuery(document).ready(function($) {
  "use strict";
	$('.facts-content').appear(function() {
	$('#lines').animateNumber({ number: 75 }, 2000 );
	$('#lines1').animateNumber({ number: 25 }, 2000 );
	$('#lines2').animateNumber({ number: 100 }, 2000 );
	$('#lines3').animateNumber({ number: 150 }, 2000 );
	},{accX: 0, accY: -50});
});


//==================== Portfolio ========================//
$(function () {
	var filterList = {
		init: function () {
			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixitup({
				targetSelector: '.portfolio',
				filterSelector: '.filter',
				effects: ['fade'],
				easing: 'snap',
				// call the hover effect
				onMixEnd: filterList.hoverEffect()
			});				
		},
		hoverEffect: function () {
		}
	};
	// Run the show!
	filterList.init();
});	

//==================== Parallax ========================//
jQuery(document).ready(function ($) {

    $.stellar({
		horizontalOffset: 50
    });

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }

});
