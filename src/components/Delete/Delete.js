import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Delete.css";

class Delete extends Component {
  constructor(props) {
    super(props);
  }

  handleYes() {
    //send delete request to api for this.props.match.params.country
  }

  handleNo() {
    //use Link to link to the /delete route
  }

  render() {
    return (
      <div className="delete-box">
        <h1>
          Are you sure you want to delete {this.props.match.params.country}
        </h1>
        <div className="button-box">
          <input type="button" value="Yes" onClick={this.handleYes} />
          <input type="button" value="No" onClick={this.handleNo} />
        </div>
      </div>
    );
  }
}

export default Delete;
