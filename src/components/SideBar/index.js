import React from 'react';
import PropTypes from 'prop-types';

import './SideBar.scss';

const SideBar = ({ recipes }) => (
  <nav className="navigation">
    <ul className="sidebar">
      <li className="sidebar-item"> <a href=""> Accueil </a></li>
      {recipes.map((recipe) => (
        <li key={recipe.id} className="sidebar-item"> <a href=""> {recipe.title} </a></li>
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
