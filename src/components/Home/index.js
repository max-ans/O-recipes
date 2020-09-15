import React from 'react';

import RecipeSmall from './recipeSmall';
import './home.scss';

const Home = () => (
  <main className="home">
    <p>
      bienvenue sur mon site de recettes! regalez vous !!!
    </p>
    <div className="recipes-small">
      <RecipeSmall />
      <RecipeSmall />
      <RecipeSmall />
      <RecipeSmall />
    </div>
  </main>
);

export default Home;
