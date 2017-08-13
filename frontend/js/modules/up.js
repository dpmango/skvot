export let up = {
  up: '.js-up',
  init () {
    $(window).scroll(() => {
      let scrollTop = $(window).scrollTop();
      scrollTop > 1000
        ? $(this.up).addClass('up--visible')
        : $(this.up).removeClass('up--visible')
    });
    $(this.up).click(() => {
      $('html, body').animate({
        scrollTop: 0
      }, 1000)
    });
  }
}
