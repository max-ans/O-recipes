import { connect } from 'react-redux';
import { fetchRecipes } from 'src/actions/recipes';

// === on importe le composant de présentation
import App from 'src/components/App';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  loading: state.recipes.loading,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  fetchRecipes: () => {
    dispatch(fetchRecipes());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
