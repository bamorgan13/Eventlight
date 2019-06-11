import React from 'react';
import splashImage from "./bg-desktop-snowglobe.jpg";
import Calendar from "react-calendar";
import AutocompleteDropdown from "../search/autocomplete_dropdown";
import LikeIndexContainer from "../likes/like_index_container";
import EventIndexContainer from "../events/event_index_container";
import * as SearchUtil from "../../util/search_util";
import "../../styles/splash.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchParams: { event: "", city: "", date: "" },
      calendarShow: false,
      calendarClass: "hidden",
      eventDropdownShow: "hidden",
      cityDropdownShow: "hidden",
     };

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputFromCalendar = this.handleInputFromCalendar.bind(this);
    this.autocomplete = this.autocomplete.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.debouncedFetchCitiesAuto = SearchUtil.debounce(this.fetchCityValues.bind(this), 500).bind(this);
    this.debouncedFetchEventsAuto = SearchUtil.debounce(this.fetchEventValues.bind(this), 500).bind(this);
  }

  componentWillMount() {
    document.addEventListener("click", this.handleClick);
    this.props.clearFilters()
    this.props.fetchEvents();
  }

  componentDidMount() {
    setTimeout(() => this.props.fetchEventsAuto({ event: "" }), 3000);
  }

  componentWillUnmount() {
    this.props.clearAutocomplete();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchParams.city !== this.state.searchParams.city) {
      this.debouncedFetchCitiesAuto();
    } else if (prevState.searchParams.event !== this.state.searchParams.event) {
      this.debouncedFetchEventsAuto();
    }
  }

  toggleInputDropdown(dropdownType) {
    return event => {
      this.setState({ [`${dropdownType}DropdownShow`]: "active" });
    };
  }
  
  handleClick(event) {
    if (this.state.calendarShow && !event.target.className.includes("react-calendar") && event.target.nodeName !== "ABBR") {
      this.setState({ calendarClass: "hidden" });
    } else if (!event.target.className.includes("autocomplete")) {
      if (this.state.eventDropdownShow === "active" && !event.target.className.includes("event")) {
        this.setState({ eventDropdownShow: "hidden" });
      } else if (this.state.cityDropdownShow === "active" && !event.target.className.includes("city")) {
        this.setState({ cityDropdownShow: "hidden" });
      }
    }
  }

  handleInput(field) {
    const { searchParams } = this.state;
    const newSearchParams = Object.assign({}, searchParams);
    return event => {
      if (field === "date") {
        if (event.target.value === "Pick a date...") {
          newSearchParams[field] = "";
          this.setState({ calendarShow: true, calendarClass: "active", searchParams: newSearchParams });
        } else {
          const datesAsIntegers = event.target.value.split(",").map( date => parseInt(date));
          newSearchParams[field] = datesAsIntegers;
          this.setState({ searchParams: newSearchParams });
        }
      } else {
        newSearchParams[field] = event.target.value;
        this.setState({ searchParams: newSearchParams });
      }
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { searchParams } = this.state;
    const cityState = searchParams.city.split(",");
    const filterParams = { 
      title: searchParams.event, 
      city: cityState[0], 
      // switching naming convention to snake case to agree with backend filter parsing
      start_date: searchParams.date[0],
      end_date: searchParams.date[1]
    };
    this.props.updateFilter(filterParams);
    this.props.history.push("./events");
  }

  autocomplete(field) {
    const { searchParams } = this.state;
    const newSearchParams = Object.assign({}, searchParams);
    return autocompleteValue => {
      newSearchParams[field] = autocompleteValue;
      this.setState({ searchParams: newSearchParams, [`${field}DropdownShow`]: "hidden" });
    }
  }

  fetchCityValues() {
    this.props.fetchCitiesAuto({ city: this.state.searchParams.city })
  }

  fetchEventValues() {
    this.props.fetchEventsAuto({ event: this.state.searchParams.event })
  }

  closeCalendar(event) {
    const { searchParams } = this.state;
    searchParams.date = "";
    this.setState({ calendarShow: false, calendarClass: "hidden", searchParams });
  }

  handleInputFromCalendar(dateRange) {
    const { searchParams } = this.state;
    const startDate = dateRange[0].setHours(0,0,0,0);
    const endDate = dateRange[1].setHours(23,59,59,999);
    searchParams.date = [startDate, endDate]
    this.setState({ searchParams });
  }

  render() {
    const dateOptions = SearchUtil.getDates();
    const { today, tomorrow, thisWeekend, thisWeek, nextWeek, thisMonth, nextMonth } = dateOptions;
    
    const dateInputEle = this.state.calendarShow ? (
      <div className="search-form-select-wrapper">
        <div>{SearchUtil.formatDates(this.state.searchParams.date)}</div>
        <Calendar className={`search-form-calendar-${this.state.calendarClass}`} selectRange={true} returnValue="range" onChange={this.handleInputFromCalendar}/>
        <div className="search-form-select-close" onClick={this.closeCalendar}>&times;</div>
      </div>
    ) : (
      <div className="search-form-select-wrapper">
        <select onChange={this.handleInput("date")} defaultValue="">
          <option value="" disabled={true}>Any Date</option>
          <option value={today}>Today</option>
          <option value={tomorrow}>Tomorrow</option>
          <option value={thisWeekend}>This weekend</option>
          <option value={thisWeek}>This week</option>
          <option value={nextWeek}>Next week</option>
          <option value={thisMonth}>This month</option>
          <option value={nextMonth}>Next month</option>
          <option>Pick a date...</option>
        </select>
        <div className="search-form-select-arrow"/>
      </div>
    );

        return (
      <div className="splash-page">
        <div className="splash-header">
          <div className="splash-header-image">
            <img src={splashImage}/>
          </div>
          <div className="splash-header-search">
            <form className="splash-header-search-form">
              <div className="splash-header-search-form-content event-content">
                <div className="search-form-input-info">Looking for</div>
                <input 
                  type="text" 
                  value={this.state.searchParams.event}
                  className="search-form-input-event"
                  onMouseDown={this.toggleInputDropdown(("event"))} 
                  placeholder="Event" 
                  onChange={this.handleInput("event")}
                />
                <div className="input-styling-underline" />
                <AutocompleteDropdown 
                  dropdownType="events" 
                  dropdownShow={this.state.eventDropdownShow} 
                  autocomplete={this.autocomplete("event")}
                  events={this.props.autocompleteEvents}
                />
              </div>
              <div className="splash-header-search-form-content city-content">
                <div className="search-form-input-info">In</div>
                <input 
                  type="text" 
                  value={this.state.searchParams.city}
                  className="search-form-input-city"
                  onMouseDown={this.toggleInputDropdown("city")} 
                  placeholder="Location"
                  onChange={this.handleInput("city")}
                />
                <div className="input-styling-underline" />
                <AutocompleteDropdown 
                  dropdownType="cities" 
                  dropdownShow={this.state.cityDropdownShow} 
                  autocomplete={this.autocomplete("city")}
                  cities={this.props.autocompleteCities}
                />
              </div>
              <div className="splash-header-search-form-content date-content">
                <div className="search-form-input-info">On</div>
                {dateInputEle}
                <div className="input-styling-underline" />
              </div>
              <div className="splash-header-search-form-submit">
                <button onClick={this.handleSubmit}><i className="fas fa-search"></i></button>
              </div>
            </form>
          </div>
        </div>
        <div className="splash-likes-container">
          <LikeIndexContainer />
        </div>
        <div className="splash-events-background">
          <div className="splash-events-container">
            <h1>Live your best life</h1>
            <EventIndexContainer />
          </div>
        </div>
        <footer>
          <h1>Eventlight</h1>
          <div>Copyright &copy; 2019 BryGorRic</div>
        </footer>
      </div>
    )
  }
}

export default MainPage
