// API keys (+backups)
var placesKey1="AIzaSyBDr_dT0gyfPk9TNst7heS7aD12S8A2nLk";
var recipeKey1= '66ffc7fa92msh170770be6ee18ffp15c6b3jsn88d8fc037362';
var placesKey2="AIzaSyATmyZ1ZmaWihFMPJLJoLEGfbzjESWfWe8";
var recipeKey2= '1ab6ffd471mshbf01716883afebfp1595bcjsnfab03526961a';


 // button & user input id -> variables
 var userInput = document.getElementById('userInput');
 var recipeSearchButton = document.getElementById('recipeSearch-btn');
//  var recipeList = document.getElementById('recipe-list');
 
 // click event listener with function
 // foodSearchButton.addeventlistener('click',getFood);
 recipeSearchButton.addEventListener('click',getRecipe);
 
 function getRecipe() {
   // API variables using user input 
   var userInput = document.getElementById('userInput').value;
   var recipeApi = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query='+userInput+'&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&ignorePantry=true&number=20';
   var recipeOptions = {
     method: 'GET',
     headers: {
       'X-RapidAPI-Key': '1ab6ffd471mshbf01716883afebfp1595bcjsnfab03526961a',
       'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };
    
    //fetch api 
    fetch(recipeApi, recipeOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('Recipe Data Fetch Response \n-------------');
      console.log(data);
      
    for (x = 0; x < 18; x++) {
      var recipeList = document.getElementById("recipe-list"+(x+1));
        
      // clear items appended on page
      if(recipeList !== "")
      {
        recipeList.innerHTML = "";
      }
      // loop through data/recipe to append items on page
        var titleEl = document.createElement("h2");
        titleEl.textContent = (data.results[x].title);
        recipeList.appendChild(titleEl);

        var imageEl = document.createElement("img");
        imageEl.setAttribute("src", data.results[x].image);
        imageEl.setAttribute("alt", "Image of food based on recipe.");
        recipeList.appendChild(imageEl);

        var minutesEl = document.createElement('h4');
        minutesEl.textContent = "Ready in " +(data.results[x].readyInMinutes)+ " minutes!";
        recipeList.appendChild(minutesEl);
        
        var instructionsTextEl = document.createElement("h4");
        instructionsTextEl.textContent = "Instructions :";
        recipeList.append(instructionsTextEl);

        // loop through instruction steps per each data
        var instructionsData = data.results[x].analyzedInstructions[0].steps; // returns instructions of FIRST result in a array
        for (i = 0; i < instructionsData.length; i++) {
          var instructionsEl = document.createElement("li");
          instructionsEl.textContent =(data.results[x].analyzedInstructions[0].steps[i].step);
          recipeList.append(instructionsEl);}

        var ingredientsTextEl = document.createElement("h4");
        ingredientsTextEl.textContent = "Ingredients :";
        recipeList.append(ingredientsTextEl);
          
        // loop through instruction steps per each data
        var ingredientsData = data.results[x].extendedIngredients; // returns instructions of FIRST result in a array
        for (i = 0; i < ingredientsData.length; i++) {
          var ingredientsEl = document.createElement("p");
          ingredientsEl.textContent = (data.results[x].extendedIngredients[i].nameClean);
          recipeList.append(ingredientsEl);}

        var sourceEl = document.createElement('h6');
        sourceEl.textContent = "Source: " +(data.results[x].sourceName);
        recipeList.appendChild(sourceEl);
        
        // button link to new page
        var linkEl = document.createElement('a');
        linkEl.setAttribute("href", data.results[x].sourceUrl);
        linkEl.textContent = ("Learn More");
        recipeList.appendChild(linkEl);
      
  }})
}

// getRecipe();
//  source link to a button or picture