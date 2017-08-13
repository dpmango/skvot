$(document).ready(function() {

  // GLOBAL VARIABLES & CONFIG
  const _window = $(window);

  const media = {
    tablet: '(max-width : 768px)'
  }

  const mediaBreakpoints = {
    tablet: 768,
    desktop: 968
  }
  const page = $('body').data('page')
  const animationConf = {
    durations: {
      duration1: 250,
      duration2: 500,
      duration3: 750,
      duration4: 1000
    },
    delays: {
      delay1: 250,
      delay2: 500,
      delay3: 750,
      delay4: 1000
    },
    easings: {
      ease1: 'easeInQuad',
      ease2: 'easeOutQuad',
      ease3: 'easeInOutExpo'
    }
  }


  // HEADER.js
  _window.on('load', function(){

    let scrolled = false;
    let headerTopHeight = $('.header__top').outerHeight();

    // Catalog scroll
    $('.catalog').css('max-height', 'calc(100vh - ' + $('.header').height() + 'px)');

    $(window).scroll(function() {
      let scrollTop = $(window).scrollTop();

      if (scrollTop < 99 && scrolled === true) {
        $('.header').css('transform', 'translate3d(0,0,0)')
        scrolled = false
      }

      if (scrollTop > 99 && scrolled === false) {
        $('.header').css('transform', 'translate3d(0,' + -headerTopHeight + 'px,0)')
        scrolled = true
      }
    });

    // Header hover
    $('.catalog__category-section').hover(
      function() {
        // mouseover
        if ( $(this).data('section-id') ){
          $('.catalog__section').removeClass('visible');
          $('.catalog__section[data-for-section='+ $(this).data('section-id') +']').addClass('visible');

          // set active class
          $('.catalog__category-section').removeClass('active');
          $(this).addClass('active');
        }
      }, function() {
        // mouseleave
      }
    );
  });

  // Catalog.js
  $('.js-catalog').on('click', (e) => {
    e.stopPropagation();
  });
  $('.js-catalog-btn').on('click', (e) => {
    e.stopPropagation();
    toggleCatalog()
  });
  $(document).on('click', () => closeCatalog());

  function toggleCatalog () {
    $('.js-catalog').fadeToggle();
    $('.js-catalog-btn').toggleClass('header__item--active');
    $('.js-catalog-btn-hamburger').toggleClass('catalog-btn__hamburger--active');
  }
  function closeCatalog () {
    $('.js-catalog').fadeOut();
    $('.js-catalog-btn').removeClass('header__item--active');
    $('.js-catalog-btn-hamburger').removeClass('catalog-btn__hamburger--active');
  }

  // SLIDERS.js
  let mainSlickSlides = $('.js-main-slider').slick({
    asNavFor: '.js-main-slider-content',
    arrows: false,
    autoplay: true,
    draggable: false,
    autoplaySpeed: 5000
  });
  let mainSlickContents = $('.js-main-slider-content').slick({
    dots: true,
    draggable: true,
    fade: true,
    arrows: false,
    asNavFor: '.js-main-slider',
    responsive: [
      {
        breakpoint: mediaBreakpoints.tablet,
        settings: {
          dots: false
        }
      },
      {
        breakpoint: mediaBreakpoints.desktop,
        settings: {
          dots: true
        }
      }
    ]
  });

  $('.js-slick-prev').on('click', () => mainSlickSlides.slick('slickPrev'))
  $('.js-slick-next').on('click', () => mainSlickSlides.slick('slickNext'))


  // ------------------------------
  // Reviews
  // ------------------------------
  let slickk = $('.js-review').slick({
    arrows: false,
    autoplay: true,
    draggable: false,
    autoplaySpeed: 5000
  });

  // lkPopup.js
  $('.js-lk').on('click', (e) => e.stopPropagation());
  $('.js-lk-trigger').on('click', (e) => {
    e.stopPropagation();
    toggleLk();
  });
  $(document).on('click', () => {
    closeLk();
  });

  function toggleLk () {
    $('.js-lk-trigger').toggleClass('auth__nav--active');
    $('.js-lk').toggleClass('lk--opened');
  }
  function closeLk () {
    $('.js-lk-trigger').removeClass('auth__nav--active');
    $('.js-lk').removeClass('lk--opened');
  }

  // cart Popup
  mediaCheck({
    media: media.tablet,
    entry: () => {

      $('.js-cart-popup').on('click', (e) => e.stopPropagation());
      $('.js-cart-trigger').on('click', (e) => {
        e.stopPropagation();
        togglecartPopup();
      });
      $(document).on('click', () => {
        closecartPopup();
      });
      $('.js-cart-trigger').off('mouseenter');
      $('.js-cart-trigger').off('mouseleave');
    },
    exit: () => {
      $('.js-cart-trigger').on('mouseenter', () => {
        opencartPopup();
      })
      $('.js-cart-trigger').on('mouseleave', () => {
        closecartPopup();
      })
      $('.js-cart-trigger').off('click');
    }
  });

  function opencartPopup () {
    $('.js-cart-popup').addClass('cart-popup--opened');
  }
  function togglecartPopup () {
    $('.js-cart-popup').toggleClass('cart-popup--opened');
  }
  function closecartPopup () {
    $('.js-cart-popup').removeClass('cart-popup--opened');
  }


  // TABS.js
  if (page === 'home') {
    var isoTab1 = new Isotope( '#tab-1', {
      itemSelector: '.top-item',
      layoutMode: 'masonry'
    });
    var isoTab2 = new Isotope( '#tab-2', {
      itemSelector: '.top-item',
      layoutMode: 'masonry'
    });
    var isoTab3 = new Isotope( '#tab-3', {
      itemSelector: '.top-item',
      layoutMode: 'masonry'
    });
  }
  $('.tabs__tab').click(function(){
    var tab_id = $(this).attr('data-tab');
    var active_id = $('.tabs__content--active').prop('id');
    if (tab_id === active_id) {
      return false;
    }

    $('.tabs-contents__content').removeClass('tabs-contents__content--active');
    $('.tabs__tab').removeClass('tabs__tab--active');

    $(this).addClass('tabs__tab--active');
    $("#"+tab_id).addClass('tabs-contents__content--active');
    isoTab1.shuffle()
    isoTab2.shuffle()
    isoTab3.shuffle()
  })

  // UP.js
  $(window).scroll(() => {
    let scrollTop = $(window).scrollTop();
    scrollTop > 1000
      ? $('.js-up').addClass('up--visible')
      : $('.js-up').removeClass('up--visible')
  });
  $('.js-up').click(() => {
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
  });

  // Reviews.js
  $('.review__images').each((index, item) => {
    $(item).slick({
      asNavFor: $('.review__slides').get(index),
      arrows: false,
      draggable: true
    });
    $($('.review__slides').get(index)).slick({
      asNavFor: item,
      arrows: false,
      fade: true
    })
  })

  $('.review-prev').on('click', function() {
    $(this).closest('.review').find('.review__images').slick('slickPrev')
  });
  $('.review-next').on('click', function() {
    $(this).closest('.review').find('.review__images').slick('slickNext')
  });

  // Modal.js
  $('.js-modal-trigger').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    closeModals();
    let modal = $(this).data('modal');
    $('.js-modal[data-modal="' + modal + '"]' )
      .addClass('modal--visible')
      .find('.modal__content')
      .scrollTop(0);
    $('body').css('overflow', 'hidden');
  });
  $('.js-modal').on('click', () => { closeModals() })
  $('.js-modal').children('.modal__content').on('click', (e) => { e.stopPropagation()  })

  function closeModals () {
    $('.js-modal').removeClass('modal--visible');
    $('body').css('overflow', 'visible');
  }

  // textCollapse.js
  $('.js-collapse-trigger').on('click', function() {
    toggleCollapse(this)
  });

  function toggleCollapse (trigger) {
    let $trigger = $(trigger)
    let $parent = $trigger.closest('.text-collapse');

    let parentPaddingTop = parseFloat($parent.css('padding-top'));
    let triggerHeight = $trigger.outerHeight();
    let textHeight = $parent.find('.text-collapse__content').outerHeight();

    $parent.toggleClass('text-collapse--opened');
    $parent.hasClass('text-collapse--opened')
      ? anime({
        targets: $parent.get(0),
        height: textHeight + parentPaddingTop + triggerHeight,
        duration: animationConf.durations.duration1,
        easing: animationConf.easings.ease3
      })
      : anime({
        targets: $parent.get(0),
        height: 150,
        duration: animationConf.durations.duration1,
        easing: animationConf.easings.ease3
      })
  }

  // Item.js
  $('.top-item__image').magnificPopup({
    type: 'image',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        this.st.mainClass = 'mfp-zoom-out'
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  })

  // search.js
  let overlay = {
    show () {
      $('.overlay').addClass('overlay--visible');
    },
    hide () {
      $('.overlay').removeClass('overlay--visible');
    }
  }

  var animating = false

  $('.js-search').css('transform', 'translateX(100%)');
  $('.js-search-btn').on('click', function(e) {
    e.preventDefault();
    toggleSearch(this)
  });
  $('.overlay').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleSearch('.header__item--search')
  });

  function closeSearch(btn) {
    anime({
      targets: '.js-search',
      translateX: '100%',
      duration: animationConf.durations.duration3,
      easing: animationConf.easings.ease3,
      opacity: 0,
      begin: () => {
        overlay.hide();
        anime({
          targets: $(btn).find('use').get(0),
          duration: animationConf.durations.duration2,
          easing: 'linear',
          opacity: 0,
          complete() {
            $(btn).find('use').attr('xlink:href', 'img/svg-sprites/sprite.svg#icon-search');
            anime({
              targets: $(btn).find('use').get(0),
              duration: animationConf.durations.duration2,
              easing: 'linear',
              opacity: 1
            })

          }
        })
      },
      complete: () => {
        $(btn).addClass('js-search-btn');
        $('.js-search').find('input').val('');
        $('.js-search').removeClass('opened');
        animating = false
      }
    })
  }
  function openSearch(btn) {
    anime({
      targets: this.search,
      translateX: '0%',
      duration: animationConf.durations.duration3,
      easing: animationConf.easings.ease3,
      opacity: 1,
      begin: () => {
        $(this.search).addClass('opened')
        anime({
          targets: $(btn).find('use').get(0),
          duration: animationConf.durations.duration2,
          easing: 'linear',
          opacity: 0,
          complete() {
            $(btn).find('use').attr('xlink:href', 'img/svg-sprites/sprite.svg#icon-close');
            anime({
              targets: $(btn).find('use').get(0),
              duration: animationConf.durations.duration2,
              easing: 'linear',
              opacity: 1
            })
          }
        })
      },
      complete: () => {
        $(btn).removeClass('js-search-btn');
        $('.js-search').find('input').focus();
        animating = false
        overlay.show();
      }
    })
  }
  function toggleSearch(btn) {
    if (animating === true) {
      return false
    }
    animating = true
    $(btn).hasClass('js-search-btn')
      ? openSearch(btn)
      : closeSearch(btn)
  }


  ////////////////
  // FILTER
  ///////////////

  // rangeslider.js
  let rangePrice = document.getElementById('filter-price-range')
  let minRange = $(rangePrice).data('min-range')
  let maxRange = $(rangePrice).data('max-range')

  noUiSlider.create(rangePrice, {
    start: [minRange, maxRange],
    connect: true,
    range: {
      'min': minRange,
      'max': maxRange
    }
  });
  // Set started values
  $(this.filterPriceInputFirst).val(rangePrice.noUiSlider.options.range.min)
  $(this.filterPriceInputSecond).val(rangePrice.noUiSlider.options.range.max)

  rangePrice.noUiSlider.on('update', ( values, handle ) => {
    $('#filter-price-input-1').val(Math.round(values[0]))
    $('#filter-price-input-2').val(Math.round(values[1]))
  });
  $('#filter-price-input-1').on('change', function(){
    rangePrice.noUiSlider.set([this.value, null]);
  });
  $('#filter-price-input-2').on('change', function(){
    rangePrice.noUiSlider.set([null, this.value]);
  });


  let resetSlider = function() {
    let slider = document.getElementById('filter-price-range').noUiSlider;
    slider.reset();
  }

  // asideSection.js

  $('.filter-aside__close').on('click', debounce(function() {
    closeAsideSection(this);
  }, animationConf.delays.delay1 + animationConf.durations.duration1, {'leading': true, 'trailing': false}));

  function closeAsideSection (closeElement) {
    let section = $(closeElement).closest('.filter-aside__section')
    let sectionContent = section.find('.filter-aside__content')
    let sectionContentClean = sectionContent.get(0);
    let sectionClose = section.find('.filter-aside__close').get(0);
    let sectionClean = section.get(0);
    let sectionHeight = section.outerHeight();
    let sectionContentHeight = sectionContent.outerHeight();
    let heightMinusContent = sectionHeight - sectionContentHeight - 15;
    let heightPlusContent = sectionHeight + sectionContentHeight + 15;

    if (sectionContent.is(':visible')) {
      anime({
        targets: sectionClose,
        rotate: '180deg',
        delay: animationConf.delays.delay1,
        duration: animationConf.durations.duration1,
        easing: animationConf.easings.ease3
      })
      anime({
        targets: sectionContentClean,
        opacity: 0,
        easing: animationConf.easings.ease3,
        duration: animationConf.durations.duration1,
        complete () {
          sectionContent.css('display', 'none');
        }
      })
      anime({
        targets: sectionClean,
        height: heightMinusContent,
        delay: animationConf.delays.delay1,
        easing: animationConf.easings.ease3,
        duration: animationConf.durations.duration1
      })
    } else {
      anime({
        targets: sectionClose,
        rotate: '0deg',
        duration: animationConf.durations.duration1,
        easing: animationConf.easings.ease3
      })
      anime({
        targets: sectionClean,
        height: heightPlusContent,
        easing: animationConf.easings.ease3,
        duration: animationConf.durations.duration1
      })
      anime({
        targets: sectionContentClean,
        opacity: 1,
        delay: animationConf.delays.delay1,
        easing: animationConf.easings.ease3,
        duration: animationConf.durations.duration1,
        begin () {
          sectionContent.css('display', 'flex');
        },
        complete () {
          section.css('height', 'auto');
        }
      })
    }
  }


  let openAsideSections = function() {
    let $section = $('.filter-aside__section');
    let $sectionContent = $('.filter-aside__content');
    let $sectionClose = $('.filter-aside__close');
    $section.css('display', 'block');
    $section.attr('style', '');
    $sectionContent.attr('style', '');
    $sectionClose.attr('style', '');
  }

});
