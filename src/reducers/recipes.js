import data from 'src/data';

const initialState = {
  // ici l'état initial
  recipes: data,
};

const recipes = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default recipes;
