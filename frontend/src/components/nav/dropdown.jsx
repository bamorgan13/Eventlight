import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: "hidden" };

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover(event) {
    this.state.hover === "active" ? this.setState({ hover: "hidden" }) : this.setState({ hover: "active" });
  }

  render() {
    const { hover } = this.state;
    return (
      <div className={`nav-minor-dropdown-${hover}`} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        HOVER
      </div>
    );
  }
};

export default Dropdown; 