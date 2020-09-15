import { connect } from 'react-redux';

import SideBar from 'src/components/SideBar';

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
