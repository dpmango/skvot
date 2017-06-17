export let catalog = {
  // ------------------------------
  // Selectors
  // ------------------------------
  catalogBtnOpenedClass: '',
  catalog: '.js-catalog',
  catalogBtn: '.js-catalog-btn',
  catalogBtnHamburger: '.js-catalog-btn-hamburger',

  // ------------------------------
  // Classes
  // ------------------------------
  catalogBtnActiveClass: 'header__item--active',
  catalogBtnHamburgerActiveClass: 'catalog-btn__hamburger--active',
  // ------------------------------
  // Functions
  // ------------------------------
  init () {
    $(this.catalog).on('click', (e) => {
      e.stopPropagation();
    });
    $(this.catalogBtn).on('click', (e) => {
      e.stopPropagation();
      this.toggleCatalog()
    });
    $(document).on('click', () => this.closeCatalog());
  },
  toggleCatalog () {
    $(this.catalog).fadeToggle();
    $(this.catalogBtn).toggleClass(this.catalogBtnActiveClass);
    $(this.catalogBtnHamburger).toggleClass(this.catalogBtnHamburgerActiveClass);
  },
  closeCatalog () {
    $(this.catalog).fadeOut();
    $(this.catalogBtn).removeClass(this.catalogBtnActiveClass);
    $(this.catalogBtnHamburger).removeClass(this.catalogBtnHamburgerActiveClass);
  }
}