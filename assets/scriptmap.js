// constant var for element
const searchBtn = document.getElementById("map-search");
// event click & run function
searchBtn.addEventListener('click', getCoordinates);

// retrieve coordinates by tomtom api data
function getCoordinates() {
  var userInput = document.getElementById('user-input').value;
  // define user input and concat to tomtom api string
  var address = userInput.split(' ');
  var urlArray = "";
  for (i=0; i < address.length; i++) {
    urlArray +=(address[i]+"%20");
    urlArray.toString();
  }
  // tomtom fuzzy search fetch call
  fetch(`https://api.tomtom.com/search/2/search/${urlArray}.json?key=dZ5BlNRNhnRnPRnSsYHD3rLpSg7UFuY9`)
  .then (function (response) {
    return response.json();
  })
  .then (function (data) {
    // define lat and lon as vars per data info -> use as parameters in initMap function
    let lat = data.results[0].position.lat;
    let lon = data.results[0].position.lon;
    initMap(lat,lon);
  })
}

// google places maps api call
let map;
let service;
let infowindow;

function initMap(lat,lon) {
  const sydney = new google.maps.LatLng(lat, lon);
  // use element map to define id
  map = new google.maps.Map(document.getElementById("map"), {
    center: sydney,
    zoom: 15,
  });

  // parameters for api
  const request = {
    location: sydney,
    radius: '500',
    query: 'restaurant',
  };

  service = new google.maps.places.PlacesService(map);
  // google maps api search by text search 
  service.textSearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  function contentString(name, address, icon) {
    // defines elements displayed on marker
    return`
  <div>
    <img src="${icon}"/>
    <h2>${name}</h2>
    <p>${address}</p>
  </div>
  `};

  // passes content to marker 
  infowindow = new google.maps.InfoWindow({
    content: contentString(place.name,place.formatted_address,place.icon)
  });
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
    title: place.name,
    address: place.formatted_address,
    icon: place.icon
  });

  // displays content when marker is clicked 
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(contentString(place.name,place.formatted_address,place.icon));
    infowindow.open(map);
  });
}
window.initMap = initMap;