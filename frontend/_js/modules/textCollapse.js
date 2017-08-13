import anime from 'animejs'
import { animationConf } from '../config'

export let textCollapse = {
  collapse: '.text-collapse',
  collapseText: '.text-collapse__content',
  collapseTrigger: '.js-collapse-trigger',
  collapseOpenedClass: 'text-collapse--opened',
  defaultCollapseHeightPx: 150,

  init () {
    let self = this;
    $(this.collapseTrigger).on('click', function() {
      self.toggleCollapse(self, this)
    });
  },

  toggleCollapse (vm, trigger) {
    let $trigger = $(trigger)
    let $parent = $trigger.closest(vm.collapse);

    let parentPaddingTop = parseFloat($parent.css('padding-top'));
    let triggerHeight = $trigger.outerHeight();
    let textHeight = $parent.find(vm.collapseText).outerHeight();

    $parent.toggleClass(vm.collapseOpenedClass);
    $parent.hasClass(vm.collapseOpenedClass)
      ? anime({
        targets: $parent.get(0),
        height: textHeight + parentPaddingTop + triggerHeight,
        duration: animationConf.durations.duration1,
        easing: animationConf.easings.ease3
      })
      : anime({
        targets: $parent.get(0),
        height: vm.defaultCollapseHeightPx,
        duration: animationConf.durations.duration1,
        easing: animationConf.easings.ease3
      })
  }
}