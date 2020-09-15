import { connect } from 'react-redux';

import Recipes from 'src/components/Recipes';

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
