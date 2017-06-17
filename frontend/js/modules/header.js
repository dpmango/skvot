import { debounce } from 'lodash'

export let header = {
  header: '.header',
  catalog: '.catalog',
  headerTop: '.header__top',
  init () {
    let scrolled = false;
    let headerTopHeight = $(this.headerTop).height();
    // Margin next content
    this.setMarginToNextSubling();
    $(window).resize(debounce(() => {
      this.setMarginToNextSubling()
    }, 100));
    // Catalog scroll
    $(this.catalog).css('max-height', 'calc(100vh - ' + $(this.header).height() + 'px)')

    $(window).scroll(() => {
      let scrollTop = $(window).scrollTop();

      if (scrollTop < 99 && scrolled === true) {
        $(this.header).css('top', '0px')
        scrolled = false
      }

      if (scrollTop > 99 && scrolled === false) {
        $(this.header).css('top', '' + -headerTopHeight + 'px')
        scrolled = true
      }
    });
  },
  setMarginToNextSubling () {
    $(this.header).next().css('margin-top', $(this.header).height() + 'px')
  }
}