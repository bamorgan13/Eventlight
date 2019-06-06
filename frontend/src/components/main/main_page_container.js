import { connect } from "react-redux"
import MainPage from "./main_page";
import { updateFilter } from "../../actions/filter_actions";
import { fetchCities } from "../../actions/city_actions";

const mstp = state => {
  return {
    cityFilterValue: state.ui.filter.city
  };
};

const mdtp = dispatch => {
  return {
    updateFilter: filter => dispatch(updateFilter(filter)),
    fetchCities: cityFilter => dispatch(fetchCities(cityFilter))
  };
};

export default connect(mstp, mdtp)(MainPage);