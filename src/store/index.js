import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

// reducer principale qui regroupe tout les autres
import reducer from 'src/reducers';

const store = createStore(
  // reducer
  reducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;
