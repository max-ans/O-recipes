import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './SideBar.scss';

const SideBar = ({ recipes }) => (
  <nav className="navigation">
    <ul className="sidebar">
      <li className="sidebar-item">
        <NavLink
          to="/"
          activeClassName="linked"
        >
          Accueil
        </NavLink>
      </li>
      {recipes.map((recipe) => (
        <li key={recipe.id} className="sidebar-item">
          <NavLink
            className="sidebar-item-link"
            to={`recipe/${recipe.slug}`}
            exact
            activeClassName="linked"
          >
            {recipe.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

SideBar.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SideBar;
