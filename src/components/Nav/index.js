import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <NavLink
      to="/"
      className="nav-item"
      activeClassName="nav-item--active"
      exact
    >
      Accueil
    </NavLink>
    <NavLink
      to="/recipe/recette1"
      className="nav-item "
      activeClassName="nav-item--active"
    >
      Recette 1
    </NavLink>
    <NavLink
      to="/recipe/recette2"
      className="nav-item"
      activeClassName="nav-item--active"
    >
      Recette 2
    </NavLink>
  </nav>
);

export default Nav;
