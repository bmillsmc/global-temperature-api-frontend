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

  render() {
    let countryInputs = this.props.countries.data.map(country => {
      return (
        <Link to={"/" + this.props.type + "/" + country.country}>
          <input type="button" value={country.country} />
        </Link>
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
