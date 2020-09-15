import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './nav.scss';
import { slugger } from 'src/utils';

const Nav = ({ recipes }) => (
  <nav className="nav">
    <NavLink
      to="/"
      className="nav-item"
      activeClassName="nav-item--active"
      exact
    >
      Accueil
    </NavLink>
    {recipes.map((recipe) => (
      <NavLink
        key={recipe.id}
        to={`/recipe/${slugger(recipe.title)}`}
        className="nav-item "
        activeClassName="nav-item--active"
      >
        {recipe.title}
      </NavLink>
    ))}
  </nav>
);

Nav.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Nav;
