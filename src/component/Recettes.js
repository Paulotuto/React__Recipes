import React from 'react';

const Recettes = ({ recettes }) => {
  return (
    <div>
      <h2 class="titreListe cacher">Recipes List</h2>
      <ul>
        {recettes.map((recette) => (
          <li class="recette">
            <h2>{recette.title}</h2>
            <img src={recette.image} alt={recette.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Recettes;
