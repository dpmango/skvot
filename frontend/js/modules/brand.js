import anime from 'animejs'
import { media } from '../config'
import { animationConf } from '../config'
export let brand = {
  brandTab: '.brand-tabs__tab',
  tabActiveClass: 'tabs__tab--active',
  brandCategory: '.brand__category',
  init () {
    let self = this;
    $(this.brandTab).on('click', function() {
      self.showCategory(self, this);
    });
    mediaCheck({
      media: media.tablet,
      entry: () => {
        $(this.brandTab).removeClass(this.tabActiveClass)
        $(this.brandTab + ':first-child').addClass(this.tabActiveClass)
      },
      exit: () => {
        $(this.brandCategory).attr('style', '')
      }
    })
  },
  showCategory (vm, target) {
    let dataCategory = $(target).data('category');
    let category = $(vm.brandCategory + '[data-category="' + dataCategory + '"]');
    let brandClean = category.get(0);
    if (category.is(':visible')) {
      return false
    }
    // Hide all
    $(vm.brandCategory).css('display', 'none')
    $(vm.brandTab).removeClass(vm.tabActiveClass)

    // Add active class
    $(target).addClass(vm.tabActiveClass)
    // Animate section
    category.css({
      'display': 'block',
      'opacity': '0'
    })
    anime({
      targets: brandClean,
      opacity: 1,
      duration: animationConf.durations.duration3,
      easing: animationConf.easings.ease2
    })
  }
}