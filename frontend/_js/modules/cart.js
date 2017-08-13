export let cart = {
  itemCartWrap: '.cart-item-wrap',
  itemCart: '.cart-item',
  itemMobileCart: '.cart-item--mobile',
  itemAvailableButton: '.cart-item__button',
  modalCart: '.js-cart-modal',
  itemCartName: '.js-cart-item-name',
  itemCartNameMobile: '.js-cart-item-name-mobile',
  itemCartAddresses: '.js-cart-item-addresses',

  cartOrder: '.js-cart-order',
  cartOrderingRadio: '.cart-ordering__radio',
  init () {
    let self = this;
    // Copy html
    $(this.itemCartWrap).each((index, item) => {
      this.copyNames(item)
    })

    $(this.itemCartAddressesMobile).on('click', function(e) {
      e.stopPropagation();
    });
    $(document).on('click', () => {
      this.closeModals();
    });
    $(this.itemAvailableButton).on('click', function(e) {
      let parent = $(this).closest(self.itemCartWrap).get(0);
      self.showModal(self, parent)
    });


    // Cart order
    $(this.cartOrderingRadio).on('change', function() {
      $(self.cartOrderingRadio).not(this).hide("slow");
      self.disableEnableForm(self);
    });
  },
  disableEnableForm (vm) {
    $(vm.cartOrderingRadio).each((index, item) => {
      let thisValue = $(item).prop('checked')
      let $nextAll = $(item).closest(vm.cartOrder).find(`input:not(${vm.cartOrderingRadio})`);

      thisValue
        ? $nextAll.prop('disabled', false).val('')
        : $nextAll.prop('disabled', true).val('')
    });

  },
  closeModals () {
    $(this.itemCartAddressesMobile).fadeOut('fast');
  },
  copyNames (item) {
    let nameHtml = $(item).find(this.itemCartName).text();
    let $nameMobile = $(item).find(this.itemCartNameMobile);
    $nameMobile.text(nameHtml);
  },
  showModal (vm, item) {
    let adressesHtml = '<ul class="cart-item__addresses">' + $(item).find(vm.itemCartAddresses).html() + '</ul>';
    let $modalCart = $(vm.modalCart);
    $modalCart.empty();
    $modalCart.html(adressesHtml);

  }
}