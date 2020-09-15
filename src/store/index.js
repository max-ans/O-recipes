import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import recipesReducer from 'src/reducers/recipesReducer';

const store = createStore(
  // reducer
  recipesReducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;
