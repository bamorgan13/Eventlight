import { connect } from "react-redux"
import MainPage from "./main_page";

const mstp = state => {
  return {
    // grabs most recently uploaded events and liked events here
  };
};

const mdtp = dispatch => {
  return {

  };
};

export default connect(mstp, mdtp)(MainPage);