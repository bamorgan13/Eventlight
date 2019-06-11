import React from "react";
import AutocompleteDropdown from "./autocomplete_dropdown";
import * as SearchUtil from "../../util/search_util";
import "../../styles/search_bar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { event: "", city: "", eventsDropdownShow: "hidden", citiesDropdownShow: "hidden" };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.debouncedFetchCitiesAuto = SearchUtil.debounce(this.fetchCityValues.bind(this), 500).bind(this);
    this.debouncedFetchEventsAuto = SearchUtil.debounce(this.fetchEventValues.bind(this), 500).bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.searchParams.city !== this.state.searchParams.city) {
  //     this.debouncedFetchCitiesAuto();
  //   } else if (prevState.searchParams.event !== this.state.searchParams.event) {
  //     this.debouncedFetchEventsAuto();
  //   }
  // }

  componentWillMount(){
    document.addEventListener("mousedown", this.toggleDropdown("document"));
    setTimeout(() => this.props.fetchEventsAuto({ event: "" }), 3000);
  }

  fetchEventValues() {
    this.props.fetchEventsAuto({ event: this.state.event });
  }
  
  fetchCityValues() {
    this.props.fetchCitiessAuto({ city: this.state.city });
  }

  handleInput(field) {
    const pluralizedField = field === "event" ? "Events" : "Cities";
    return event => {
      this.setState({ [field]: event.target.value });
      this[`debouncedFetch${pluralizedField}Auto`]();
    };
  }
 
  handleSubmit(event) {
    event.preventDefault();
    // format filter parameters here
  }

  toggleDropdown(type) {
    return event => {
      if (type === "events") {
        this.setState({ eventsDropdownShow: "active", citiesDropdownShow: "hidden" })
      } else if (type === "cities") {
        this.setState({ eventsDropdownShow: "hidden", citiesDropdownShow: "active" })
      } else {
        this.setState({ eventsDropdownShow: "hidden", citiesDropdownShow: "hidden" });
      }
    }
  }

  autocomplete(field) {
    return autocompleteValue => {
      this.setState({ [`${field}DropdownShow`]: "hidden" });
    }
  }

  render() {
    return (
      <div className="search-bar-wrapper">
        <form>
          <input type="text" onChange={this.handleInput("event")} onMouseDown={this.toggleDropdown("events")}/>
          <AutocompleteDropdown dropdownType="events" dropdownShow={this.state.eventsDropdownShow} events={this.props.eventsAuto} autocomplete={this.autocomplete("events")}/>
          <input type="text" onChange={this.handleInput("city")}  onMouseDown={this.toggleDropdown("cities")}/>
          <AutocompleteDropdown dropdownType="cities" dropdownShow={this.state.citiesDropdownShow} cities={this.props.citiesAuto} autocomplete={this.autocomplete("cities")}/>
          <button onClick={this.handleSubmit}>Search</button>
        </form>
      </div>
    )
  }
}

export default SearchBar;