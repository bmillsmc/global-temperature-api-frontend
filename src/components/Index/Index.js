import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Index.css";

class Index extends Component {
  constructor(props) {
    super(props);
    this.clickCount = 0;
    this.handleChangePrev = this.handleChangePrev.bind(this);
    this.handleChangeNext = this.handleChangeNext.bind(this);
  }

  componentDidMount() {}

  handleChangePrev(evt) {
    this.props.onPageChangePrev(evt.target);
    this.clickCount++;
  }

  handleChangeNext(evt) {
    this.props.onPageChangeNext(evt.target);
    this.clickCount++;
  }

  render() {
    let countryInputs;
    if (this.props.countries.data) {
      countryInputs = this.props.countries.data.map(country => {
        return (
          <Link to={"/" + this.props.type + "/" + country.country}>
            <input type="button" value={country.country} />
          </Link>
        );
      });
    }
    let prevButton;
    if (this.clickCount === 0) {
      prevButton = (
        <input
          type="button"
          value="Prev"
          onClick={this.handleChangePrev}
          disabled
        />
      );
    } else {
      prevButton = (
        <input type="button" value="Prev" onClick={this.handleChangePrev} />
      );
    }

    return (
      <div className="index-box">
        <div className="country-div">{countryInputs}</div>
        <div className="page-box">
          {prevButton}
          <p>{this.props.page}</p>
          <input type="button" value="Next" onClick={this.handleChangeNext} />
        </div>
      </div>
    );
  }
}

export default Index;
