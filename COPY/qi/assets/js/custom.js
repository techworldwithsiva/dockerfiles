/* ----- Custom Scripts for Pilot template ----- */

jQuery(function($) {
  "use strict";

  // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
    var mainbottom = $('#main').offset().top;
    // on scroll,
    $(window).on('scroll', function(){
    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.navbar').addClass('past-main');
        $('.navbar').addClass('effect-main')
    } else {
        $('.navbar').removeClass('past-main');
      }
    });

  // Collapse navbar on click

  $(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
    $(this).removeClass('in').addClass('collapse');
   }
  });

/*----- Preloader ----- */

  $(window).load(function() {
		setTimeout(function() {
      $('#loading').fadeOut('slow', function() {
      });
    }, 300);
  });

/* --------- Wow Init -------*/

  new WOW().init();

/* ------- Magnific Popup ---------*/

  $('.popup').magnificPopup({
    disableOn: 0,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

/*-------- Owl Carousel ---------- */

  $(".reviews").owlCarousel({

    slideSpeed : 200,
    items: 1,
    singleItem: true,
    autoPlay : true,
    pagination : false
  });

/* ------ Clients Section Owl Carousel ----- */

  $(".clients").owlCarousel({
    slideSpeed : 200,
    items: 5,
    singleItem: false,
    autoPlay : true,
    pagination : false
  });


  /* ----- Counter Up ----- */

  $('.counter').counterUp({
  		delay: 10,
  		time: 1000
  });

/*----------- Scroll To Top ---------------*/

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 1000) {
        $('#back-top').fadeIn();
    } else {
        $('#back-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-top').on('click', function () {
    $('#back-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
  });

/* ------ Countdown ----- */

 //  $('#countdown').countdown({
	// 	date: '12/07/2017 12:00:00',
	// 	offset: +2,
	// 	day: 'Day',
	// 	days: 'Days'
	//  }, function () {
	// 	alert('Done!');
	// });

/* ------ jQuery for Easing min -- */

  $(function() {
  $('a.page-scroll').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });

/*----- Subscription Form ----- */

$(document).ready(function() {
  // jQuery Validation
  $("#signup").validate({
    // if valid, post data via AJAX
    submitHandler: function(form) {
      $.post("assets/php/subscribe.php", { email: $("#email").val() }, function(data) {
        $('#response').html(data);
      });
    },
    // all fields are required
    rules: {
      email: {
        required: true,
        email: true
      }
    }
  });
});
});
