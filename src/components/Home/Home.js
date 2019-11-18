import React, { Component } from "react";
import Index from "../Index/Index";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Index
        countries={this.props.countries}
        type="country"
        page={this.props.page}
        onPageChangeNext={this.props.onPageChangeNext}
        onPageChangePrev={this.props.onPageChangePrev}
      />
    );
  }
}

export default Home;
