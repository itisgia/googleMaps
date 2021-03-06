//calling a map

// people have  turned on / off js.
// if you do it this way, you won'thave an error whatsoever
google.maps.event.addDomListener(window, 'load', initmap);
var map; // making in global to use in other functions
var latlng;
var infoBox;
var placeArray = []
function initmap() {

    var mapOptions = {
        center:{
            lat: -41.286460,
            lng: 174.776236
        },
        zoom: 12,
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

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    addAllMarkrers();
}

// gettubg markers data
function addAllMarkrers() {
    $.ajax({
        url: 'data/mark.json',
        type: 'GET',
        dataType: 'json',
        success: function (markers) {
            // console.log(markers);
            //adding palce name usong for loop
            for (var i = 0; i < markers.length; i++) {
                $("#places").append("<div class='place' onclick='findMe();'><h3>"+markers[i].place_name+"</h3></div><hr>");

              var marker = new google.maps.Marker({
                  position : {
                      lat: markers[i].lat,
                      lng: markers[i].lng
                  },
                  title: markers[i].place_name,
                  description: 'this is a description of the marker',
                  map: map, // init map
                  // animation: google.maps.Animation.BOUNCE,
                  icon: new google.maps.MarkerImage('data/kiwi-bird.svg',
                    null, null, null, new google.maps.Size(164,164))
              });
              markerClickEvent(marker);
              placeArray.push(markers);
            }
        },
        error: function (error) {
            console.log("ERROR, SOMETHING WENT WRONG");
            console.log(error);
        }
    });
}

// passig marker
function markerClickEvent(marker) {
    if(infoBox){
        infoBox.close(); // if infobox is open close
    }
  //initialzing info window
    infoBox = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'click', function () {
        infoBox.setContent('<div><strong>'+marker.title+'</strong></div>');
        infoBox.open(map, marker); //wnat to appear on the map and by marker
    })
}

// when movemap btn is clicked, find it's lat and lng and zoom
function moveMap() {
    var latlng = new google.maps.LatLng(-41.282308, 174.767451);
    map.panTo(latlng); // move to the valye of markers
    map.setZoom(17);
}

function findSpots() {
  
}
