import noUiSlider from './../../../static/libs/noUiSlider'

export let rangeSlider = {
  filterPriceRangeId: 'filter-price-range',
  filterPriceInputFirst: '#filter-price-input-1',
  filterPriceInputSecond: '#filter-price-input-2',
  init() {
    let rangePrice = document.getElementById(this.filterPriceRangeId)
    let minRange = $(rangePrice).data('min-range')
    let maxRange = $(rangePrice).data('max-range')
    console.log(minRange)
    noUiSlider.create(rangePrice, {
      start: [minRange, maxRange],
      connect: true,
      range: {
        'min': minRange,
        'max': maxRange
      }
    });
    // Set started values
    $(this.filterPriceInputFirst).val(rangePrice.noUiSlider.options.range.min)
    $(this.filterPriceInputSecond).val(rangePrice.noUiSlider.options.range.max)

    rangePrice.noUiSlider.on('update', ( values, handle ) => {
      $(this.filterPriceInputFirst).val(Math.round(values[0]))
      $(this.filterPriceInputSecond).val(Math.round(values[1]))
    });
    $(this.filterPriceInputFirst).on('change', function(){
      rangePrice.noUiSlider.set([this.value, null]);
    });
    $(this.filterPriceInputSecond).on('change', function(){
      rangePrice.noUiSlider.set([null, this.value]);
    });
  }
}

export let resetSlider = function() {
  let slider = document.getElementById(rangeSlider.filterPriceRangeId).noUiSlider;
  slider.reset();
}