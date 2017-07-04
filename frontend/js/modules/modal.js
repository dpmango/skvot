export let modal = {
  modal: '.js-modal',
  modalTrigger: '.js-modal-trigger',
  modalContent: '.modal__content',
  init() {
    let self = this;
    $(this.modalTrigger).on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      self.closeModals();
      let modal = $(this).data('modal');
      $('.js-modal[data-modal="' + modal + '"]' )
        .addClass('modal--visible')
        .find(self.modalContent)
        .scrollTop(0);
      $('body').css('overflow', 'hidden');
    });
    $(this.modal).on('click', () => { this.closeModals() })
    $(this.modal).children('.modal__content').on('click', (e) => { e.stopPropagation()  })
  },
  closeModals () {
    $(this.modal).removeClass('modal--visible');
    $('body').css('overflow', 'visible');
  }
}