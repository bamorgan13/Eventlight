import { connect } from "react-redux"
import MainPage from "./main_page";
import { updateFilter } from "../../actions/filter_actions";
import { fetchCitiesAuto, fetchEventsAuto, clearAutocomplete } from "../../actions/autocomplete_actions";

const mstp = state => {
  return {
    cities: Object.values(state.ui.autocomplete.cities),
    events: Object.values(state.ui.autocomplete.events),
  };
};

const mdtp = dispatch => {
  return {
    updateFilter: filter => dispatch(updateFilter(filter)),
    fetchCitiesAuto: cityFilter => dispatch(fetchCitiesAuto(cityFilter)),
    fetchEventsAuto: eventFilter => dispatch(fetchEventsAuto(eventFilter)),
    clearAutocomplete: () => dispatch(clearAutocomplete()),
  };
};

export default connect(mstp, mdtp)(MainPage);