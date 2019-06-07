import { connect } from "react-redux"
import MainPage from "./main_page";
import { updateFilter } from "../../actions/filter_actions";
import { fetchCitiesAuto } from "../../actions/city_actions";
import { fetchEventsAuto } from "../../actions/event_actions";

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
    fetchEventsAuto: eventFilter => dispatch(fetchEventsAuto(eventFilter))
  };
};

export default connect(mstp, mdtp)(MainPage);