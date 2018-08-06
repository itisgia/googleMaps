//calling a map

// people have  turned on / off js.
// if you do it this way, you won'thave an error whatsoever
google.maps.event.addDomListener(window, 'load', initmap);
var map; // making in global to use in other functions

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
    // my ver
    // var botanicGarden = {
    //         lat:  -41.282308,
    //         lng: 174.767451
    // }
    // var map = new google.maps.Map(document.getElementById('map'), mapOptions, {zoom: 4, center: botanicGarden})
    // var marker = new google.maps.Marker({position: botanicGarden, map: map});

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    addAllMarkrers();

    // marker referance.
    // var myLatlng = new google.maps.LatLng(-41.286460,174.776236);
    // var marker = new google.maps.Marker({
    // position: myLatlng,
    // title:"Hello World!"
    // });
    //
    // // To add the marker to the map, call setMap();
    // marker.setMap(map);
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
              $("#places").append("<div class='place'><h3>"+markers[i].place_name+"</h3></div><hr>");

              var marker = new google.maps.Marker({
                  position : {
                      lat: markers[i].lat,
                      lng: markers[i].lng
                  },
                  title: markers[i].place_name,
                  map: map, // init map
                  animation: google.maps.Animation.BOUNCE,
                  icon: new google.maps.MarkerImage('data/kiwi-bird.svg',
                    null, null, null, new google.maps.Size(164,164)),
                  draggable: false,
              });
            }
        },
        error: function (error) {
            console.log("ERROR, SOMETHING WENT WRONG");
            console.log(error);
        }
    });
}
