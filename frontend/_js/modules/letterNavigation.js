import anime from 'animejs'
import { media } from '../config'
import { animationConf } from '../config'
export let letterNav = {
  letterNavItem: '.letter-nav__item',
  letterNavItemActiveClass: 'letter-nav__item--active',
  section: '.letter-section',
  init () {
    let self = this;
    $(this.letterNavItem).on('click', function() {
      self.showCategory(self, this);
    });

    mediaCheck({
      media: media.tablet,
      entry: () => {
        $(this.letterNavItem).removeClass(this.letterNavItemActiveClass)
        $(this.letterNavItem + ':first-child').addClass(this.letterNavItemActiveClass)
      },
      exit: () => {
        $(this.section).attr('style', '')
      }
    })
  },
  showCategory (vm, target) {
    let dataSection = $(target).data('section');
    let section = $(vm.section + '[data-section="' + dataSection + '"]');
    let sectionClean = section.get(0);
    if (section.is(':visible')) {
      return false
    }
    // Hide all
    $(vm.section).css('display', 'none')
    $(vm.letterNavItem).removeClass(vm.letterNavItemActiveClass)

    // Add active class
    $(target).addClass(vm.letterNavItemActiveClass)
    // Animate section
    section.css({
      'display': 'block',
      'opacity': '0'
    })
    anime({
      targets: sectionClean,
      opacity: 1,
      duration: animationConf.durations.duration3,
      easing: animationConf.easings.ease2
    })
  }
}