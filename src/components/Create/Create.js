import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Create.css";

class Create extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    //handles when the submit button is pressed, converts the input into json and sends a create request to the api
  }

  render() {
    return (
      <div className="create-div">
        <input type="text" placeholder="JSON goes here..." />
        <input type="submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default Create;
