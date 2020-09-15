import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer principale qui regroupe tout les autres
import reducer from 'src/reducers';
import recipesMiddleware from 'src/middlewares/recipesMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    recipesMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
