export let count = {
  count: '.count',
  countNumber: '.count__control--number',
  countInput: '.count__input',
  countControlDown: '.count__control--down',
  countControlUp: '.count__control--up',
  init () {
    // Set labels as counter
    $(this.countNumber).each((index, item) => {
      $(item).text($(item).closest(this.count).find(this.countInput).val())
    });

    // Event handlers
    $(this.countControlUp).on('click', function(e) {
      e.stopPropagation();
      count.incrementCount(this);
    });
    $(this.countControlDown).on('click', function(e) {
      e.stopPropagation();
      count.decrementCount(this);
    });
  },
  incrementCount (control) {
    let $countInput = $(control).closest(count.count).find(count.countInput);
    let $countNumber = $(control).closest(count.count).find(count.countNumber);
    let currentValue = parseInt($countInput.val(), 10);
    let maxCount = parseInt($countInput.prop('max'), 10);

    if (maxCount !== currentValue) {
      $countInput.val(currentValue + 1)
      $countNumber.text(currentValue + 1)
    }
  },
  decrementCount (control) {
    let $countInput = $(control).closest(count.count).find(count.countInput);
    let $countNumber = $(control).closest(count.count).find(count.countNumber);
    let currentValue = parseInt($countInput.val(), 10);
    let minCount = parseInt($countInput.prop('min'), 10);

    if (minCount !== currentValue) {
      $countInput.val(currentValue - 1)
      $countNumber.text(currentValue - 1)
    }
  }
}