// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';

import './styles.scss';

// == Composant
const App = ({ fetchRecipes, loading }) => {
  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <div className="app">
      {loading && <div> Chargement en cours...</div>}
      {!loading && (
        <>
          <Nav />
          <Page />
        </>
      )}
    </div>
  );
};

App.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default App;
