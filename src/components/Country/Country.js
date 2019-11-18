import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Country.css";

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: {}
    };
  }

  componentDidMount() {
    //fetch country from api here using props.match.params.country and update state
  }

  render() {
    //TODO: implement plotly to graph temperature data for country
    let countryString = country.stringify();

    return (
      <div className="country-graph">
        <h2>{countryName}</h2>
        <p>{countryString}</p>
      </div>
    );
  }
}
