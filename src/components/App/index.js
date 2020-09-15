// == Import npm
import React from 'react';

import SideBar from 'src/components/SideBar';
import MainContent from 'src/components/MainContent';

// == Import

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <SideBar />
    <MainContent />

  </div>
);

// == Export
export default App;
