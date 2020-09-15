import React from 'react';
import PropTypes from 'prop-types';

const RecipeCard = ({ thumbnail, difficulty, title }) => (
  <div className="recipeCard">
    <img src={thumbnail} alt="" className="recipe-img" />
    <h3 className="recipe-title">{title}</h3>
    <p className="recipe-difficulty"> Dfficultée : {difficulty}</p>
    <a href="" className="recipe-details">Voir la recette</a>
  </div>
);

RecipeCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RecipeCard;
