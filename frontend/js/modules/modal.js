export let modal = {
  modal: '.js-modal',
  modalTrigger: '.js-modal-trigger',
  init() {
    let self = this;
    $(this.modalTrigger).on('click', function(e) {
      e.preventDefault();
      self.closeModals();
      let modal = $(this).data('modal');
      console.log(modal)
      $('[data-modal="' + modal + '"]' ).addClass('modal--visible');
    });
    $(this.modal).on('click', () => { this.closeModals() })
    $(this.modal).children('.modal__content').on('click', (e) => { e.stopPropagation() })
  },
  closeModals () {
    $(this.modal).removeClass('modal--visible');
  }
}