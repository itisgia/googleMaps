//calling a map

// people have  turned on / off js.
// if you do it this way, you won'thave an error whatsoever
google.maps.event.addDomListener(window, 'load', initmap);

function initmap() {

    var mapOptions = {
        center:{
            lat: 37.515021,
            lng: 127.088739
        },
        zoom: 4,
        disableDefaultUI: false,
        fullscreenControl: true,
        fullscreenControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        styles : [
            {
                featureType: "water",
                stylers : [
                    {
                        color : "#606b61"
                    }
                ]
            },
            {
                featureType: "landscape",
                stylers : [
                    {
                        color: "#c4c4c4"
                    }
                ]

            },
            {
                  featureType: "road.highway",
                  stylers : [
                      {
                          color: "#d6bcbc"
                      }
                  ]
            },
            {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers : [
                      {
                          color: "#575957"
                      }
                  ]
            },
            {
                  featureType: 'poi',
                  elementType: 'labels.text.fill',
                  stylers : [
                      {
                          color: "#879dc4"
                      }
                  ]
            }
        ]
    }

    var map = new google.maps.Map(document.getElementById('map'), mapOptions)
}
