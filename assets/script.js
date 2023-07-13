// var url = 'https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup';
// var options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '66ffc7fa92msh170770be6ee18ffp15c6b3jsn88d8fc037362',
// 		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// google api
var googleApi="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=restaurant&name=harbour&key=AIzaSyBDr_dT0gyfPk9TNst7heS7aD12S8A2nLk";

// var placesApi="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=restaurant&name=harbour&key=AIzaSyBDr_dT0gyfPk9TNst7heS7aD12S8A2nLk";


// second key
var placesKey1="AIzaSyBDr_dT0gyfPk9TNst7heS7aD12S8A2nLk";
// var placesKey2="AIzaSyATmyZ1ZmaWihFMPJLJoLEGfbzjESWfWe8";


// fetch(url, options)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//     console.log('Fetch Response \n-------------');
//     console.log(data)
//     })



// google places fetch
fetch(googleApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
    })
