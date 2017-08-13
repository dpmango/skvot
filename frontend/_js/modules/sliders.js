import slick from 'slick-carousel';
import { mediaBreakpoints } from '../config'
export let sliders = {
  mainSlider: '.js-main-slider',
  mainSliderContent: '.js-main-slider-content',
  mainSliderArrowPrev: '.js-slick-prev',
  mainSliderArrowNext: '.js-slick-next',


  reviewSlider: '.js-review',
  init () {
    let mainSlickSlides = $(this.mainSlider).slick({
      asNavFor: this.mainSliderContent,
      arrows: false,
      autoplay: true,
      draggable: false,
      autoplaySpeed: 5000
    });
    let mainSlickContents = $(this.mainSliderContent).slick({
      dots: true,
      draggable: true,
      fade: true,
      arrows: false,
      asNavFor: this.mainSlider,
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

    $(this.mainSliderArrowPrev).on('click', () => mainSlickSlides.slick('slickPrev'))
    $(this.mainSliderArrowNext).on('click', () => mainSlickSlides.slick('slickNext'))


    // ------------------------------
    // Reviews
    // ------------------------------
    let slickk = $(this.reviewSlider).slick({
      arrows: false,
      autoplay: true,
      draggable: false,
      autoplaySpeed: 5000
    });
  }
}