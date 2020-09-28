import {
  UPDATE_INPUT_VALUE,
  CONNECT_USER,
  DISCONNECT_USER,
} from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  isLogged: false,
  user: '',
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      // if (action.name === 'email') {
      //   return {
      //     ...state,
      //     email: action.value,
      //   };
      // }
      // return {
      //   ...state,
      //   password: action.value,
      // };
      return {
        ...state,
        [action.name]: action.value,
      };
    case CONNECT_USER:
      return {
        ...state,
        user: action.user.username,
        isLogged: true,
        email: '',
        password: '',
      };
    case DISCONNECT_USER:
      return {
        ...state,
        user: '',
        isLogged: false,
      };
    default: return state;
  }
};

export default auth;
