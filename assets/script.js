// API keys (+backups)
var placesKey1="AIzaSyBDr_dT0gyfPk9TNst7heS7aD12S8A2nLk";
var recipeKey1= '66ffc7fa92msh170770be6ee18ffp15c6b3jsn88d8fc037362';
var placesKey2="AIzaSyATmyZ1ZmaWihFMPJLJoLEGfbzjESWfWe8";
var recipeKey2= '1ab6ffd471mshbf01716883afebfp1595bcjsnfab03526961a';


 // button & user input id -> variables
 var foodSearchButton = document.getElementById('foodSearch-btn');
 var userInput = document.getElementById('userInput');
 var recipeSearchButton = document.getElementById('recipeSearch-btn');
 
 // click event listener with function
// foodSearchButton.addeventlistener('click',getFood);
recipeSearchButton.addEventListener('click',getRecipe);

function getRecipe() {
  // API variables using user input 
  var userInput = document.getElementById('userInput').value;
  var recipeApi = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query='+userInput+'&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&ignorePantry=true';
  var recipeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1ab6ffd471mshbf01716883afebfp1595bcjsnfab03526961a',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };

  fetch(recipeApi, recipeOptions)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
  console.log('Recipe Data Fetch Response \n-------------');
  console.log(data);
  // loop through data/recipe
  for (x = 0; x < 6; x++) {
    var title = data.results[x].title;
    console.log('Recipe Title \n-------------');
    console.log(title);
    

    console.log("Recipe Instructions\n-------------");
    // loop through instruction steps per each data
    var instructions = data.results[x].analyzedInstructions[0].steps; // returns instructions of FIRST result in a array
    // console.log(instructions);
    for (i = 0; i < instructions.length; i++) {
      console.log((i+1)+"."+instructions[i].step);
    
    }
  }
    
  })
}

// getRecipe();
