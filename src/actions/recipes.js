export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SAVE_RECIPES = 'SAVE_RECIPES';

export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});

export const saveRecipes = (allRecipes) => ({
  type: SAVE_RECIPES,
  allRecipes,
});
