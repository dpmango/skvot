import anime from 'animejs'
import { media } from '../config'
import { animationConf } from '../config'
export let team = {
  teamTab: '.team-tabs__tab',
  tabActiveClass: 'tabs__tab--active',
  teamCategory: '.team__category',
  init () {
    let self = this;
    $(this.teamTab).on('click', function() {
      self.showCategory(self, this);
    });
    mediaCheck({
      media: media.tablet,
      entry: () => {
        $(this.teamTab).removeClass(this.tabActiveClass)
        $(this.teamTab + ':first-child').addClass(this.tabActiveClass)
      },
      exit: () => {
        $(this.teamCategory).attr('style', '')
      }
    })
  },
  showCategory (vm, target) {
    let dataCategory = $(target).data('category');
    let category = $(vm.teamCategory + '[data-category="' + dataCategory + '"]');
    let teamClean = category.get(0);
    if (category.is(':visible')) {
      return false
    }
    // Hide all
    $(vm.teamCategory).css('display', 'none')
    $(vm.teamTab).removeClass(vm.tabActiveClass)

    // Add active class
    $(target).addClass(vm.tabActiveClass)
    // Animate section
    category.css({
      'display': 'block',
      'opacity': '0'
    })
    anime({
      targets: teamClean,
      opacity: 1,
      duration: animationConf.durations.duration3,
      easing: animationConf.easings.ease2
    })
  }
}