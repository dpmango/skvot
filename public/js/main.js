'use strict';

$(document).ready(function () {

  // GLOBAL VARIABLES
  var _window = $(window);

  // HEADER.js
  var scrolled = false;
  var headerTopHeight = $('.header__top').outerHeight();

  // Catalog scroll
  $('.catalog').css('max-height', 'calc(100vh - ' + $('.header').height() + 'px)');

  $(window).scroll(function () {
    console.log('ss');
    var scrollTop = $(window).scrollTop();

    if (scrollTop < 99 && scrolled === true) {
      $('.header').css('transform', 'translate3d(0,0,0)');
      scrolled = false;
    }

    if (scrollTop > 99 && scrolled === false) {
      $('.header').css('transform', 'translate3d(0,' + -headerTopHeight + 'px,0)');
      scrolled = true;
    }
  });

  // Header hover
  $('.catalog__category-section').hover(function () {
    // mouseover
    if ($(this).data('section-id')) {
      $('.catalog__section').removeClass('visible');
      $('.catalog__section[data-for-section=' + $(this).data('section-id') + ']').addClass('visible');

      // set active class
      $('.catalog__category-section').removeClass('active');
      $(this).addClass('active');
    }
  }, function () {
    // mouseleave
  });
});