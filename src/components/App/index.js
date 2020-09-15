// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import SideBar from 'src/containers/SideBar';
import MainContent from 'src/components/MainContent';
import Recipe from 'src/components/Recipe';

import './styles.scss';

// == Composant
const App = ({ recipes }) => (
  <div className="app">
    <SideBar />
    <Switch>
      {recipes.map((recipe) => (
        <Route key={recipe.id} path="/recipe/:slug">
          <Recipe recipe={recipe} />
        </Route>
      ))}
      <Route path="/">
        <MainContent />
      </Route>
    </Switch>

  </div>
);

App.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default App;
