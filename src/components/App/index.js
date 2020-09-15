// == Import npm
import React from 'react';

// == Import
import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Page />
  </div>
);

// == Export
export default App;
