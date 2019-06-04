import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from "./dropdown";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        // return dropdown element instead?
        <div className="nav-minor-protected">
          <Link to="/foo" >Create Event</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      )
    } else {
      return (
        <div className="nav-minor-auth">
          <Link to="/login" >Create Event</Link>
          <Link to="/register" >Register</Link>
          <Link to="/login" >Sign In</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-major">
          <h1>Eventlight</h1>
          <Link to="/events" >Browse Events</Link>
        </div>
        <div className="nav-minor">
          {this.getLinks()}
        </div>
      </nav>
    )
  }
}

export default NavBar;
