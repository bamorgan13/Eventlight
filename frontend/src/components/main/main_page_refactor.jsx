import React from 'react';
import splashImage from "./bg-desktop-snowglobe.jpg";
import SearchBar from "../search/search_bar_container";
import LikeIndexContainer from "../likes/like_index_container";
import EventIndexContainer from "../events/event_index_container";
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