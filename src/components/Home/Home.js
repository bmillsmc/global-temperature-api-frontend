import React, { Component } from "react";
import { Link } from "react-router-dom";
import Index from "../Index/Index";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Index
        countries={this.props.countries}
        type="country"
        page={this.props.page}
        onPageChangeNext={this.props.handlePageChangeNext}
        onPageChangePrev={this.props.handlePageChangePrev}
      />
    );
  }
}

export default Home;
