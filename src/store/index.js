import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer principale qui regroupe tout les autres
import reducer from 'src/reducers';
import recipesMiddleware from 'src/middlewares/recipesMiddleware';
import authMiddlewares from 'src/middlewares/authMiddlewares';

const enhancers = composeWithDevTools(
  applyMiddleware(
    recipesMiddleware,
    authMiddlewares,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
