export let color = {
  colors: '.color',
  colorBox: '.color__box',
  colorLightClass: 'color--light',
  colorInput: '.color__input',
  colorLabel: '.color__label',
  init() {
    let self = this;

    $(this.colors).each((index, item) => {
      let isLight = Boolean($(item).data('light'));
      let color = $(item).data('color');

      isLight
        ? $(item).addClass(this.colorLightClass)
        : ''
      $(item).find(this.colorBox).css('background-color', '#' + color);
    });

    $(this.colorLabel).on('click', function() {
      let $input = $(this).closest(self.colors).find(self.colorInput);
      let color = $(this).closest(self.colors).data('color-name');
      if ($input.is(':checked')) {
        $input.val(0);
        $input.removeAttr('name');
      } else {
        $input.val(color);
        $input.attr('name', 'color');
      }
    });
  }
}