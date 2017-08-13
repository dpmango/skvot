import anime from 'animejs'
import { animationConf } from '../../config'

export let views = {
  filterView: '.filter-bar__views-view',
  filterViewActiveClass: 'filter-bar__views-view--active',
  catalogItems: '.top-item--catalog',
  catalogItemsListClass: 'top-item--list',
  init () {
    let self = this;
    $(this.filterView).on('click', function() {
      // Stop when active
      if ($(this).hasClass(self.filterViewActiveClass)) {
        return false
      }

      let typeView = $(this).data('view');
      $(self.filterView).removeClass(self.filterViewActiveClass);
      $(this).addClass(self.filterViewActiveClass);

      if (typeView === 'list') {
        anime({
          targets: self.catalogItems,
          opacity: 0,
          easing: animationConf.easings.ease3,
          duration: animationConf.durations.duration1,
          complete: () => {
            $(self.catalogItems).addClass(self.catalogItemsListClass);
            anime({
              targets: self.catalogItems,
              duration: animationConf.durations.duration2,
              easing: animationConf.easings.ease3,
              opacity: 1
            });
          }
        })
      } else {
        anime({
          targets: self.catalogItems,
          opacity: 0,
          easing: animationConf.easings.ease3,
          duration: animationConf.durations.duration1,
          complete: () => {
            $(self.catalogItems).removeClass(self.catalogItemsListClass);
            anime({
              targets: self.catalogItems,
              duration: animationConf.durations.duration2,
              easing: animationConf.easings.ease3,
              opacity: 1
            });
          }
        })
      }
    });
  }
}