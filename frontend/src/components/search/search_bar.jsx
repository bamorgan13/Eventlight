import React from "react";
import Calendar from "react-calendar";
import AutocompleteDropdown from "./autocomplete_dropdown";
import * as SearchUtil from "../../util/search_util";
import "../../styles/search_bar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { event: "", city: "", date: "", eventsDropdownShow: "hidden", citiesDropdownShow: "hidden", calendarShow: false, calendarClass: "hidden" };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.debouncedFetchCitiesAuto = SearchUtil.debounce(this.fetchCityValues.bind(this), 500).bind(this);
    this.debouncedFetchEventsAuto = SearchUtil.debounce(this.fetchEventValues.bind(this), 500).bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.handleInputFromCalendar = this.handleInputFromCalendar.bind(this);
  }

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
      if (field === "date") {
        if (event.target.value === "Pick a date...") {
          this.setState({ calendarShow: true, calendarClass: "active", date: "" });
        } else {
          const datesAsIntegers = event.target.value.split(",").map( date => parseInt(date));
          this.setState({ date: datesAsIntegers });
        }
      } else {
        this.setState({ [field]: event.target.value });
        this[`debouncedFetch${pluralizedField}Auto`]();
      }
    };
  }
 
  handleSubmit(event) {
    event.preventDefault();
    const filterParams = { 
      title: this.state.event, 
      city: this.state.city, 
      start_date: this.state.date[0],
      end_date: this.state.date[1]
    };
    this.props.updateFilter(filterParams);
    this.forceUpdate();
  }

  toggleDropdown(event) {
    console.log(event.target)
    const eventsDropdownEles = document.getElementsByClassName("autocomplete-dropdown-events")[0];
    const citiesDropdownEles = document.getElementsByClassName("autocomplete-dropdown-cities")[0];
    if (event.target.className.includes("events-input") || eventsDropdownEles.contains(event.target)) {
      this.setState({ eventsDropdownShow: "active", citiesDropdownShow: "hidden" })
    } else if (event.target.className.includes("cities-input") || citiesDropdownEles.contains(event.target)) {
      this.setState({ eventsDropdownShow: "hidden", citiesDropdownShow: "active" })
    } else if (event.target.className.includes("react-calendar") || event.target.nodeName === "ABBR") {
      // retain active state so do nothing
    } else {
      this.setState({ eventsDropdownShow: "hidden", citiesDropdownShow: "hidden", calendarClass: "hidden" });
    }
  }

  autocomplete(field) {
    const pluralizedField = field === "event" ? "events" : "cities";
    return autocompleteValue => {
      this.setState({ [field]: autocompleteValue, [`${pluralizedField}DropdownShow`]: "hidden" });
    }
  }

  closeCalendar(event) {
    this.setState({ calendarShow: false, calendarClass: "hidden", date: "" });
  }

  handleInputFromCalendar(dateRange) {
    const startDate = dateRange[0].setHours(0,0,0,0);
    const endDate = dateRange[1].setHours(23,59,59,999);
    this.setState({ date: [startDate, endDate] });
  }

  render() {
    // const dateOptions = SearchUtil.getDates();
    // const { today, tomorrow, thisWeekend, thisWeek, nextWeek, thisMonth, nextMonth } = dateOptions;

    // const dateInputEle = this.state.calendarShow ? (
    //   <div className="search-form-select-wrapper">
    //     <div>{SearchUtil.formatDates(this.state.date)}</div>
    //     <Calendar className={`search-form-calendar-${this.state.calendarClass}`} selectRange={true} returnValue="range" onChange={this.handleInputFromCalendar}/>
    //     <div className="search-form-select-close" onClick={this.closeCalendar}>&times;</div>
    //   </div>
    // ) : (
    //   <div className="search-form-select-wrapper">
    //     <select className="search-bar-select" onChange={this.handleInput("date")} defaultValue="">
    //       <option value="" disabled={true}>Any Date</option>
    //       <option value={today}>Today</option>
    //       <option value={tomorrow}>Tomorrow</option>
    //       <option value={thisWeekend}>This weekend</option>
    //       <option value={thisWeek}>This week</option>
    //       <option value={nextWeek}>Next week</option>
    //       <option value={thisMonth}>This month</option>
    //       <option value={nextMonth}>Next month</option>
    //       <option>Pick a date...</option>
    //     </select>
    //     <div className="search-form-select-arrow"/>
    //   </div>
    // );

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
          {/* <div className="search-bar-select-date-wrapper">
            {dateInputEle}
          </div> */}
        </form>
      </div>
    )
  }
}

export default SearchBar;