// API keys (+backups)
var placesKey1="AIzaSyBDr_dT0gyfPk9TNst7heS7aD12S8A2nLk";
var tastyKey1= '66ffc7fa92msh170770be6ee18ffp15c6b3jsn88d8fc037362';
// var placesKey2="AIzaSyATmyZ1ZmaWihFMPJLJoLEGfbzjESWfWe8";
// var tastyKey2= '1ab6ffd471mshbf01716883afebfp1595bcjsnfab03526961a';

// Tasty API - recipes/list - JS (fetch) code snippet
var tastyApi = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
var tastyOptions = {
  method: 'GET',
	headers: {
    'X-RapidAPI-Key': '66ffc7fa92msh170770be6ee18ffp15c6b3jsn88d8fc037362',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

// Tasty API fetch
fetch(tastyApi, tastyOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    console.log('Tasty Fetch Response \n-------------');
    console.log(data)
    })

// Google Places API - search place by query 
let map;
let service;
let infowindow;

function initMap() {
  const sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("maps"), {
    center: sydney,
    zoom: 15,
  });

  const request = {
    query: "Museum of Contemporary Art Australia",
    fields: ["name", "geometry"],
  };

  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
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
initMap();


