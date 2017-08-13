import { media } from '../config'

export let cartPopup = {
  cartPopup: '.js-cart-popup',
  cartPopupTrigger: '.js-cart-trigger',
  cartPopupOpenedClass: 'cart-popup--opened',

  init () {
    let self = this;

    mediaCheck({
      media: media.tablet,
      entry: () => {

        $(this.cartPopup).on('click', (e) => e.stopPropagation());
        $(this.cartPopupTrigger).on('click', (e) => {
          e.stopPropagation();
          this.togglecartPopup();
        });
        $(document).on('click', () => {
          this.closecartPopup();
        });
        $(this.cartPopupTrigger).off('mouseenter');
        $(this.cartPopupTrigger).off('mouseleave');
      },
      exit: () => {
        $(this.cartPopupTrigger).on('mouseenter', () => {
          this.opencartPopup();
        })
        $(this.cartPopupTrigger).on('mouseleave', () => {
          this.closecartPopup();
        })
        $(this.cartPopupTrigger).off('click');
      }
    });


  },
  opencartPopup () {
    $(this.cartPopup).addClass(this.cartPopupOpenedClass);
  },
  togglecartPopup () {
    $(this.cartPopup).toggleClass(this.cartPopupOpenedClass);
  },
  closecartPopup () {
    $(this.cartPopup).removeClass(this.cartPopupOpenedClass);
  }
}