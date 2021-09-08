(function ($, Drupal) {
  'use strict';
    Drupal.behaviors.awesome = {
      attach: function(context, settings) {

  $(window).on('load', function () {
    new WOW().init();
    // collapse-menu
    // $(document).click(function(e) {
    //   if (!$(e.target).is('.panel-body')) {
    //     $('.collapse').collapse('hide');      
    //   }
    // });
    $(function() {
      $(document).click(function (event) {
        $('.navbar-collapse').collapse('hide');
      });
    });

    window.onload = function what(){
      $('.client-counter').counterUp({
        delay: 10,
        time: 2000
      });
    };

    // slider
    $(document).ready(function() {
      var owl = $('.slider');
      //init default carousel
      owl.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0:{
              items:1,
              nav: false,
              dots: true
          },
          600:{
              items:1,
              nav: true
          },
          1000:{
              items:1,
              nav: true
          }    
        }
      });
    });

    // client
    $('.client').owlCarousel({
      loop: true,
      navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
      margin: 10,
      nav: false,
      dots: false,
      autoplay: true,
      transitionStyle: 'fade',
      autoplayTimeout: 1000,
      smartSpeed: 2500,
      fluidSpeed: true,
      responsive: {
        0:{
            items:1
        },
        400:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:5
        }    
      }
    });

    // testimonial
    $('.testimonial-carousel').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      autoplay: false,
      centerMode: true,
      autoplayTimeout: 300,
      smartSpeed: 1000,
      fluidSpeed: true,
      responsive: {
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1
        }    
      }
    });

    // portfolio
        jQuery(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
          $("#menu").addClass("sticky");
      } else {
          $("#menu").removeClass("sticky");
      }
    });

  // product
  $(document).ready(function() {
      var $container = $('.portfolioContainer');
      $container.isotope({
          filter: '*',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      }); 
      $('.portfolioFilter a').click(function(){
          $('.portfolioFilter .current').removeClass('current');
          $(this).addClass('current');
   
          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
           });
           return false;
      }); 
  });
  $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
  $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
  $('.project-popup').magnificPopup({
         type: 'image',
         removalDelay: 300,
         mainClass: 'mfp-fade',
         gallery: {
             enabled: true
         },
         zoom: {
             enabled: false,
             duration: 300,
             easing: 'ease-in-out',
             opener: function(openerElement) {
                 return openerElement.is('img') ? openerElement : openerElement.find('img');
             }
         }
     });

    // sticky
    jQuery(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
        $("#menu").addClass("sticky");
      } else {
        $("#menu").removeClass("sticky");
      }
    });

    //Scroll to Top
    function headerStyle() {
      if($('body').length){
        var windowpos = $(window).scrollTop();
        var scrollLink = $('.scroll-top');
        if (windowpos >= 250) {
          scrollLink.addClass('open');
        } else {
          scrollLink.removeClass('open');
        }
      }
    }
    headerStyle();
    // Scroll to Target
    if($('.scroll-to-target').length){
      $(".scroll-to-target").on('click', function() {
      var target = $(this).attr('data-target');
       // animate
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 2000);
      });
    }
    $(window).on('scroll', function() {
      headerStyle();
    });

    // videos
    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

    // FAQ
    $(".panel-default").click(function(e) {
      $('.collapse').collapse('hide');
      $(this).addClass("bgcolor").siblings().removeClass("bgcolor");
    });

    // coming-soon
      function getTimeRemaining(endtime) {
        var t = Date.parse("Jan 5, 2021 15:37:25") - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }
    


    });

   }
  };
})(jQuery, Drupal);