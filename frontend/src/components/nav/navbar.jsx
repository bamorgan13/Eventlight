import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import "../../styles/navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownHover: "hidden" };

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return this.getDropdown();
    } else {
      return <Link to="/login" >Sign In</Link>;
    }
  }

  toggleHover(event) {
    event.type === "mouseenter" ? this.setState({ dropdownHover: "active" }) : this.setState({ dropdownHover: "hidden" });
  }

  getDropdown() {
    const { dropdownHover } = this.state;
    return (
      <div className="nav-user-icon" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        Avatar
        <ul className={`nav-minor-dropdown-list-${dropdownHover}`}>
          <li className="nav-minor-dropdown-list-item browse-events-item">
            <Link to="/events">Browse Events</Link>
          </li>
          <li className="nav-minor-dropdown-list-item registrations-item">
            <Link to="/registrations">Tickets/Registrations</Link>
          </li>
          <li className="nav-minor-dropdown-list-item liked-item">
            <Link to="/liked">Liked</Link>
          </li>
          <li className="nav-minor-dropdown-list-item manage-events-item">
            <Link to="/myevents">Manage Events</Link>
          </li>
          <li className="nav-minor-dropdown-list-item create-event-item">
            <Link to="/myevents/create">Create Event</Link>
          </li>
          <li className="nav-minor-dropdown-list-item logout-item" onClick={this.logoutUser}>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    const createEventLink = this.props.location.pathname === "/login" ? 
      null : <Link to="/myevents/create" id="nav-create-event">Create Event</Link>;

    return (
      <nav className="nav-header">
        <div className="nav-major">
          <h1 id="nav-logo"><Link to="/">eventlight</Link></h1>
          <Link to="/events" >Browse Events</Link>
        </div>
        <div className="nav-minor">
          {createEventLink}
          {this.getLinks()}
        </div>
      </nav>
    )
  }
}

export default withRouter(NavBar);
