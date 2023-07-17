var searchBtn = document.getElementById("map-search");
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

fetch("https://api.tomtom.com/search/2/search/" + urlArray +".json?key=dZ5BlNRNhnRnPRnSsYHD3rLpSg7UFuY9")
.then (function (response) {
  return response.json();
})
.then (function (data) {
  // console.log(data);
  var lat = data.results[0].position.lat;
  var lon = data.results[0].position.lon;
  restaurants(lat, lon);
  console.log(lat, lon);
})
}

function restaurants(lat, lon) {
  fetch("https://api.tomtom.com/search/2/nearbySearch/.json?lat="+lat+"&lon="+lon+"&limit=20&radius=5000&categorySet=7315&view=Unified&key=dZ5BlNRNhnRnPRnSsYHD3rLpSg7UFuY9")
  .then (function (response) {
    return response.json();
  })
  .then (function (data) {
    console.log(data);
  })
}