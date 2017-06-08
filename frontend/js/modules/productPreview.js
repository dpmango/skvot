export let productPreview = {
  productSlider: '.product-preview__slider',
  productItemsSlider: '.product-preview__items-slider',
  productSliderSlide: '.product-preview__slider-slide',
  init () {
    $(this.productSlider).slick({
      slidesToShow: 1,
      arrows: false,
      fade: true,
      draggable: false,
      asNavFor: this.productItemsSlider
    });
    $(this.productItemsSlider).slick({
      slidesToShow: 6,
      asNavFor: this.productSlider,
      dots: false,
      arrows: false,
      focusOnSelect: true
    });

    $(this.productSliderSlide).magnificPopup({
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
  }
}