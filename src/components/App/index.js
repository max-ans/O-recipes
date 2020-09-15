// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';

import './styles.scss';

// == Composant
const App = ({ fetchRecipes }) => {
  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <div className="app">
      <Nav />
      <Page />
    </div>
  );
};

App.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
};

// == Export
export default App;
