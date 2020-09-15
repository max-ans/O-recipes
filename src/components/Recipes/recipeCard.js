import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeCard = ({
  thumbnail,
  difficulty,
  title,
  slug,
}) => (
  <div className="recipeCard">
    <img src={thumbnail} alt="" className="recipe-img" />
    <h3 className="recipe-title">{title}</h3>
    <p className="recipe-difficulty"> Dfficultée : {difficulty}</p>
    <Link
      className="recipe-details"
      to={`recipe/${slug}`}
    >
      Voir la recette
    </Link>
  </div>
);

RecipeCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default RecipeCard;
