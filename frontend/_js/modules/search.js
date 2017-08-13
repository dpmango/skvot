import anime from 'animejs'
import {overlay} from './overlay'
import {animationConf} from '../config'
export let search = {
  searchBtn: '.js-search-btn',
  searchBtnClass: 'js-search-btn',
  search: '.js-search',
  animating: false,
  init () {
    $(this.search).css('transform', 'translateX(100%)');
    let self = this
    $(this.searchBtn).on('click', function(e) {
      e.preventDefault();
      self.toggleSearch(this)
    });
    $(overlay.selector).on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      self.toggleSearch('.header__item--search')
    });
  },
  closeSearch(btn) {
    anime({
      targets: this.search,
      translateX: '100%',
      duration: animationConf.durations.duration3,
      easing: animationConf.easings.ease3,
      opacity: 0,
      begin: () => {
        overlay.hide();
        anime({
          targets: $(btn).find('use').get(0),
          duration: animationConf.durations.duration2,
          easing: 'linear',
          opacity: 0,
          complete() {
            $(btn).find('use').attr('xlink:href', 'img/svg-sprites/sprite.svg#icon-search');
            anime({
              targets: $(btn).find('use').get(0),
              duration: animationConf.durations.duration2,
              easing: 'linear',
              opacity: 1
            })
            
          }
        })
      },
      complete: () => {
        $(btn).addClass(this.searchBtnClass);
        $(this.search).find('input').val('');
        $(this.search).removeClass('opened');
        this.animating = false
      }
    })
  },
  openSearch(btn) {
    anime({
      targets: this.search,
      translateX: '0%',
      duration: animationConf.durations.duration3,
      easing: animationConf.easings.ease3,
      opacity: 1,
      begin: () => {
        $(this.search).addClass('opened')
        anime({
          targets: $(btn).find('use').get(0),
          duration: animationConf.durations.duration2,
          easing: 'linear',
          opacity: 0,
          complete() {
            $(btn).find('use').attr('xlink:href', 'img/svg-sprites/sprite.svg#icon-close');
            anime({
              targets: $(btn).find('use').get(0),
              duration: animationConf.durations.duration2,
              easing: 'linear',
              opacity: 1
            })
          }
        })
      },
      complete: () => {
        $(btn).removeClass(this.searchBtnClass);
        $(this.search).find('input').focus();
        this.animating = false
        overlay.show();
      }
    })
  },
  toggleSearch(btn) {
    if (this.animating === true) {
      return false
    }
    this.animating = true
    $(btn).hasClass(this.searchBtnClass)
      ? this.openSearch(btn)
      : this.closeSearch(btn)
  }
}