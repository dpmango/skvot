import tooltip from 'tooltip'

export let tooltipp = {

  init () {
    tooltip({
      showDelay: 100,
      offset: { x: 0, y: 10 },
      style: {
        padding: 5,
        zIndex: 99
      }
    });
  }
}