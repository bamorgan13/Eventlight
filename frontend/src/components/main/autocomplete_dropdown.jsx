import React from "react";
const moment = require("moment");

class AutocompleteDropdown extends React.Component {
  runAutocomplete(value) {
    return event => {
      this.props.autocomplete(value)
    }
  }

  render() {
    const { dropdownType } = this.props;
    const listItems = this.props[dropdownType].map( val => {
      if (dropdownType === "events") {
        return (
        <li key={val._id} className="autocomplete-dropdown-list-item" onClick={this.runAutocomplete(val.title)}>
          <div className="autocomplete-dropdown-list-item-primary">
            {val.title}
            <div className="autocomplete-dropdown-list-item-secondary">{moment(new Date(val.start_date)).format("llll")}</div>
            <div className="autocomplete-dropdown-list-item-tertiary">{val.location.location_name + val.location.city}</div>
          </div>
        </li> 
        );
      } else {
        return (
        <li key={val._id} className="autocomplete-dropdown-list-item" onClick={this.runAutocomplete(val.city)}>
          <div className="autocomplete-dropdown-list-item-primary">
            {val.city}
            <div className="autocomplete-dropdown-list-item-secondary">{val.state}, United States</div>
          </div>
        </li> 
        );
      }
    });

    return (
      <div className={`autocomplete-dropdown-${this.props.dropdownShow} autocomplete-dropdown-${this.props.dropdownType}`}>
        <ul className="autocomplete-dropdown-list">
          {listItems}
        </ul>
      </div>
    );
  }
}

export default AutocompleteDropdown;