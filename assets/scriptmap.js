var searchBtn = document.getElementById("map-search");
searchBtn.addEventListener('click', getPOIs);


function getPOIs() {
  var userInput = document.getElementById('user-input').value;
  var address = userInput.split(' ');
  console.log(address);
  var urlarray = "";
  for (i=0; i < address.length; i++) {
    urlarray +=(address[i]+"%20");
    urlarray.toString();
  }
  console.log(urlarray);


fetch("https://api.tomtom.com/search/2/search/" + urlarray +".json?key=dZ5BlNRNhnRnPRnSsYHD3rLpSg7UFuY9")
.then (function (response) {
  return response.json();
})
.then (function (data) {
  console.log(data);
})
}