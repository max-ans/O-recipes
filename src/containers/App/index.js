import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
