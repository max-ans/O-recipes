import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from './recipeCard';
import './recipes.scss';

const Recipes = ({ recipes }) => (
  <main className="recipes">

    {recipes.map((recipe) => (
      <RecipeCard
        key={recipe.id}
        {...recipe}
      />

    ))}
  </main>
);

Recipes.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Recipes;
