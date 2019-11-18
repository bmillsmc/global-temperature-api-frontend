import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Index.css";

class Index extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.props.handlePageChange(evt.target);
  }

  handleCountryClick(evt) {
    //handles when a country button is clicked, depending on props.type it sends the user to the corresponding component using Link to="/"+props.type+"/:country" which has a route on the main page for the component
  }

  render() {
    let countryInputs = this.props.countries.data.map(country => {
      return (
        <input
          onClick={this.handleCountryClick}
          type="button"
          value={country.country}
        />
      );
    });
    return <div className="country-divs">{countryInputs}</div>;
  }
}

export default Index;
