import Isotope from 'isotope-layout/dist/isotope.pkgd.js'
import { page } from '../config'
export let tabs = {
  init() {
    if (page === 'home') {
      var isoTab1 = new Isotope( '#tab-1', {
        itemSelector: '.top-item',
        layoutMode: 'masonry'
      });
      var isoTab2 = new Isotope( '#tab-2', {
        itemSelector: '.top-item',
        layoutMode: 'masonry'
      });
      var isoTab3 = new Isotope( '#tab-3', {
        itemSelector: '.top-item',
        layoutMode: 'masonry'
      });
    }
    $('.tabs__tab').click(function(){
      var tab_id = $(this).attr('data-tab');
      var active_id = $('.tabs__content--active').prop('id');
      if (tab_id === active_id) {
        return false;
      }

      $('.tabs-contents__content').removeClass('tabs-contents__content--active');
      $('.tabs__tab').removeClass('tabs__tab--active');

      $(this).addClass('tabs__tab--active');
      $("#"+tab_id).addClass('tabs-contents__content--active');
      isoTab1.shuffle()
      isoTab2.shuffle()
      isoTab3.shuffle()
	  })
  }
}