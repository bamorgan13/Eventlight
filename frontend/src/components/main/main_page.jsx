import React from 'react';
import splashImage from "./bg-desktop-snowglobe.jpg";
import "../../styles/splash.css";

class MainPage extends React.Component {
  render() {
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
                <input type="text" placeholder="Event"/>
                <div className="input-styling-underline" />
              </div>
              <div className="splash-header-search-form-content location-content">
                <div className="search-form-input-info">In</div>
                <input type="text" placeholder="Location"/>
                <div className="input-styling-underline" />
              </div>
              <div className="splash-header-search-form-content date-content">
                <div className="search-form-input-info">On</div>
                <select className="">
                  <option value=""></option>
                </select>
                <div className="input-styling-underline" />
              </div>
              <div className="splash-header-search-form-submit">
                <button>Search</button>
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
