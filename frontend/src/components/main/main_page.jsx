import React from 'react';
import splashImage from "./bg-desktop-snowglobe.jpg";
import Calendar from "react-calendar";
import "../../styles/splash.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
       searchParams: { event: "", location: "", date: [] },
       calendarShow: false
     };

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleInputFromCalendar = this.handleInputFromCalendar.bind(this);
  }

  componentWillMount() {
    document.addEventListener("click", this.handleClick)
  }

  handleClick(event) {
    if (this.state.calendarShow && !event.target.className.includes("react-calendar") && event.target.nodeName !== "ABBR") {
      this.setState({ calendarShow: false });
    } 
  }

  handleInput(field) {
    const { searchParams } = this.state;
    return event => {
      searchParams[field] = event.target.value;
      this.setState({ searchParams });
      if (field === "date" && event.target.value === "Pick a date...") this.setState({ calendarShow: true });
    };
  }

  handleInputFromCalendar(dateRange) {
    const { searchParams } = this.state;
    const startDate = dateRange[0].setHours(0,0,0,0);
    const endDate = dateRange[1].setHours(23,59,59,999);
    searchParams.date = [startDate, endDate]
    // this.setState({ searchParams, calendarShow: false });
    this.setState({ searchParams });
  }

  formatDates(dates) {
      const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
      let prettyFormat      
      dates.forEach(date => {
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
      
        prettyFormat += day + ' ' + monthNames[monthIndex] + ' ' + year;
      })

    return new Date(prettyFormat);
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
    const thisWeekStart = now;
    const thisWeekEnd = thisWeekendEnd;
    returnDates["thisWeek"] = [thisWeekStart, thisWeekEnd];
    const nextWeekStart = thisWeekEnd + 1;
    const nextWeekEnd = new Date(new Date(nextWeekStart).setDate(new Date(nextWeekStart).getDate() + 6)).setHours(23,59,59,999);
    returnDates["nextWeek"] = [nextWeekStart, nextWeekEnd];
    const thisMonthStart = now;
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
      <div>
        <div>{this.formatDates(this.state.searchParams.date)}</div>
        <Calendar selectRange={true} returnValue="range" onChange={this.handleInputFromCalendar}/>
      </div>
    ) : (
      <select onChange={this.handleInput("date")} defaultValue="">
        <option value="" disabled={true}>Any Date</option>
        <option value={today}>Today</option>
        <option value={tomorrow}>Tomorrow</option>
        <option value={thisWeekend}>This weekend</option>
        <option value={thisWeek}>This week</option>
        <option value={nextWeek}>Next week</option>
        <option value={thisMonth}>This month</option>
        <option value={nextMonth}>Next month</option>
        <option value="Pick a date...">Pick a date...</option>
      </select>
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
                <input type="text" placeholder="Event" value={this.state.event} onChange={this.handleInput("event")}/>
                <div className="input-styling-underline" />
              </div>
              <div className="splash-header-search-form-content location-content">
                <div className="search-form-input-info">In</div>
                <input type="text" placeholder="Location" value={this.state.location} onChange={this.handleInput("location")}/>
                <div className="input-styling-underline" />
              </div>
              <div className="splash-header-search-form-content date-content">
                <div className="search-form-input-info">On</div>
                <div className="search-form-select-wrapper">
                  {dateInputEle}
                </div>
                <div className="input-styling-underline" />
              </div>
              <div className="splash-header-search-form-submit">
                <button><i className="fas fa-search"></i></button>
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
