import Recettes from './Recettes.js';
import React, { useState } from 'react';


const Content = () => {
  const [ingredient, setIngredient] = useState('');
  const [recettes, setRecettes] = useState([]);

  const handleInputChange = (event) => {
    setIngredient(event.target.value);
  };

  const searchRecipes = () => {
    // Construisez l'URL de l'API en utilisant l'ingrédient saisi
    const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=938b6afa480e4784bb95c8af68ac6e6f&includeIngredients=';

    // Ici, vous pouvez faire un appel à l'API en utilisant fetch ou axios
    // Exemple avec fetch :
    fetch(apiUrl + ingredient)
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Traitez les données ici (par exemple, affichez les recettes)
        console.log('Recettes:', data);
        setRecettes(data.results);
        document.querySelector('.titreListe').classList.remove('cacher')  // Supposons que les recettes sont dans data.results
      })
      .catch(error => console.error('Erreur lors de la récupération des recettes:', error));
  };

  return (
    <main>
      <section class="rechercher">
      <input
        type="text"
        id="ingredient"
        placeholder="Ex. Chicken, Lemon, etc..."
        value={ingredient}
        onChange={handleInputChange}
      />
      <button onClick={searchRecipes}>Find recipe</button>
      </section>
      <Recettes recettes={recettes} />
    </main>
  );
};

export default Content;