import { connect } from 'react-redux';
import {
  updateInputValue,
  sendLoginForm,
  sendDisconnectRequest,
} from 'src/actions/auth';

// === on importe le composant de présentation
import LoginForm from 'src/components/LoginForm';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (value, name) => {
    dispatch(updateInputValue(value, name));
  },
  handleLogin: () => {
    dispatch(sendLoginForm());
  },
  handleLogout: () => {
    dispatch(sendDisconnectRequest());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
