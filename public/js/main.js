'use strict';

var header = {
  header: '.header',
  catalog: '.catalog',
  headerTop: '.header__top',
  catalogSectionNav: '.catalog__category-section',
  catalogSection: '.catalog__section',
  init: function init() {
    var _this = this;

    var scrolled = false;
    var headerTopHeight = $(this.headerTop).outerHeight();
    // Margin next content
    // this.setMarginToNextSubling();
    // $(window).resize(debounce(() => {
    //   this.setMarginToNextSubling()
    // }, 100));
    // Catalog scroll
    $(this.catalog).css('max-height', 'calc(100vh - ' + $(this.header).height() + 'px)');

    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();

      if (scrollTop < 99 && scrolled === true) {
        $(_this.header).css('transform', 'translate3d(0,0,0)');
        scrolled = false;
      }

      if (scrollTop > 99 && scrolled === false) {
        $(_this.header).css('transform', 'translate3d(0,' + -headerTopHeight + 'px,0)');
        scrolled = true;
      }
    });

    // Header hover
    $(this.catalogSectionNav).hover(function () {
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
      // if ( $(this).data('section-id') ){
      //   $('.catalog__section[data-for-section='+ $(this).data('section-id') +']').removeClass('visible');
      // }
    });
  },
  setMarginToNextSubling: function setMarginToNextSubling() {
    $(this.header).next().css('margin-top', $(this.header).height() + 'px');
  }
};

$(document).ready(function () {
  $(window).on('load', function () {
    header.init();
  });
});