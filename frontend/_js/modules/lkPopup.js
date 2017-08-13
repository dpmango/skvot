export let lkPopup = {
  lk: '.js-lk',
  lkTrigger: '.js-lk-trigger',
  lkOpenedClass: 'lk--opened',
  lkTriggerActiveClass: 'auth__nav--active',

  init () {
    $(this.lk).on('click', (e) => e.stopPropagation());
    $(this.lkTrigger).on('click', (e) => {
      e.stopPropagation();
      this.toggleLk();
    });
    $(document).on('click', () => {
      this.closeLk();
    });
  },

  toggleLk () {
    $(this.lkTrigger).toggleClass(this.lkTriggerActiveClass);
    $(this.lk).toggleClass(this.lkOpenedClass);
  },
  closeLk () {
    $(this.lkTrigger).removeClass(this.lkTriggerActiveClass);
    $(this.lk).removeClass(this.lkOpenedClass);
  }
}