import React from "react";

class AutocompleteDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  runAutocomplete(value) {
    return event => {
      this.props.autocomplete(value)
    }
  }

  render() {
    // const listItems = this.props[this.props.dropdownType].map( val => 
    const listItems = this.props.cities.map( val => {
      return (
      <li key={val._id} className="autocomplete-dropdown-list-item" onClick={this.runAutocomplete(val.city)}>
        <div className="autocomplete-dropdown-list-item-info">
          {val.city}
          <div className="autocomplete-dropdown-list-item-desc">{val.state}, United States</div>
        </div>
      </li> 
      );
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