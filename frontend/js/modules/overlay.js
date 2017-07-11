import anime from 'animejs'

export let overlay = {
  selector: '.overlay',
  show () {
    $(this.selector).addClass('overlay--visible');
  },
  hide () {
    $(this.selector).removeClass('overlay--visible');
  }
}