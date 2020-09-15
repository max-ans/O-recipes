import React from 'react';
import { Link } from 'react-router-dom';

const RecipeSmall = () => (
  <article className="recipe-small">
    <img src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
    <div className="recipe-small-content">
      <h2>
        Crêpes Raffinées
      </h2>
      <p>
        Difficulté: facile
      </p>
      <Link
        to="/recipe/recette1"
      >
        Voir la recette
      </Link>
    </div>
  </article>
);

export default RecipeSmall;
