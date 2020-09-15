// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// == Import : local
import { getRecipeBySlug } from 'src/utils';
// Composants
import Title from './Title';
import Ingredients from './Ingredients';
import Steps from './Steps';

// Style
import './styles.scss';

// == Composant
function Recipe({ recipes }) {
  const { slug } = useParams();

  const recipe = getRecipeBySlug(recipes, slug);

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
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      ingredients: PropTypes.array.isRequired,
      instructions: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Recipe;
