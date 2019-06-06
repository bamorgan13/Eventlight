import { connect } from "react-redux"
import MainPage from "./main_page";
import { updateFilter } from "../../actions/filter_actions";

const mstp = state => {
  return {
    // grab most recently uploaded events and liked events here
  };
};

const mdtp = dispatch => {
  return {
    updateFilter: filter => dispatch(updateFilter(filter))
  };
};

export default connect(null, mdtp)(MainPage);