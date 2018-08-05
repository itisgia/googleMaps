//calling a map

// people have  turned on / off js.
// if you do it this way, you won'thave an error whatsoever
google.maps.event.addDomListener(window, 'load', initmap);

function initmap() {

    var mapOptions = {
        center:{
            lat: 37.566535,
            lng: 126.977969
        },
        zoom: 15
    }

    var map = new google.maps.Map(document.getElementById('map'), mapOptions)
}
