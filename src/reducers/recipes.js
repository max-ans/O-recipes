import {
  SAVE_RECIPES,
} from 'src/actions/recipes';

const initialState = {
  // ici l'état initial
  recipes: [],
  // indique si on affiche un loader (recette pas encore chargées)
  loading: true,
};

const recipes = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        recipes: action.allRecipes,
        loading: false,
      };

    default: return state;
  }
};

export default recipes;
