import React from 'react';
import splashImage from "./bg-desktop-snowglobe.jpg";
import Calendar from "react-calendar";
import AutocompleteDropdownContainer from "./autocomplete_dropdown_container";
import "../../styles/splash.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchParams: { event: "", location: "", date: "" },
      calendarShow: false,
      calendarClass: "hidden",
      eventDropdownShow: "hidden",
      locationDropdownShow: "hidden"
     };

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputFromCalendar = this.handleInputFromCalendar.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
  }

  componentWillMount() {
    document.addEventListener("click", this.handleClick);
  }

  showInputDropdown(dropdownType) {
    return event => {
      this.setState({ [`${dropdownType}DropdownShow`]: "active" });
    };
  }
  
  hideInputDropdown(dropdownType) {
    return event => {
      this.setState({ [`${dropdownType}DropdownShow`]: "hidden" });
    };
  }

  handleClick(event) {
    if (this.state.calendarShow && !event.target.className.includes("react-calendar") && event.target.nodeName !== "ABBR") {
      this.setState({ calendarClass: "hidden" });
    } 
  }

  handleInput(field) {
    const { searchParams } = this.state;
    return event => {
      if (field === "date") {
        if (event.target.value === "Pick a date...") {
          searchParams[field] = "";
          this.setState({ calendarShow: true, calendarClass: "active", searchParams });
        } else {
          const datesAsIntegers = event.target.value.split(",").map( date => parseInt(date));
          searchParams[field] = datesAsIntegers;
          this.setState({ searchParams });
        }
      } else {
        searchParams[field] = event.target.value;
        this.setState({ searchParams });
      }
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { searchParams } = this.state;
    const locationCityState = searchParams.location.split(",");
    const filterParams = { 
      title: searchParams.event, 
      city: { 
        city: locationCityState[0], 
        state: locationCityState[1]
      },
      // switching naming convention to snake case to agree with backend filter parsing
      start_date: searchParams.date[0],
      end_date: searchParams.date[1]
    };
    this.props.updateFilter(filterParams);
    this.props.history.push("./events");
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

  formatDates(dates) {
      if (typeof dates === "string") return "";
      const datesList = dates.map( date => new Date(date) );
      const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
      let prettyFormat = [];      
      datesList.forEach(date => {
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
      
        prettyFormat.push(day + ' ' + monthNames[monthIndex] + ' ' + year);
      })
    return prettyFormat.join(" - ");
  }

  getDates() {
    let returnDates = {};
    const now = new Date();
    const todayStart = new Date().setHours(0,0,0,0);
    const todayEnd = new Date().setHours(23,59,59,999);
    returnDates["today"] = [todayStart, todayEnd];
    const tomorrowStart = todayEnd + 1;
    const tomorrowEnd = new Date(todayEnd).setDate(now.getDate() + 1);
    returnDates["tomorrow"] = [tomorrowStart, tomorrowEnd];
    let thisWeekendStart;
    let thisWeekendEnd;
    for (let i = 0; i < 7; i++) {
      thisWeekendStart = null;
      thisWeekendEnd = null;
      const day = new Date(new Date(now).setDate(now.getDate() + i));
      if (day.getDay() === 6) {
        thisWeekendStart = day.setHours(0,0,0,0);
        thisWeekendEnd = new Date(new Date(day).setDate(day.getDate() + 1)).setHours(23,59,59,999);
        break;
      }
    }
    returnDates["thisWeekend"] = [thisWeekendStart, thisWeekendEnd];
    const thisWeekStart = now.setHours(0,0,0,0);
    const thisWeekEnd = thisWeekendEnd;
    returnDates["thisWeek"] = [thisWeekStart, thisWeekEnd];
    const nextWeekStart = thisWeekEnd + 1;
    const nextWeekEnd = new Date(new Date(nextWeekStart).setDate(new Date(nextWeekStart).getDate() + 6)).setHours(23,59,59,999);
    returnDates["nextWeek"] = [nextWeekStart, nextWeekEnd];
    const thisMonthStart = now.setHours(0,0,0,0);
    const thisMonthEnd = new Date(new Date(new Date(thisMonthStart).setDate(32)).setDate(0)).setHours(23,59,59,999);
    returnDates["thisMonth"] = [thisMonthStart, thisMonthEnd];
    const nextMonthStart = thisMonthEnd + 1;
    const nextMonthEnd = new Date(new Date(new Date(nextMonthStart).setDate(32)).setDate(0)).setHours(23,59,59,999);
    returnDates["nextMonth"] = [nextMonthStart, nextMonthEnd];
    return returnDates;
  }

  render() {
    const dateOptions = this.getDates();
    const { today, tomorrow, thisWeekend, thisWeek, nextWeek, thisMonth, nextMonth } = dateOptions;
    const dateInputEle = this.state.calendarShow ? (
      <div className="search-form-select-wrapper">
        <div>{this.formatDates(this.state.searchParams.date)}</div>
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
                  onFocus={this.showInputDropdown(("event"))} 
                  onBlur={this.hideInputDropdown(("event"))} 
                  placeholder="Event" value={this.state.event} 
                  onChange={this.handleInput("event")}
                />
                <div className="input-styling-underline" />
                <AutocompleteDropdownContainer dropdownType="event" dropdownShow={this.state.eventDropdownShow}/>
              </div>
              <div className="splash-header-search-form-content location-content">
                <div className="search-form-input-info">In</div>
                <input 
                  type="text" 
                  onFocus={this.showInputDropdown("location")} 
                  onBlur={this.hideInputDropdown("location")} 
                  placeholder="Location" value={this.state.location} 
                  onChange={this.handleInput("location")}
                />
                <div className="input-styling-underline" />
                <AutocompleteDropdownContainer dropdownType="location" dropdownShow={this.state.locationDropdownShow}/>
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
        <footer>
          <h1>Eventlight</h1>
          <div>Copyright &copy; 2019 BryGorRic</div>
        </footer>
      </div>
    )
  }
}

export default MainPage
