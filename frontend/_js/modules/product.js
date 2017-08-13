import { media } from '../config'

export let product = {
  firstDescriptionPlace: '.product__description',
  secondDescriptionPlace: '.product__description-second',
  descriptionContainer: '',
  init () {
    // Contain our description
    this.descriptionContainer = $(this.firstDescriptionPlace).html();

    mediaCheck({
      media: media.tablet,
      entry: () => {
        $(this.firstDescriptionPlace).empty();
        $(this.secondDescriptionPlace).html(this.descriptionContainer);
      },
      exit: () => {
        $(this.secondDescriptionPlace).empty();
        $(this.firstDescriptionPlace).html(this.descriptionContainer);
      },
      both: function() {
        // changing state
      }
    })
  },
  moveToSecond () {

  },
  moveToFirst () {

  }
}
