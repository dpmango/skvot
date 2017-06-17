import anime from 'animejs'

export let checkbox = {
  filterCheckbox: '.filter-checkbox',
  showAll: '.filter-checkbox__all',
  checkbox: '.filter-checkbox__box',
  init () {
    let self = this;
    $(this.showAll).on('click', function(e) {
      e.preventDefault();
      self.openCheckboxes(self, this);
    });
  },
  openCheckboxes(vm, element) {
      let checkboxes = $(element).closest(vm.filterCheckbox).find(vm.checkbox + ':hidden').toArray();
      $(element).css('display', 'none')
      anime({
        targets: checkboxes,
        opacity: 1,
        scale: 1,
        delay: function(el, i, l) {
          $(checkboxes[i]).css('display', 'flex')
          return i * 50;
        }
      })
  }
}


export let closeCheckboxes = function() {
  let $checkboxes = $(checkbox.checkbox);
  let $showAllButtons = $(checkbox.showAll);

  $checkboxes.attr('style', '');
  $showAllButtons.css('display', 'block');
}