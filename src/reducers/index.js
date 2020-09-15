import { combineReducers } from 'redux';

import recipesReducer from './recipes';

const rootReducer = combineReducers({
  // nom du tiroir: reducer associé
  recipes: recipesReducer,
});

export default rootReducer;
