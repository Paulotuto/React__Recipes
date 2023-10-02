import React from 'react';

const Recettes = ({ recettes }) => {
  return (
    <div>
      <h2>Liste des recettes</h2>
      <ul>
        {recettes.map((recette, index) => (
          <li key={index}>
            {recette.title}
            <img src={recette.image} alt={recette.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recettes;
