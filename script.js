function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.2230168, lng: 39.7197747},
    zoom: 18,
  });
  var marker = new google.maps.Marker({
    position: {lat: 47.2230168, lng: 39.7197747},
    map: map,
  });
}
