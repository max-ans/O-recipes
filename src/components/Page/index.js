import React from 'react';
import Recipe from 'src/components/Recipe';
import Home from 'src/components/Home';

import './page.scss';

import data from 'src/data';

const Page = () => (
  <div className="page">
    <h1 className="page-title">Orecipes</h1>
    <div className="page-content">
      {}
      {/* <Recipe recipe={data[0]} /> */}
      <Home />
    </div>
  </div>
);

export default Page;
