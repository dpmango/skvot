'use strict';

$(document).ready(function () {

  // GLOBAL VARIABLES & CONFIG
  var _window = $(window);

  var media = {
    tablet: '(max-width : 768px)'
  };

  var mediaBreakpoints = {
    tablet: 768,
    desktop: 968
  };
  var page = $('body').data('page');
  var animationConf = {
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

    // prevent Default
  };$('a[href="#"]').on('click', function (e) {
    e.preventDefault();
  });

  // HEADER.js
  _window.on('load', function () {

    var scrolled = false;
    var headerTopHeight = $('.header__top').outerHeight();

    // Catalog scroll
    $('.catalog').css('max-height', 'calc(100vh - ' + $('.header').height() + 'px)');

    _window.scroll(function () {
      var scrollTop = _window.scrollTop();

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

  // Catalog.js
  $('.js-catalog').on('click', function (e) {
    e.stopPropagation();
  });
  $('.js-catalog-btn').on('click', function (e) {
    e.stopPropagation();
    toggleCatalog();
  });
  $(document).on('click', function () {
    return closeCatalog();
  });

  function toggleCatalog() {
    $('.js-catalog').fadeToggle();
    $('.js-catalog-btn').toggleClass('header__item--active');
    $('.js-catalog-btn-hamburger').toggleClass('catalog-btn__hamburger--active');
  }
  function closeCatalog() {
    $('.js-catalog').fadeOut();
    $('.js-catalog-btn').removeClass('header__item--active');
    $('.js-catalog-btn-hamburger').removeClass('catalog-btn__hamburger--active');
  }

  // SLIDERS.js
  var mainSlickSlides = $('.js-main-slider').slick({
    asNavFor: '.js-main-slider-content',
    arrows: false,
    autoplay: true,
    draggable: false,
    autoplaySpeed: 5000
  });
  var mainSlickContents = $('.js-main-slider-content').slick({
    dots: true,
    draggable: true,
    fade: true,
    arrows: false,
    asNavFor: '.js-main-slider',
    responsive: [{
      breakpoint: mediaBreakpoints.tablet,
      settings: {
        dots: false
      }
    }, {
      breakpoint: mediaBreakpoints.desktop,
      settings: {
        dots: true
      }
    }]
  });

  $('.js-slick-prev').on('click', function () {
    return mainSlickSlides.slick('slickPrev');
  });
  $('.js-slick-next').on('click', function () {
    return mainSlickSlides.slick('slickNext');
  });

  // ------------------------------
  // Reviews
  // ------------------------------
  var slickk = $('.js-review').slick({
    arrows: false,
    autoplay: true,
    draggable: false,
    autoplaySpeed: 5000
  });

  // lkPopup.js
  $('.js-lk').on('click', function (e) {
    return e.stopPropagation();
  });
  $('.js-lk-trigger').on('click', function (e) {
    e.stopPropagation();
    toggleLk();
  });
  $(document).on('click', function () {
    closeLk();
  });

  function toggleLk() {
    $('.js-lk-trigger').toggleClass('auth__nav--active');
    $('.js-lk').toggleClass('lk--opened');
  }
  function closeLk() {
    $('.js-lk-trigger').removeClass('auth__nav--active');
    $('.js-lk').removeClass('lk--opened');
  }

  // cart Popup
  mediaCheck({
    media: media.tablet,
    entry: function entry() {

      $('.js-cart-popup').on('click', function (e) {
        return e.stopPropagation();
      });
      $('.js-cart-trigger').on('click', function (e) {
        e.stopPropagation();
        togglecartPopup();
      });
      $(document).on('click', function () {
        closecartPopup();
      });
      $('.js-cart-trigger').off('mouseenter');
      $('.js-cart-trigger').off('mouseleave');
    },
    exit: function exit() {
      $('.js-cart-trigger').on('mouseenter', function () {
        opencartPopup();
      });
      $('.js-cart-trigger').on('mouseleave', function () {
        closecartPopup();
      });
      $('.js-cart-trigger').off('click');
    }
  });

  function opencartPopup() {
    $('.js-cart-popup').addClass('cart-popup--opened');
  }
  function togglecartPopup() {
    $('.js-cart-popup').toggleClass('cart-popup--opened');
  }
  function closecartPopup() {
    $('.js-cart-popup').removeClass('cart-popup--opened');
  }

  // TABS.js
  if (page === 'home') {
    var isoTab1 = new Isotope('#tab-1', {
      itemSelector: '.top-item',
      layoutMode: 'masonry'
    });
    var isoTab2 = new Isotope('#tab-2', {
      itemSelector: '.top-item',
      layoutMode: 'masonry'
    });
    var isoTab3 = new Isotope('#tab-3', {
      itemSelector: '.top-item',
      layoutMode: 'masonry'
    });
  }
  $('.tabs__tab').click(function () {
    var tab_id = $(this).attr('data-tab');
    var active_id = $('.tabs__content--active').prop('id');
    if (tab_id === active_id) {
      return false;
    }

    $('.tabs-contents__content').removeClass('tabs-contents__content--active');
    $('.tabs__tab').removeClass('tabs__tab--active');

    $(this).addClass('tabs__tab--active');
    $("#" + tab_id).addClass('tabs-contents__content--active');
    isoTab1.shuffle();
    isoTab2.shuffle();
    isoTab3.shuffle();
  });

  // UP.js
  _window.scroll(function () {
    var scrollTop = _window.scrollTop();
    scrollTop > 1000 ? $('.js-up').addClass('up--visible') : $('.js-up').removeClass('up--visible');
  });
  $('.js-up').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  // Reviews.js
  $('.review__images').each(function (index, item) {
    $(item).slick({
      asNavFor: $('.review__slides').get(index),
      arrows: false,
      draggable: true
    });
    $($('.review__slides').get(index)).slick({
      asNavFor: item,
      arrows: false,
      fade: true
    });
  });

  $('.review-prev').on('click', function () {
    $(this).closest('.review').find('.review__images').slick('slickPrev');
  });
  $('.review-next').on('click', function () {
    $(this).closest('.review').find('.review__images').slick('slickNext');
  });

  // Modal.js
  $('.js-modal-trigger').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    closeModals();
    var modal = $(this).data('modal');
    $('.js-modal[data-modal="' + modal + '"]').addClass('modal--visible').find('.modal__content').scrollTop(0);
    $('body').css('overflow', 'hidden');
  });
  $('.js-modal').on('click', function () {
    closeModals();
  });
  $('.js-modal').children('.modal__content').on('click', function (e) {
    e.stopPropagation();
  });

  function closeModals() {
    $('.js-modal').removeClass('modal--visible');
    $('body').css('overflow', 'visible');
  }

  // textCollapse.js
  $('.js-collapse-trigger').on('click', function () {
    toggleCollapse(this);
  });

  function toggleCollapse(trigger) {
    var $trigger = $(trigger);
    var $parent = $trigger.closest('.text-collapse');

    var parentPaddingTop = parseFloat($parent.css('padding-top'));
    var triggerHeight = $trigger.outerHeight();
    var textHeight = $parent.find('.text-collapse__content').outerHeight();

    $parent.toggleClass('text-collapse--opened');
    $parent.hasClass('text-collapse--opened') ? anime({
      targets: $parent.get(0),
      height: textHeight + parentPaddingTop + triggerHeight,
      duration: animationConf.durations.duration1,
      easing: animationConf.easings.ease3
    }) : anime({
      targets: $parent.get(0),
      height: 150,
      duration: animationConf.durations.duration1,
      easing: animationConf.easings.ease3
    });
  }

  // Item.js
  $('.top-item__image').magnificPopup({
    type: 'image',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function beforeOpen() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        this.st.mainClass = 'mfp-zoom-out';
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  // search.js
  var overlay = {
    show: function show() {
      $('.overlay').addClass('overlay--visible');
    },
    hide: function hide() {
      $('.overlay').removeClass('overlay--visible');
    }
  };

  var animating = false;

  $('.js-search').css('transform', 'translateX(100%)');
  $('.js-search-btn').on('click', function (e) {
    e.preventDefault();
    toggleSearch(this);
  });
  $('.overlay').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    toggleSearch('.header__item--search');
  });

  function closeSearch(btn) {
    anime({
      targets: '.js-search',
      translateX: '100%',
      duration: animationConf.durations.duration3,
      easing: animationConf.easings.ease3,
      opacity: 0,
      begin: function begin() {
        overlay.hide();
        anime({
          targets: $(btn).find('use').get(0),
          duration: animationConf.durations.duration2,
          easing: 'linear',
          opacity: 0,
          complete: function complete() {
            $(btn).find('use').attr('xlink:href', 'img/svg-sprites/sprite.svg#icon-search');
            anime({
              targets: $(btn).find('use').get(0),
              duration: animationConf.durations.duration2,
              easing: 'linear',
              opacity: 1
            });
          }
        });
      },
      complete: function complete() {
        $(btn).addClass('js-search-btn');
        $('.js-search').find('input').val('');
        $('.js-search').removeClass('opened');
        animating = false;
      }
    });
  }
  function openSearch(btn) {
    var _this = this;

    anime({
      targets: this.search,
      translateX: '0%',
      duration: animationConf.durations.duration3,
      easing: animationConf.easings.ease3,
      opacity: 1,
      begin: function begin() {
        $(_this.search).addClass('opened');
        anime({
          targets: $(btn).find('use').get(0),
          duration: animationConf.durations.duration2,
          easing: 'linear',
          opacity: 0,
          complete: function complete() {
            $(btn).find('use').attr('xlink:href', 'img/svg-sprites/sprite.svg#icon-close');
            anime({
              targets: $(btn).find('use').get(0),
              duration: animationConf.durations.duration2,
              easing: 'linear',
              opacity: 1
            });
          }
        });
      },
      complete: function complete() {
        $(btn).removeClass('js-search-btn');
        $('.js-search').find('input').focus();
        animating = false;
        overlay.show();
      }
    });
  }
  function toggleSearch(btn) {
    if (animating === true) {
      return false;
    }
    animating = true;
    $(btn).hasClass('js-search-btn') ? openSearch(btn) : closeSearch(btn);
  }

  ////////////////
  // FILTER
  ///////////////

  // rangeslider.js
  if (page === 'catalog') {
    var rangePrice = document.getElementById('filter-price-range');
    var minRange = $(rangePrice).data('min-range');
    var maxRange = $(rangePrice).data('max-range');

    noUiSlider.create(rangePrice, {
      start: [minRange, maxRange],
      connect: true,
      range: {
        'min': minRange,
        'max': maxRange
      }
    });
    // Set started values
    $(this.filterPriceInputFirst).val(rangePrice.noUiSlider.options.range.min);
    $(this.filterPriceInputSecond).val(rangePrice.noUiSlider.options.range.max);

    rangePrice.noUiSlider.on('update', function (values, handle) {
      $('#filter-price-input-1').val(Math.round(values[0]));
      $('#filter-price-input-2').val(Math.round(values[1]));
    });
    $('#filter-price-input-1').on('change', function () {
      rangePrice.noUiSlider.set([this.value, null]);
    });
    $('#filter-price-input-2').on('change', function () {
      rangePrice.noUiSlider.set([null, this.value]);
    });

    var _resetSlider = function _resetSlider() {
      var slider = document.getElementById('filter-price-range').noUiSlider;
      slider.reset();
    };
  }

  // asideSection.js

  $('.filter-aside__close').on('click', _.debounce(function () {
    closeAsideSection(this);
  }, animationConf.delays.delay1 + animationConf.durations.duration1, { 'leading': true, 'trailing': false }));

  function closeAsideSection(closeElement) {
    var section = $(closeElement).closest('.filter-aside__section');
    var sectionContent = section.find('.filter-aside__content');
    var sectionContentClean = sectionContent.get(0);
    var sectionClose = section.find('.filter-aside__close').get(0);
    var sectionClean = section.get(0);
    var sectionHeight = section.outerHeight();
    var sectionContentHeight = sectionContent.outerHeight();
    var heightMinusContent = sectionHeight - sectionContentHeight - 15;
    var heightPlusContent = sectionHeight + sectionContentHeight + 15;

    if (sectionContent.is(':visible')) {
      anime({
        targets: sectionClose,
        rotate: '180deg',
        delay: animationConf.delays.delay1,
        duration: animationConf.durations.duration1,
        easing: animationConf.easings.ease3
      });
      anime({
        targets: sectionContentClean,
        opacity: 0,
        easing: animationConf.easings.ease3,
        duration: animationConf.durations.duration1,
        complete: function complete() {
          sectionContent.css('display', 'none');
        }
      });
      anime({
        targets: sectionClean,
        height: heightMinusContent,
        delay: animationConf.delays.delay1,
        easing: animationConf.easings.ease3,
        duration: animationConf.durations.duration1
      });
    } else {
      anime({
        targets: sectionClose,
        rotate: '0deg',
        duration: animationConf.durations.duration1,
        easing: animationConf.easings.ease3
      });
      anime({
        targets: sectionClean,
        height: heightPlusContent,
        easing: animationConf.easings.ease3,
        duration: animationConf.durations.duration1
      });
      anime({
        targets: sectionContentClean,
        opacity: 1,
        delay: animationConf.delays.delay1,
        easing: animationConf.easings.ease3,
        duration: animationConf.durations.duration1,
        begin: function begin() {
          sectionContent.css('display', 'flex');
        },
        complete: function complete() {
          section.css('height', 'auto');
        }
      });
    }
  }

  var openAsideSections = function openAsideSections() {
    var $section = $('.filter-aside__section');
    var $sectionContent = $('.filter-aside__content');
    var $sectionClose = $('.filter-aside__close');
    $section.css('display', 'block');
    $section.attr('style', '');
    $sectionContent.attr('style', '');
    $sectionClose.attr('style', '');
  };

  // checkbox.js
  $('.filter-checkbox__all').on('click', function (e) {
    e.preventDefault();
    openCheckboxes(this);
  });
  $('.filter-checkbox__box input').on('change', function (e) {
    showGoodsNumber(this);
  });

  function openCheckboxes(element) {
    var checkboxes = $(element).closest('.filter-checkbox').find('.filter-checkbox__box:hidden').toArray();
    $(element).css('display', 'none');
    anime({
      targets: checkboxes,
      opacity: 1,
      scale: 1,
      delay: function delay(el, i, l) {
        $(checkboxes[i]).css('display', 'flex');
        return i * 50;
      }
    });
  }
  function showGoodsNumber(element) {
    $('.filter-aside__number').remove();
    if ($(element).is(':checked')) {
      var numberElement = "<div class='filter-aside__number'>Показать 67 товаров</div>";
      $(element).parent().append(numberElement);
      setTimeout(function () {
        $(element).parent().find('.filter-aside__number').addClass('visible');
      }, 100);
    }
  }

  var closeCheckboxes = function closeCheckboxes() {
    var $checkboxes = $('.filter-checkbox__box');
    var $showAllButtons = $('.filter-checkbox__all');

    $checkboxes.attr('style', '');
    $showAllButtons.css('display', 'block');
  };

  // color.js
  $('.color').each(function (index, item) {
    var isLight = Boolean($(item).data('light'));
    var color = $(item).data('color');

    isLight ? $(item).addClass('color--light') : '';
    $(item).find('.color__box').css('background-color', '#' + color);
  });

  $('.color__label').on('click', function () {
    var $input = $(this).closest('.color').find('.color__input');
    var color = $(this).closest('.color').data('color-name');
    if ($input.is(':checked')) {
      $input.val(0);
      $input.removeAttr('name');
    } else {
      $input.val(color);
      $input.attr('name', 'color');
    }
  });

  // views.js
  $('.filter-bar__views-view').on('click', function () {
    // Stop when active
    if ($(this).hasClass('filter-bar__views-view--active')) {
      return false;
    }

    var typeView = $(this).data('view');
    $('.filter-bar__views-view').removeClass('filter-bar__views-view--active');
    $(this).addClass('filter-bar__views-view--active');

    if (typeView === 'list') {
      anime({
        targets: '.top-item--catalog',
        opacity: 0,
        easing: animationConf.easings.ease3,
        duration: animationConf.durations.duration1,
        complete: function complete() {
          $('.top-item--catalog').addClass('top-item--list');
          anime({
            targets: '.top-item--catalog',
            duration: animationConf.durations.duration2,
            easing: animationConf.easings.ease3,
            opacity: 1
          });
        }
      });
    } else {
      anime({
        targets: '.top-item--catalog',
        opacity: 0,
        easing: animationConf.easings.ease3,
        duration: animationConf.durations.duration1,
        complete: function complete() {
          $('.top-item--catalog').removeClass('top-item--list');
          anime({
            targets: '.top-item--catalog',
            duration: animationConf.durations.duration2,
            easing: animationConf.easings.ease3,
            opacity: 1
          });
        }
      });
    }
  });

  // reset
  var reset = function reset() {
    var reset = '#reset-filter';
    return $(reset).on('click', function () {
      setTimeout(function () {
        resetSlider();
        openAsideSections();
        closeCheckboxes();
      }, 100);
    });
  };

  // customSelect.js
  $('select').each(function () {
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;
    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
      'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function () {
        $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
    });

    $(document).click(function () {
      $styledSelect.removeClass('active');
      $list.hide();
    });
    // Set width
    function setSelectWidth() {
      $('.select').each(function (index, item) {
        var getLabelMargin = parseInt($(this).closest('.select-wrap').find('.select-wrap__label').css('margin-right'));
        var getLabelWidth = $(this).closest('.select-wrap').find('.select-wrap__label').outerWidth() + getLabelMargin + 1;
        $(this).css('width', 'calc(100% - ' + getLabelWidth + 'px)');
      });
    }
    setSelectWidth();
    // Update on resize
    _window.resize(_.debounce(function () {
      setSelectWidth();
    }, 1000));
  });

  // letterNavigation.js
  $('.letter-nav__item').on('click', function () {
    showCategory(this);
  });

  mediaCheck({
    media: media.tablet,
    entry: function entry() {
      $('.letter-nav__item').removeClass('letter-nav__item--active');
      $('.letter-nav__item' + ':first-child').addClass('letter-nav__item--active');
    },
    exit: function exit() {
      $('.letter-section').attr('style', '');
    }
  });

  function showCategory(target) {
    var dataSection = $(target).data('section');
    var section = $('.letter-section[data-section="' + dataSection + '"]');
    var sectionClean = section.get(0);
    if (section.is(':visible')) {
      return false;
    }
    // Hide all
    $('.letter-section').css('display', 'none');
    $('.letter-nav__item').removeClass('letter-nav__item--active');

    // Add active class
    $(target).addClass('letter-nav__item--active');
    // Animate section
    section.css({
      'display': 'block',
      'opacity': '0'
    });
    anime({
      targets: sectionClean,
      opacity: 1,
      duration: animationConf.durations.duration3,
      easing: animationConf.easings.ease2
    });
  }

  // brand.js
  $('.brand-tabs__tab').on('click', function () {
    showCategory(this);
  });
  mediaCheck({
    media: media.tablet,
    entry: function entry() {
      $('.brand-tabs__tab').removeClass('tabs__tab--active');
      $('.brand-tabs__tab:first-child').addClass('tabs__tab--active');
    },
    exit: function exit() {
      $('.brand__category').attr('style', '');
    }
  });

  function showCategory(vm, target) {
    var dataCategory = $(target).data('category');
    var category = $('.brand__category' + '[data-category="' + dataCategory + '"]');
    var brandClean = category.get(0);
    if (category.is(':visible')) {
      return false;
    }
    // Hide all
    $('.brand__category').css('display', 'none');
    $('.brand-tabs__tab').removeClass('tabs__tab--active');

    // Add active class
    $(target).addClass('tabs__tab--active');
    // Animate section
    category.css({
      'display': 'block',
      'opacity': '0'
    });
    anime({
      targets: brandClean,
      opacity: 1,
      duration: animationConf.durations.duration3,
      easing: animationConf.easings.ease2
    });
  }

  // productPreview.js

  $('.product-preview__slider').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: '.product-preview__items-slider'
  });
  $('.product-preview__items-slider').slick({
    slidesToShow: 6,
    asNavFor: '.product-preview__slider',
    dots: false,
    arrows: false,
    focusOnSelect: true
  });

  $('.product-preview__slider-slide').magnificPopup({
    type: 'image',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function beforeOpen() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        this.st.mainClass = 'mfp-zoom-out';
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  // product.js

  var descriptionContainer = '';

  // Contain our description
  descriptionContainer = $('.product__description').html();

  mediaCheck({
    media: media.tablet,
    entry: function entry() {
      $('.product__description-second').empty();
      $('.product__description').html(descriptionContainer);
    },
    exit: function exit() {
      $('.product__description').empty();
      $('.product__description-second').html(descriptionContainer);
    },
    both: function both() {}
  });

  // count.js
  // Set labels as counter
  $('.count__control--number').each(function (index, item) {
    $(item).text($(item).closest('.count').find('.count__input').val());
  });

  // Event handlers
  $('.count__control--up').on('click', function (e) {
    e.stopPropagation();
    incrementCount(this);
  });
  $('.count__control--down').on('click', function (e) {
    e.stopPropagation();
    decrementCount(this);
  });

  function incrementCount(control) {
    var $countInput = $(control).closest('.count').find('.count__input');
    var $countNumber = $(control).closest('.count').find('.count__control--number');
    var currentValue = parseInt($countInput.val(), 10);
    var maxCount = parseInt($countInput.prop('max'), 10);

    if (maxCount !== currentValue) {
      $countInput.val(currentValue + 1);
      $countNumber.text(currentValue + 1);
    }
  }
  function decrementCount(control) {
    var $countInput = $(control).closest('.count').find('.count__input');
    var $countNumber = $(control).closest('.count').find('.count__control--number');
    var currentValue = parseInt($countInput.val(), 10);
    var minCount = parseInt($countInput.prop('min'), 10);

    if (minCount !== currentValue) {
      $countInput.val(currentValue - 1);
      $countNumber.text(currentValue - 1);
    }
  }

  // cart.js

  // Copy html
  $('.cart-item-wrap').each(function (index, item) {
    copyNames(item);
  });

  $('.js-cart-item-addresses').on('click', function (e) {
    e.stopPropagation();
  });
  $(document).on('click', function () {
    closeModals();
  });
  $('.cart-item__button').on('click', function (e) {
    var parent = $(this).closest('.cart-item-wrap').get(0);
    showModal(parent);
  });

  // Cart order
  $('.cart-ordering__radio').on('change', function () {
    $('.cart-ordering__radio').not(this).hide("slow");
    disableEnableForm();
  });

  function disableEnableForm() {
    $('.cart-ordering__radio').each(function (index, item) {
      var thisValue = $(item).prop('checked');
      var $nextAll = $(item).closest('.js-cart-order').find('input:not(\'.cart-ordering__radio\')');

      thisValue ? $nextAll.prop('disabled', false).val('') : $nextAll.prop('disabled', true).val('');
    });
  }
  function closeModals() {
    $('.js-cart-item-addresses').fadeOut('fast');
  }
  function copyNames(item) {
    var nameHtml = $(item).find('.js-cart-item-name').text();
    var $nameMobile = $(item).find('.js-cart-item-name-mobile');
    $nameMobile.text(nameHtml);
  }
  function showModal(item) {
    var adressesHtml = '<ul class="cart-item__addresses">' + $(item).find('.js-cart-item-addresses').html() + '</ul>';
    var $modalCart = $('.js-cart-modal');
    $modalCart.empty();
    $modalCart.html(adressesHtml);
  }

  // store.js
  var slick = $('.js-slider').slick({
    slidesToShow: 1,
    arrows: false,
    // draggable: false,
    asNavFor: '.js-slider-preview',
    focusOnSelect: true
  });
  $('.js-slider-preview').slick({
    slidesToShow: 6,
    infinite: true,
    asNavFor: this.slider,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }]
  });

  $('.js-slick-prev').on('click', function () {
    return slick.slick('slickPrev');
  });
  $('.js-slick-next').on('click', function () {
    return slick.slick('slickNext');
  });

  // team.js
  $('.team-tabs__tab').on('click', function () {
    showCategory(this);
  });
  mediaCheck({
    media: media.tablet,
    entry: function entry() {
      $('.team-tabs__tab').removeClass('tabs__tab--active');
      $('.team-tabs__tab:first-child').addClass('tabs__tab--active');
    },
    exit: function exit() {
      $('.team__category').attr('style', '');
    }
  });

  function showCategory(target) {
    var dataCategory = $(target).data('category');
    var category = $('.team__category[data-category="' + dataCategory + '"]');
    var teamClean = category.get(0);
    if (category.is(':visible')) {
      return false;
    }
    // Hide all
    $('.team__category').css('display', 'none');
    $('.team-tabs__tab').removeClass('tabs__tab--active');

    // Add active class
    $(target).addClass('tabs__tab--active');
    // Animate section
    category.css({
      'display': 'block',
      'opacity': '0'
    });
    anime({
      targets: teamClean,
      opacity: 1,
      duration: animationConf.durations.duration3,
      easing: animationConf.easings.ease2
    });
  }

  // gmaps.simple
  var image = $('#gmap').data('image');
  var lat = parseFloat($('#gmap').data('lat'));
  var lng = parseFloat($('#gmap').data('lng'));
  var ui = $('#gmap').data('disabledui');
  var map = new GMaps({
    disableDefaultUI: ui,
    el: '#gmap',
    lat: lat,
    lng: lng,
    zoom: 18,
    styles: [{
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }, {
        "lightness": 33
      }]
    }, {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "color": "#f2e5d4"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#c5dac6"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels",
      "stylers": [{
        "visibility": "on"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{
        "lightness": 20
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#c5c6c6"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e4d7c6"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#fbfaf7"
      }]
    }, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#acbcc9"
      }]
    }]
  });
  map.addMarker({
    position: {
      lat: lat,
      lng: lng
    },
    icon: image
  });

  $('.gmap-overlay').on('click', function (e) {
    e.stopPropagation();
    hideOverlay('.gmap-overlay');
  });

  $(document).on('click', function () {
    showOverlay('.gmap-overlay');
  });

  function hideOverlay(overlay) {
    $(overlay).hide();
  }
  function showOverlay(overlay) {
    $(overlay).show();
  }

  // gmap.delivery.js
  if (page === "delivery-point") {
    var onOpenBlocks = function onOpenBlocks(trigger) {
      $(trigger).toggleClass('delivery-point__content-btn--active');
      $('.delivery-point__blocks').toggleClass('delivery-point__blocks--active');
      $('.delivery-point__content').toggleClass('delivery-point__content--active');
    };

    var onSelectItem = function onSelectItem(item) {
      if ($(item).hasClass('delivery-point__list-item--active')) {
        return false;
      }

      var currentAbout = $('.delivery-point__about' + ':visible');

      var listId = $(item).data('id');

      cleanSelected();
      $(item).addClass('delivery-point__list-item--active');

      // Open another
      var $about = $('.delivery-point__about' + '[data-id="' + listId + '"]');
      $about.css({
        opacity: 1,
        transform: 'translateX(100%)'
      });
    };

    var cleanSelected = function cleanSelected() {
      $('.delivery-point__about').attr('style', '');
      $('.delivery-point__list-item').removeClass('delivery-point__list-item--active');
    };

    var image = $('#gmap').data('image');
    var lat = parseFloat($('#gmap').data('lat'));
    var lng = parseFloat($('#gmap').data('lng'));
    var map = new GMaps({
      disableDefaultUI: true,
      el: '#gmap',
      lat: lat,
      lng: lng,
      zoom: 18,
      styles: [{
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [{
          "visibility": "on"
        }, {
          "lightness": 33
        }]
      }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
          "color": "#f2e5d4"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#c5dac6"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [{
          "visibility": "on"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
          "lightness": 20
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#c5c6c6"
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e4d7c6"
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#fbfaf7"
        }]
      }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#acbcc9"
        }]
      }]
    });
    map.addMarker({
      position: {
        lat: lat,
        lng: lng
      },
      icon: image
    });

    $('.delivery-point__list-item').on('click', function () {
      onSelectItem(this);
    });
    $('.delivery-point__content-btn').on('click', function () {
      onOpenBlocks(this);
    });
    $('.delivery-point__about-close').on('click', function () {
      cleanSelected();
    });
  }

  // svg
  svg4everybody();

  // tooltip
  new Tooltip({
    showDelay: 100,
    offset: { x: 0, y: 10 },
    style: {
      padding: 5,
      zIndex: 99
    }
  });
});