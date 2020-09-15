import allRecipe from 'src/data';

const intialState = {
  recipes: allRecipe,
};

const recipesReducer = (state = intialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default recipesReducer;
