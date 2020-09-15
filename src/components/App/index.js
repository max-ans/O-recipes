// == Import npm
import React from 'react';

// == Import
import Nav from 'src/components/Nav';
import Page from 'src/components/Page';

import recipes from 'src/data';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Nav recipes={recipes} />
    <Page />
  </div>
);

// == Export
export default App;
