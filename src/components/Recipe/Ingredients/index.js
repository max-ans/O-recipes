import React from 'react';
import PropTypes from 'prop-types';

import './ingredients.scss';

const Ingredients = ({ ingredients }) => (
  <ul className="ingredients">
    {ingredients.map((ingredient) => (
      <li key={ingredient.id} className="ingredient">
        <span className="quantity">{ingredient.quantity} {ingredient.unit}</span> {ingredient.name}
      </li>
    ))}
  </ul>
);

Ingredients.propTypes = {
  // tableau d'objets... mais on peut être plus précis et indiquer la forme des
  // objets
  // ingredients: PropTypes.arrayOf(PropTypes.object)
  ingredients: PropTypes.arrayOf(
    // les éléments du tableau ont cette forme
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
      quantity: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Ingredients;
