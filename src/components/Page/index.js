import React from 'react';
import Recipe from 'src/containers/Recipe';
import Home from 'src/containers/Home';
import { Route } from 'react-router-dom';

/*
Route sans Switch :
-Il peut y avoir plusieurs routes qui correspondent à l'URL
de la barre de recherche (Si on veut une comparaison strict, on utilisera la props exact)

Route englobées dans un switch :
- On s'arrête à la première Route qui correspond à l'URL
(nécessaire en particulier quand on souhaite intégrer un page d'erreur 404)
=> dans ce cas, pas besoin de la props exact, on peut placer la route "/"
après les autres .

*/

import './page.scss';

const Page = () => (
  <div className="page">
    <h1 className="page-title">Orecipes</h1>
    <div className="page-content">
      <Route
        path="/"
        exact
      >
        <Home />
      </Route>
      <Route
        path="/recipe/:slug"
      >
        <Recipe />
      </Route>
      {}
      {/* <Recipe recipe={data[0]} /> */}
    </div>
  </div>
);

export default Page;
