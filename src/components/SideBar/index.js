import React from 'react';

import './SideBar.scss';

const SideBar = () => (
  <nav className="navigation">
    <ul className="sidebar">
      <li className="sidebar-item"> <a href=""> Accueil </a></li>
      <li className="sidebar-item"> <a href=""> Crêpes Raffinées </a></li>
      <li className="sidebar-item"> <a href=""> Pizza Margherita </a></li>
    </ul>
  </nav>
);

export default SideBar;
