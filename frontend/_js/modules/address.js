import GMaps from 'gmaps'

export let address = {
  map: '#address-map',
  overlay: '.address__map-overlay',
  init () {
    var self = this;
    var image = $(self.map).data('image');
    var lat = $(self.map).data('lat');
    var lng = $(self.map).data('lng');
    var map = new GMaps({
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

    $(this.overlay).on('click', (e) => {
        e.stopPropagation();
        this.hideOverlay(this.overlay)
    });

    $(document).on('click', () => { this.showOverlay(this.overlay) });
  },
  hideOverlay (overlay) {
    $(overlay).hide();
  },
  showOverlay (overlay) {
    $(overlay).show();
  }
}
