import React, { Component } from "react";
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
    fetch(this.props.url + "/" + this.props.match.params.country)
      .then(res => res.json())
      .then(res => {
        //res could possibly be an array with one object inside in which case do res[0].json()
        this.setState({
          country: res
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    //TODO: implement plotly to graph temperature data for country
    let countryString = JSON.stringify(this.state.country);
    let countryName = this.state.country.country;
    return (
      <div className="country-graph">
        <h2>{countryName}</h2>
        <p>{countryString}</p>
      </div>
    );
  }
}

export default Country;
