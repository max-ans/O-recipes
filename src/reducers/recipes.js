import {
  SAVE_RECIPES,
} from 'src/actions/recipes';

const initialState = {
  // ici l'état initial
  recipes: [],
};

const recipes = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        recipes: action.allRecipes,
      };

    default: return state;
  }
};

export default recipes;
