import GMaps from 'gmaps'

export let dgmap = {
  map: '#gmap',
  overlay: '.gmap-overlay',

  listItem: '.delivery-point__list-item',
  listItemActiveClass: 'delivery-point__list-item--active',
  aboutItem: '.delivery-point__about',
  aboutContent: '.delivery-point__abouts',
  aboutClose: '.delivery-point__about-close',

  content: '.delivery-point__content',
  contentActive: 'delivery-point__content--active',
  blocksTrigger: '.delivery-point__content-btn',
  blocksTriggerActive: 'delivery-point__content-btn--active',
  blocks: '.delivery-point__blocks',
  blocksActive: 'delivery-point__blocks--active',
  init () {
    var self = this;
    var image = $(self.map).data('image');
    var lat = parseFloat($(self.map).data('lat'));
    var lng = parseFloat($(self.map).data('lng'));
    var map = new GMaps({
      disableDefaultUI: true,
      el: self.map,
      lat: lat,
      lng: lng,
      zoom: 18,
      styles: [
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": 33
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2e5d4"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#c5dac6"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#c5c6c6"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e4d7c6"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#fbfaf7"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#acbcc9"
                }
            ]
        }
    ]
    });
    map.addMarker({
      position: {
        lat: lat,
        lng: lng
      },
      icon: image
    })

    $(this.listItem).on('click', function() {
        self.onSelectItem(self, this)
    });
    $(this.blocksTrigger).on('click', function() {
        self.onOpenBlocks(self, this);
    });
    $(this.aboutClose).on('click', function() {
        self.cleanSelected(self);
    });
  },
  onOpenBlocks(vm, trigger) {
    $(trigger).toggleClass(vm.blocksTriggerActive);
    $(vm.blocks).toggleClass(vm.blocksActive);
    $(vm.content).toggleClass(vm.contentActive)
  },
  onSelectItem (vm, item) {
    if($(item).hasClass(vm.listItemActiveClass)) {
        return false
    }

    var currentAbout = $(vm.aboutItem + ':visible');

    var listId = $(item).data('id');

    vm.cleanSelected(vm);
    $(item).addClass(vm.listItemActiveClass);

    // Open another
    let $about = $(vm.aboutItem + '[data-id="' + listId + '"]');
    $about.css({
        opacity: 1,
        transform: 'translateX(100%)'
    })

  },
  cleanSelected (vm) {
      $(vm.aboutItem).attr('style', '');
      $(vm.listItem).removeClass(vm.listItemActiveClass);
  }
}