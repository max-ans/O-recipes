import {
  SEND_LOGIN_FORM,
  connectUser,
  SEND_DISCONNECT_REQUEST,
  disconnectUser,
} from 'src/actions/auth';
import axios from 'axios';

const authMiddlewares = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case SEND_LOGIN_FORM: {
      const { email, password } = store.getState().auth;
      // withCredentials: true, ===> autorisation d'accéder au cookies
      axios.post('http://localhost:3001/login', {
        email,
        password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(connectUser(response.data.info));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
    }
      break;
    case SEND_DISCONNECT_REQUEST:
      axios.post('http://localhost:3001/logout', {}, {
        withCredentials: true,
      })
        .then(() => {
          // console.log(response);
          store.dispatch(disconnectUser());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
      break;
  }
};
export default authMiddlewares;
