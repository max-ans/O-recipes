import {
  FETCH_RECIPES,
  saveRecipes,
} from 'src/actions/recipes';

import axios from 'axios';

const recipesMiddlewares = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_RECIPES:
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveRecipes(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
      break;
  }
};
export default recipesMiddlewares;
