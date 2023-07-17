const searchBtn = document.getElementById("map-search");
searchBtn.addEventListener('click', getCoor);

function getCoor() {
  var userInput = document.getElementById('user-input').value;
  var address = userInput.split(' ');
  console.log(address);
  var urlArray = "";
  for (i=0; i < address.length; i++) {
    urlArray +=(address[i]+"%20");
    urlArray.toString();
  }
  console.log(urlArray);

fetch(`https://api.tomtom.com/search/2/search/${urlArray}.json?key=dZ5BlNRNhnRnPRnSsYHD3rLpSg7UFuY9`)
.then (function (response) {
  return response.json();
})
.then (function (data) {
  // console.log(data);
  let lat = data.results[0].position.lat;
  let lon = data.results[0].position.lon;
  getLocalRestaurant(lat, lon);
  console.log(lat, lon);
  initMap(lat,lon);
})
}

function getLocalRestaurant(lat, lon) {
  fetch(`https://api.tomtom.com/search/2/nearbySearch/.json?lat=${lat}&lon=${lon}&limit=20&radius=5000&categorySet=7315&view=Unified&key=dZ5BlNRNhnRnPRnSsYHD3rLpSg7UFuY9`)
  .then (function (response) {
    return response.json();
  })
  .then (function (data) {
    console.log(data);
  })
}

// google api
// initMap();
let map;
let service;
let infowindow;

function initMap(lat,lon) {
  const sydney = new google.maps.LatLng(lat, lon);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: sydney,
    zoom: 15,
  });

  const request = {
    // parameters looking for restaurants
    location: sydney,
    radius: '500',
    query: 'restaurant',
    // type: ['restaurant'],
    // fields: ['name', 'geometry'],
  };

  service = new google.maps.places.PlacesService(map);
  // nearbySearch - include location radius type (multiple results)
  // findPlaceFromQuery - include query, fields (1 result only)
  // textSearch - include location, radius, query (multiple results)
  service.textSearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
        console.log(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}
window.initMap = initMap;