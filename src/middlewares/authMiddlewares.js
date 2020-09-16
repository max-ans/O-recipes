import axios from 'axios';

const authMiddlewares = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
      break;
  }
};
export default authMiddlewares;
