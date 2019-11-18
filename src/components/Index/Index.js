import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Index.css";

class Index extends Component {
  constructor(props) {
    super(props);

    this.handleChangePrev = this.handleChangePrev.bind(this);
    this.handleChangeNext = this.handleChangeNext.bind(this);
  }

  handleChangePrev(evt) {
    this.props.handlePageChangePrev(evt.target);
  }

  handleChangeNext(evt) {
    this.props.handlePageChangeNext(evt.target);
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
    return (
      <div className="index-box">
        <div className="country-div">{countryInputs}</div>
        <div className="page-box">
          <input type="button" value="Prev" onClick={this.handleChangePrev} />
          <p>{this.props.page}</p>
          <input type="button" value="Next" onClick={this.handleChangeNext} />
        </div>
      </div>
    );
  }
}

export default Index;
