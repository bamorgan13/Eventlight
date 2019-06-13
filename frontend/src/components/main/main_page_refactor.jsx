import React from 'react';
import splashImage from "./bg-desktop-snowglobe.jpg";
import Calendar from "react-calendar";
import SearchBar from "../search/search_bar_container";
import LikeIndexContainer from "../likes/like_index_container";
import EventIndexContainer from "../events/event_index_container";
import * as SearchUtil from "../../util/search_util";
import "../../styles/splash.css";

class MainPage extends React.Component {
  componentWillMount() {
    this.props.fetchEvents();
  }

  componentWillUnmount() {
		this.props.clearAutocomplete();
  }

  render() {
    const likesIndexEle = this.props.loggedIn ? <LikeIndexContainer /> : null;

    return (
      <div className="splash-page">
        <div className="splash-header">
          <div className="splash-header-image">
            <img src={splashImage}/>
          </div>
          <div className="splash-header-search">
          <SearchBar classPrefix="splash"/>
          </div>
        </div>
        <div className="splash-likes-container">
          {likesIndexEle}
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


{/* <div className="splash-header-search">
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
</div> */}