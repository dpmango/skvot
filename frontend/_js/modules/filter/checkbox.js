import anime from 'animejs'

export let checkbox = {
  filterCheckbox: '.filter-checkbox',
  showAll: '.filter-checkbox__all',
  checkbox: '.filter-checkbox__box',
  checkboxInput: '.filter-checkbox__box input',
  init () {
    let self = this;
    $(this.showAll).on('click', function(e) {
      e.preventDefault();
      self.openCheckboxes(self, this);
    });
    $(this.checkboxInput).on('change', function(e){
      self.showGoodsNumber(self, this);
    })
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
  },
  showGoodsNumber(vm, element) {
    $('.filter-aside__number').remove();
    if ( $(element).is(':checked') ){
      let numberElement = "<div class='filter-aside__number'>Показать 67 товаров</div>";
      $(element).parent().append(numberElement);
      setTimeout(function(){
        $(element).parent().find('.filter-aside__number').addClass('visible');
      },100);
    }
  }
}


export let closeCheckboxes = function() {
  let $checkboxes = $(checkbox.checkbox);
  let $showAllButtons = $(checkbox.showAll);

  $checkboxes.attr('style', '');
  $showAllButtons.css('display', 'block');
}
