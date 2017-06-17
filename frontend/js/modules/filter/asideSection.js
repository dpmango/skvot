import anime from 'animejs'
import { animationConf } from '../../config'
import { debounce } from 'lodash'
export let asideSection = {
  asideSection: '.filter-aside__section',
  asideContent: '.filter-aside__content',
  asideSectionClose: '.filter-aside__close',
  init() {
    let self = this;
    $(this.asideSectionClose).on('click', debounce(function() {
      self.closeAsideSection(self, this);
    }, animationConf.delays.delay1 + animationConf.durations.duration1, {'leading': true, 'trailing': false}));
  },

  closeAsideSection (vm, closeElement) {
    let section = $(closeElement).closest(vm.asideSection)
    let sectionContent = section.find(vm.asideContent)
    let sectionContentClean = sectionContent.get(0);
    let sectionClose = section.find(vm.asideSectionClose).get(0);
    let sectionClean = section.get(0);
    let sectionHeight = section.outerHeight();
    let sectionContentHeight = sectionContent.outerHeight();
    let heightMinusContent = sectionHeight - sectionContentHeight - 15;
    let heightPlusContent = sectionHeight + sectionContentHeight + 15;

    if (sectionContent.is(':visible')) {
      anime({
        targets: sectionClose,
        rotate: '180deg',
        delay: animationConf.delays.delay1,
        duration: animationConf.durations.duration1,
        easing: animationConf.easings.ease3
      })
      anime({
        targets: sectionContentClean,
        opacity: 0,
        easing: animationConf.easings.ease3,
        duration: animationConf.durations.duration1,
        complete () {
          sectionContent.css('display', 'none');
        }
      })
      anime({
        targets: sectionClean,
        height: heightMinusContent,
        delay: animationConf.delays.delay1,
        easing: animationConf.easings.ease3,
        duration: animationConf.durations.duration1
      })
    } else {
      anime({
        targets: sectionClose,
        rotate: '0deg',
        duration: animationConf.durations.duration1,
        easing: animationConf.easings.ease3
      })
      anime({
        targets: sectionClean,
        height: heightPlusContent,
        easing: animationConf.easings.ease3,
        duration: animationConf.durations.duration1
      })
      anime({
        targets: sectionContentClean,
        opacity: 1,
        delay: animationConf.delays.delay1,
        easing: animationConf.easings.ease3,
        duration: animationConf.durations.duration1,
        begin () {
          sectionContent.css('display', 'flex');
        },
        complete () {
          section.css('height', 'auto');
        }
      })
    }
  }
}


export let openAsideSections = function() {
  let $section = $(asideSection.asideSection);
  let $sectionContent = $(asideSection.asideContent);
  let $sectionClose = $(asideSection.asideSectionClose);
  $section.css('display', 'block');
  $section.attr('style', '');
  $sectionContent.attr('style', '');
  $sectionClose.attr('style', '');
}