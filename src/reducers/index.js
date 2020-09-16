import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import authReducer from './auth';

const rootReducer = combineReducers({
  // nom du tiroir: reducer associé
  recipes: recipesReducer,
  auth: authReducer,
});

export default rootReducer;
