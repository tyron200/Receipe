document.getElementById('search-btn').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();
   
    if (query) {
    searchInput.value = '';
    searchRecipes(query);
    }
   });
   
   function searchRecipes(query) {
    const apiKey = '0067d201c7534c0d80f828931eaa4bdf';
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;
   
    fetch(url)
    .then(response => response.json())
    .then(data => displayRecipes(data.results))
    .catch(error => console.log(error));
   }
   
   function displayRecipes(recipes) {
    const recipeContainer = document.getElementById('recipe-container');
   
    recipeContainer.innerHTML = '';
   
    recipes.forEach(recipe => {
    const div = document.createElement('div');
    div.innerHTML = `
       <h2>${recipe.title}</h2>
       <img src="${recipe.image}" alt="${recipe.title}">
       <p>Ready In: ${recipe.readyInMinutes} minutes</p>
    `;
    recipeContainer.appendChild(div);
    });
   }