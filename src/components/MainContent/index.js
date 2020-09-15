import React from 'react';
import Recipes from 'src/containers/Recipes';

import './mainContent.scss';

const MainContent = () => (
  <div className="mainContent">
    <h1 className="main-title">oRecipes</h1>
    <p className="main-paragraphe">
      Bienvenue sur mon site de recettes de cuisine. Régalez-vous !
    </p>
    <Recipes />
  </div>
);

export default MainContent;
