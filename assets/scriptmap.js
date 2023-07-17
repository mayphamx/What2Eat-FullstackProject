// var keymay = "z4056nDrqbPFty14rw9X8S896596B07p";
var searchButton = document.getElementById('map-search');
searchButton.addEventListener('click', getRecipe);

function getRecipe() {
  // API variables using user input 
  var userInput = document.getElementById('user-input').value;
  var recipeApi = 'https://api.tomtom.com/search/2/categorySearch/'+userInput+'.json?categorySet=7315&view=Unified&key=z4056nDrqbPFty14rw9X8S896596B07p';
    
    fetch(recipeApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('Recipe Data Fetch Response \n-------------');
      console.log(data);
    })}

