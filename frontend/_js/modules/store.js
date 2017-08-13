import slick from 'slick-carousel';
import { mediaBreakpoints } from '../config'

export let store = {
  slider: '.js-slider',
  sliderPreview: '.js-slider-preview',
  sliderArrowPrev: '.js-slick-prev',
  sliderArrowNext: '.js-slick-next',
  init () {
    var slick = $(this.slider).slick({
      slidesToShow: 1,
      arrows: false,
      // draggable: false,
      asNavFor: this.sliderPreview,
      focusOnSelect: true
    });
    $(this.sliderPreview).slick({
      slidesToShow: 6,
      infinite: true,
      asNavFor: this.slider,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
      ]
    });

    $(this.sliderArrowPrev).on('click', () => slick.slick('slickPrev'))
    $(this.sliderArrowNext).on('click', () => slick.slick('slickNext'))
  }
}
