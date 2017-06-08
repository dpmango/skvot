export let review = {
  init() {
    $('.review__images').each((index, item) => {
      $(item).slick({
        asNavFor: $('.review__slides').get(index),
        arrows: false,
        draggable: true
      });
      $($('.review__slides').get(index)).slick({
        asNavFor: item,
        arrows: false,
        fade: true
      })
    })

    $('.review-prev').on('click', function() {
      $(this).closest('.review').find('.review__images').slick('slickPrev')
    });
    $('.review-next').on('click', function() {
      $(this).closest('.review').find('.review__images').slick('slickNext')
    });
  }
}