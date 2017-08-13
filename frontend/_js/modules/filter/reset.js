import { openAsideSections } from './asideSection'
import { resetSlider } from './rangeSlider'
import { closeCheckboxes } from './checkbox'

export let reset = function() {
  let reset = '#reset-filter';
  return (
    $(reset).on('click', function() {
      setTimeout(function() {
        resetSlider()
        openAsideSections()
        closeCheckboxes()
      }, 100);
    })
  )
}