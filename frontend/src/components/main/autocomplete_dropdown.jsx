import React from "react";

class AutocompleteDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.defaultValues = props.dropdownType === "location" ? (
      [
        { city: "San Francisco", state: "CA"},
        { city: "New York", state: "NY"},
        { city: "Los Angeles", state: "CA"},
        { city: "Houston", state: "TX"},
        { city: "Atlanta", state: "GA"},
        { city: "Chicago", state: "IL"},
        { city: "Boston", state: "MA"},
        { city: "Philadelphia", state: "PA"},
        { city: "Miami", state: "FL"},
        { city: "Denver", state: "CO"}
      ]
    ) : [];
  }

  render() {
    const defaultItems = this.defaultValues.map( (val, idx) => 
    <li key={idx} className="autocomplete-dropdown-list-item">
      <div className="autocomplete-dropdown-list-item-info">
        {val.city}
        <div className="autocomplete-dropdown-list-item-desc">{val.state}, United States</div>
      </div>
    </li> 
    );
    return (
      <div className={`autocomplete-dropdown-${this.props.dropdownShow} autocomplete-dropdown-${this.props.dropdownType}`}>
        <ul className="autocomplete-dropdown-list">
          {defaultItems}
        </ul>
      </div>
    );
  }
}

export default AutocompleteDropdown;