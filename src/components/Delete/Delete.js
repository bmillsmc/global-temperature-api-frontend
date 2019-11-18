import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Delete.css";

class Delete extends Component {
  handleYes() {
    //send delete request to api for this.props.match.params.country
  }

  render() {
    return (
      <div className="delete-box">
        <h1>
          Are you sure you want to delete {this.props.match.params.country}
        </h1>
        <div className="button-box">
          <input type="button" value="Yes" onClick={this.handleYes} />
          <Link to="/delete">
            <input type="button" value="No" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Delete;
