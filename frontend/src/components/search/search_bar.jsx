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
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.searchParams.city !== this.state.searchParams.city) {
  //     this.debouncedFetchCitiesAuto();
  //   } else if (prevState.searchParams.event !== this.state.searchParams.event) {
  //     this.debouncedFetchEventsAuto();
  //   }
  // }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.toggleDropdown);
  }

  componentWillMount(){
    document.addEventListener("mousedown", this.toggleDropdown);
    setTimeout(() => this.props.fetchEventsAuto({ event: "" }), 3000);
  }

  fetchEventValues() {
    this.props.fetchEventsAuto({ event: this.state.event });
  }
  
  fetchCityValues() {
    this.props.fetchCitiesAuto({ city: this.state.city });
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
    const filterParams = { 
      title: this.state.event, 
      city: this.state.city, 
    };
    this.props.updateFilter(filterParams);
    this.forceUpdate();
  }

  toggleDropdown(event) {
    const eventsDropdownEles = document.getElementsByClassName("autocomplete-dropdown-events")[0];
    const citiesDropdownEles = document.getElementsByClassName("autocomplete-dropdown-cities")[0];
    if (event.target.className.includes("events-input") || eventsDropdownEles.contains(event.target)) {
      this.setState({ eventsDropdownShow: "active", citiesDropdownShow: "hidden" })
    } else if (event.target.className.includes("cities-input") || citiesDropdownEles.contains(event.target)) {
      this.setState({ eventsDropdownShow: "hidden", citiesDropdownShow: "active" })
    } else {
      this.setState({ eventsDropdownShow: "hidden", citiesDropdownShow: "hidden" });
    }
  }

  autocomplete(field) {
    const pluralizedField = field === "event" ? "events" : "cities";
    return autocompleteValue => {
      this.setState({ [field]: autocompleteValue, [`${pluralizedField}DropdownShow`]: "hidden" });
    }
  }

  render() {
    return (
      <div className="search-bar-wrapper">
        <form className="search-bar-form">
          <div className="search-bar-upper-input-wrapper">
            <input 
              type="text" 
              value={this.state.event} 
              className="search-bar-events-input"
              placeholder="Search anything" 
              onChange={this.handleInput("event")} 
              onMouseDown={this.toggleDropdown}
            />
            <AutocompleteDropdown 
              dropdownType="events" 
              dropdownShow={this.state.eventsDropdownShow} 
              events={this.props.eventsAuto} 
              autocomplete={this.autocomplete("event")}
            />
          </div>
          <div className="search-bar-lower-input-wrapper">
            <span>in</span>
            <input 
              type="text" 
              value={this.state.city} 
              className="search-bar-cities-input" 
              placeholder="Location" 
              onChange={this.handleInput("city")}  
              onMouseDown={this.toggleDropdown}
            />
            <AutocompleteDropdown 
              dropdownType="cities" 
              dropdownShow={this.state.citiesDropdownShow} 
              cities={this.props.citiesAuto} 
              autocomplete={this.autocomplete("city")}
            />
            <button onClick={this.handleSubmit}>Search</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;