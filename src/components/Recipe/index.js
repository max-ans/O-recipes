// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
// Composants
import Title from './Title';
import Ingredients from './Ingredients';
import Steps from './Steps';

// Style
import './styles.scss';

// == Composant
function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <Title
        title={recipe.title}
        author={recipe.author}
        thumbnail={recipe.thumbnail}
        difficulty={recipe.difficulty}
      />
      <Ingredients
        ingredients={recipe.ingredients}
      />
      <Steps
        steps={recipe.instructions}
      />
    </div>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    instructions: PropTypes.array.isRequired,
  }).isRequired,
};

// == Export
export default Recipe;
