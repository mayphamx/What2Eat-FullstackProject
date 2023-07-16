// API keys (+backups)
// var placesKey1="AIzaSyBDr_dT0gyfPk9TNst7heS7aD12S8A2nLk";
// var tastyKey1= '66ffc7fa92msh170770be6ee18ffp15c6b3jsn88d8fc037362';
// var placesKey2="AIzaSyATmyZ1ZmaWihFMPJLJoLEGfbzjESWfWe8";
// var tastyKey2= '1ab6ffd471mshbf01716883afebfp1595bcjsnfab03526961a';

// Tasty API - recipes/list - JS (fetch) code snippet
// var tastyApi = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
// var tastyOptions = {
//   method: 'GET',
// 	headers: {
//     'X-RapidAPI-Key': '66ffc7fa92msh170770be6ee18ffp15c6b3jsn88d8fc037362',
// 		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
// 	}
// };

 // button & user input id -> variables
 var foodSearchButton = document.getElementById(foodSearch-btn);
 var userInput = document.getElementById(userInput);
 
 // click event listener with function
 foodSearchButton.addeventlistener('click',getFood);
var recipeSearchButton = document.getElementById(recipeSearch-btn);
recipeSearchButton.addeventlistener('click',getRecipe);

function getRecipe() {
  var inputCity = document.getElementById('userInput');
  var tastyApi = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
  var tastyOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '66ffc7fa92msh170770be6ee18ffp15c6b3jsn88d8fc037362',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };

  fetch(tastyApi, tastyOptions)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
  console.log('Tasty Fetch Response \n-------------');
  console.log(data);
  })
}

getRecipe();
