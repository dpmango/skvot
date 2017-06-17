import anime from 'animejs'
import { media } from '../config'
import { animationConf } from '../config'
export let brands = {
  brandsNavItem: '.brands-nav__item',
  brandsNavItemActiveClass: 'brands-nav__item--active',
  brandsSection: '.brands-section',
  init () {
    let self = this;
    $(this.brandsNavItem).on('click', function() {
      self.showBrand(self, this);
    });

    mediaCheck({
      media: media.tablet,
      entry: () => {
        $(this.brandsNavItem).removeClass(this.brandsNavItemActiveClass)
        $(this.brandsNavItem + ':first-child').addClass(this.brandsNavItemActiveClass)
      },
      exit: () => {
        $(this.brandsSection).attr('style', '')
      }
    })
  },
  showBrand (vm, target) {
    let dataSection = $(target).data('section');
    let section = $(vm.brandsSection + '[data-section="' + dataSection + '"]');
    let sectionClean = section.get(0);
    if (section.is(':visible')) {
      return false
    }
    // Hide all
    $(vm.brandsSection).css('display', 'none')
    $(vm.brandsNavItem).removeClass(vm.brandsNavItemActiveClass)

    // Add active class
    $(target).addClass(vm.brandsNavItemActiveClass)
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